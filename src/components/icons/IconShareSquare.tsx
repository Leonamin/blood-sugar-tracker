import * as React from "react";
import type { SVGProps } from "react";

interface IconShareSquareProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconShareSquare = ({ size = 24, color = "#171717", ...props }: IconShareSquareProps) => (
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
      d="M3 7a4 4 0 0 1 4-4h4a1 1 0 1 1 0 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a1 1 0 1 1 2 0v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm12-2a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L17.586 5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconShareSquare;
