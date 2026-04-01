import { ImageResponse } from "next/og";

import { company } from "@/data/site";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

type SocialImageArgs = {
  eyebrow: string;
  title: string;
  description: string;
  kicker?: string;
};

export function createSocialImage({
  eyebrow,
  title,
  description,
  kicker = company.areas.slice(0, 3).join(" · "),
}: SocialImageArgs) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #142019 0%, #1b2c22 55%, #304638 100%)",
          color: "#f7f2e9",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(240,205,96,0.18), transparent 28%), radial-gradient(circle at bottom left, rgba(240,205,96,0.1), transparent 32%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px 64px",
            border: "1px solid rgba(240,205,96,0.14)",
            margin: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "24px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "820px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#f0cd60",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    width: 56,
                    height: 2,
                    background: "#f0cd60",
                  }}
                />
                {eyebrow}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 72,
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 28,
                  lineHeight: 1.4,
                  color: "rgba(247,242,233,0.82)",
                  maxWidth: "900px",
                }}
              >
                {description}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                minWidth: 190,
                border: "1px solid rgba(240,205,96,0.24)",
                padding: "18px 20px",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 18,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "rgba(247,242,233,0.56)",
                }}
              >
                Marque
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 34,
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                D-ONE
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  color: "rgba(247,242,233,0.72)",
                }}
              >
                EQUIPMENT
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#f0cd60",
              }}
            >
              {kicker}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "rgba(247,242,233,0.7)",
              }}
            >
              {company.phone}
            </div>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
