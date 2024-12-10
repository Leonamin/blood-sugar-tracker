import * as React from "react";
import type { SVGProps } from "react";

interface IconSearchProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconSearch = ({ size = 24, color = "#171717", ...props }: IconSearchProps) => (
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
      d="M15.95 6.05a7 7 0 1 0-9.9 9.9 7 7 0 0 0 9.9-9.9M4.636 4.636a9 9 0 0 1 13.396 11.982l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9.001 9.001 0 0 1 4.636 4.636"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSearch;
