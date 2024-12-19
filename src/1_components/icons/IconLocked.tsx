import * as React from "react";
import type { SVGProps } from "react";

interface IconLockedProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconLocked = ({ size = 24, color = "currentColor", ...props }: IconLockedProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M9 8a3 3 0 1 1 6 0v3H9zm8 0v3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3V8a5 5 0 0 1 10 0M6 14a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm6 3.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgIconLocked;
