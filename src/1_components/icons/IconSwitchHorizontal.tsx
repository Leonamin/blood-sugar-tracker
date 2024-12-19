import * as React from "react";
import type { SVGProps } from "react";

interface IconSwitchHorizontalProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconSwitchHorizontal = ({ size = 24, color = "currentColor", ...props }: IconSwitchHorizontalProps) => (
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
      d="M13.793 3.293a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414-1.414L15.586 8.5H6a1 1 0 0 1 0-2h9.586l-1.793-1.793a1 1 0 0 1 0-1.414m-3.586 9a1 1 0 0 1 0 1.414L8.414 15.5H18a1 1 0 1 1 0 2H8.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSwitchHorizontal;
