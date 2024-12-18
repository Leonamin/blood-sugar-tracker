import * as React from "react";
import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconCreditCard = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => (
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
      d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v2h16V7a1 1 0 0 0-1-1zm15 5H4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zM5 15a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m8 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgIconCreditCard;
