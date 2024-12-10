import * as React from "react";
import type { SVGProps } from "react";

interface IconMinusCircleProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconMinusCircle = ({ size = 24, color = "#171717", ...props }: IconMinusCircleProps) => (
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
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-5.5 9a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconMinusCircle;
