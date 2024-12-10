import * as React from "react";
import type { SVGProps } from "react";

interface IconUserProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconUser = ({ size = 24, color = "#171717", ...props }: IconUserProps) => (
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
      d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M4 19a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6-4a4 4 0 0 0-4 4v1h12v-1a4 4 0 0 0-4-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconUser;
