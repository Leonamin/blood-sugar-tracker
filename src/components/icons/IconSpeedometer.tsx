import * as React from "react";
import type { SVGProps } from "react";

interface IconSpeedometerProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconSpeedometer = ({ size = 24, color = "currentColor", ...props }: IconSpeedometerProps) => (
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
      d="M12 3a8.99 8.99 0 0 0-7.387 3.858A8.95 8.95 0 0 0 3 12q0 .457.044.901A8.9 8.9 0 0 0 3.935 16H7.1a5 5 0 0 1 .797-1.858 5 5 0 0 1 5.114-2.04l1.07-2.496a1 1 0 1 1 1.838.788l-1.07 2.497a5.02 5.02 0 0 1 1.996 2.87q.03.12.055.239h3.165A8.9 8.9 0 0 0 21 12a9 9 0 0 0-.278-2.23 9 9 0 0 0-1.335-2.912A8.99 8.99 0 0 0 12 3m6.708 15H5.292a8.98 8.98 0 0 0 8.06 2.9 8.98 8.98 0 0 0 5.356-2.9m-3.878-2a3.014 3.014 0 0 0-1.648-1.759A3 3 0 0 0 12 14a2.995 2.995 0 0 0-2.83 2zM2.972 5.714A10.99 10.99 0 0 1 12 1c3.739 0 7.042 1.866 9.028 4.714A10.96 10.96 0 0 1 23 12q0 .555-.054 1.099a10.9 10.9 0 0 1-1.418 4.402 11.01 11.01 0 0 1-11.177 5.376 11 11 0 0 1-7.879-5.376A10.94 10.94 0 0 1 1 12a11 11 0 0 1 .34-2.725c.33-1.295.89-2.497 1.632-3.561M12 4a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M6.343 6.343a1 1 0 0 1 1.414 0l.354.354A1 1 0 1 1 6.697 8.11l-.354-.354a1 1 0 0 1 0-1.414m11.314 0a1 1 0 0 1 0 1.414l-.354.354a1 1 0 1 1-1.414-1.414l.354-.354a1 1 0 0 1 1.414 0M4 12a1 1 0 0 1 1-1h.5a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1m13.5 0a1 1 0 0 1 1-1h.5a1 1 0 0 1 0 2h-.5a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSpeedometer;
