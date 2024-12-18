import * as React from "react";
import type { SVGProps } from "react";

interface IconMailAltProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconMailAlt = ({ size = 24, color = "currentColor", ...props }: IconMailAltProps) => (
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
      d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-.894 1.553a1 1 0 0 1 1.341-.447l4.211 2.105a3 3 0 0 0 2.684 0l4.21-2.105a1 1 0 1 1 .895 1.788L14.237 11a5 5 0 0 1-4.473 0L5.553 8.894a1 1 0 0 1-.447-1.341"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconMailAlt;
