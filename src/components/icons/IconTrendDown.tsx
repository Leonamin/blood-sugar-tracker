import * as React from "react";
import type { SVGProps } from "react";

interface IconTrendDownProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconTrendDown = ({
  size = 24,
  color = "#171717",
  ...props
}: IconTrendDownProps) => (
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
      d="M1.293 6.293a1 1 0 0 1 1.414 0l4.84 4.84a1 1 0 0 0 1.263.126l3.271-2.182a3 3 0 0 1 3.786.375L21 14.586V11a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.586l-5.134-5.133a1 1 0 0 0-1.261-.126l-3.272 2.182a3 3 0 0 1-3.785-.375l-4.841-4.84a1 1 0 0 1 0-1.415"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgIconTrendDown;
