import * as React from "react";
import type { SVGProps } from "react";

interface IconPlusProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconPlus = ({ size = 24, color = "#171717", ...props }: IconPlusProps) => (
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
      d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgIconPlus;
