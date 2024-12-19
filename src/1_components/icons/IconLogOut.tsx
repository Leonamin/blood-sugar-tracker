import * as React from "react";
import type { SVGProps } from "react";

interface IconLogOutProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconLogOut = ({ size = 24, color = "currentColor", ...props }: IconLogOutProps) => (
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
      d="M9 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 1 1 0 2H9a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h3a1 1 0 1 1 0 2zm5.793 3.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l.793-.793H10a1 1 0 1 1 0-2h5.586l-.793-.793a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconLogOut;
