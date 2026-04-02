"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTriggered(true), 350 + delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const offsets = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { y: 0, x: 28 },
    right: { y: 0, x: -28 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={triggered ? { opacity: 1, y: 0, x: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0 }}
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
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTriggered(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={triggered ? "visible" : undefined}
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
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
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
