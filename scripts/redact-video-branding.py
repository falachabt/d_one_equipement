import argparse
from pathlib import Path

import cv2


def parse_rect(value: str) -> tuple[int, int, int, int]:
    parts = [int(part.strip()) for part in value.split(",")]
    if len(parts) != 4:
        raise argparse.ArgumentTypeError("Expected x1,y1,x2,y2")
    x1, y1, x2, y2 = parts
    if x2 <= x1 or y2 <= y1:
        raise argparse.ArgumentTypeError("Rectangle must satisfy x2>x1 and y2>y1")
    return x1, y1, x2, y2


def blur_region(frame, rect: tuple[int, int, int, int], blur: int) -> None:
    x1, y1, x2, y2 = rect
    region = frame[y1:y2, x1:x2]
    if region.size == 0:
        return
    blur_size = max(3, blur | 1)
    frame[y1:y2, x1:x2] = cv2.GaussianBlur(region, (blur_size, blur_size), 0)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Blur fixed branding areas in a video and optionally crop the result."
    )
    parser.add_argument("--input", required=True, help="Input video path")
    parser.add_argument("--output", required=True, help="Output video path")
    parser.add_argument(
        "--rect",
        action="append",
        default=[],
        type=parse_rect,
        help="Rectangle to blur in x1,y1,x2,y2 format. May be passed multiple times.",
    )
    parser.add_argument(
        "--crop",
        type=parse_rect,
        help="Optional crop box in x1,y1,x2,y2 format applied before blurring.",
    )
    parser.add_argument(
        "--blur",
        type=int,
        default=51,
        help="Odd-ish blur kernel size. Higher values hide logos more aggressively.",
    )
    args = parser.parse_args()

    capture = cv2.VideoCapture(str(Path(args.input)))
    if not capture.isOpened():
        raise SystemExit(f"Cannot open input video: {args.input}")

    fps = capture.get(cv2.CAP_PROP_FPS) or 30.0
    width = int(capture.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(capture.get(cv2.CAP_PROP_FRAME_HEIGHT))

    if args.crop:
        x1, y1, x2, y2 = args.crop
        output_width = x2 - x1
        output_height = y2 - y1
    else:
        x1 = y1 = 0
        output_width = width
        output_height = height

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    writer = cv2.VideoWriter(
        str(output_path),
        cv2.VideoWriter_fourcc(*"mp4v"),
        fps,
        (output_width, output_height),
    )
    if not writer.isOpened():
        raise SystemExit(f"Cannot open output video for writing: {args.output}")

    while True:
        ok, frame = capture.read()
        if not ok:
            break

        if args.crop:
            frame = frame[y1 : y1 + output_height, x1 : x1 + output_width].copy()

        for rect in args.rect:
            blur_region(frame, rect, args.blur)

        writer.write(frame)

    capture.release()
    writer.release()
    print(f"Saved redacted video to {output_path}")


if __name__ == "__main__":
    main()
