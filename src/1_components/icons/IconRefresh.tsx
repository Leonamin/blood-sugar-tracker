import * as React from "react";
import type { SVGProps } from "react";

interface IconRefreshProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconRefresh = ({ size = 24, color = "currentColor", ...props }: IconRefreshProps) => (
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
      d="M2.248 9.779C3.258 5.325 7.24 2 12 2a9.97 9.97 0 0 1 7.071 2.929L21 6.858V4a1 1 0 1 1 2 0v5.272a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.586l-1.93-1.929a8.003 8.003 0 0 0-13.459 3.878 1 1 0 0 1-1.95-.442m18.75 3.246a1 1 0 0 1 .754 1.196C20.742 18.675 16.76 22 12 22a9.97 9.97 0 0 1-7.071-2.929L3 17.142V20a1 1 0 1 1-2 0v-5.272a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4.414l1.93 1.929a8.004 8.004 0 0 0 13.459-3.878 1 1 0 0 1 1.195-.754"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconRefresh;
