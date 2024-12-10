import * as React from "react";
import type { SVGProps } from "react";

interface IconMoonProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconMoon = ({ size = 24, color = "#171717", ...props }: IconMoonProps) => (
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
      d="M2 12C2 5.954 6.76 1 12.695 1c.98 0 1.93.136 2.834.39a1 1 0 0 1 .031 1.916c-2.748.873-4.773 3.527-4.773 6.694 0 3.895 3.054 7 6.756 7a6.5 6.5 0 0 0 3-.726 1 1 0 0 1 1.32 1.395C19.998 20.852 16.598 23 12.695 23 6.76 23 2 18.046 2 12m10.005-8.972C7.55 3.392 4 7.243 4 12c0 5 3.922 9 8.695 9 2.08 0 3.994-.756 5.495-2.024q-.32.024-.647.024c-4.865 0-8.756-4.059-8.756-9a9.08 9.08 0 0 1 3.218-6.972"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgIconMoon;
