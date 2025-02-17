import * as React from "react";
import type { SVGProps } from "react";

interface IconEyeOffProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconEyeOff = ({ size = 24, color = "currentColor", ...props }: IconEyeOffProps) => (
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
      d="m10.315 7.283.451-.15c2.595-.562 5.497.651 7.653 4.09.298.475.299 1.08 0 1.554q-.337.537-.697 1.002l-.376.445 1.527 1.292.39-.462.027-.032q.43-.555.824-1.183a3.46 3.46 0 0 0 0-3.679c-2.495-3.979-6.191-5.787-9.834-4.968a1 1 0 0 0-.096.027l-.5.166zm-4.735 3.94C6.467 9.808 7.485 8.77 8.546 8.08L7.454 6.404c-1.338.871-2.55 2.134-3.569 3.757a3.47 3.47 0 0 0 .002 3.68c1.657 2.643 3.838 4.333 6.217 4.925 2.394.596 4.865.047 6.998-1.56l-1.204-1.597c-1.694 1.277-3.553 1.654-5.31 1.216-1.772-.44-3.56-1.74-5.007-4.046a1.47 1.47 0 0 1-.001-1.556m4.989-.62q.047-.05.098-.094L9.614 9.333l-.021-.028-.002.002-.258-.288a4 4 0 1 0 5.505 5.8l-1.42-1.41a2 2 0 0 1-3.417-1.494 1.5 1.5 0 0 0 1.395-.212z"
      clipRule="evenodd"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgIconEyeOff;
