import * as React from "react";
import type { SVGProps } from "react";

interface IconPencilProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconPencil = ({ size = 24, color = "currentColor", ...props }: IconPencilProps) => (
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
      d="M19.15 4.85a2.9 2.9 0 0 0-4.1 0l-.136.135 4.1 4.1.137-.135a2.9 2.9 0 0 0 0-4.1M17.6 10.5l-4.1-4.1-7.721 7.72 4.1 4.101zm-9.445 8.826-3.48-3.481-.673 4.035c-.012.07.049.13.118.118zm5.48-15.89a4.9 4.9 0 1 1 6.93 6.928l-9.979 9.979a3.2 3.2 0 0 1-1.74.895l-4.397.733a2.103 2.103 0 0 1-2.42-2.42l.733-4.397c.11-.66.423-1.268.895-1.74z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconPencil;
