import * as React from "react";
import type { SVGProps } from "react";

interface IconWheelDriveFrontProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconWheelDriveFront = ({ size = 24, color = "currentColor", ...props }: IconWheelDriveFrontProps) => (
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
      d="M1 10a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1h12v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H6v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm3 0H3v4h1zm17 0h-1v4h1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconWheelDriveFront;
