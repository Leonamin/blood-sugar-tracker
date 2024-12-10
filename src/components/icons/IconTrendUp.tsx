import * as React from "react";
import type { SVGProps } from "react";

interface IconTrendUpProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconTrendUp = ({ size = 24, color = "#171717", ...props }: IconTrendUpProps) => (
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
      d="M16 8a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9.414l-5.133 5.134a3 3 0 0 1-3.786.375L8.81 12.742a1 1 0 0 0-1.262.124l-4.84 4.841a1 1 0 0 1-1.415-1.414l4.84-4.84a3 3 0 0 1 3.786-.376l3.271 2.182a1 1 0 0 0 1.262-.126L19.586 8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconTrendUp;
