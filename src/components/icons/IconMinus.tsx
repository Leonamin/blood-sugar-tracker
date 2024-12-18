import * as React from "react";
import type { SVGProps } from "react";

interface IconMinusProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconMinus = ({ size = 24, color = "currentColor", ...props }: IconMinusProps) => (
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
      d="M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconMinus;
