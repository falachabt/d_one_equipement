"use client";

import { motion } from "framer-motion";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimateInProps) {
  const offsets = {
    up: { y: 16, x: 0 },
    down: { y: -16, x: 0 },
    left: { y: 0, x: 16 },
    right: { y: 0, x: -16 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 0, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerChildrenProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      initial="visible"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      {children}
    </motion.div>
  );
}
