import type { ReactNode } from "react";

const variants = {
  a: "robot-float-a",
  b: "robot-float-b",
  c: "robot-float-c",
  d: "robot-float-d",
} as const;

export function RobotFloat({
  children,
  className = "",
  variant = "a",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
}) {
  return (
    <div className={`robot-float ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
