import * as React from "react";
import type { SVGProps } from "react";

interface IconQuestionCircleProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconQuestionCircle = ({ size = 24, color = "#171717", ...props }: IconQuestionCircleProps) => (
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m6.861-2.905a2.21 2.21 0 0 1 3.008-.8 2.177 2.177 0 0 1 .805 2.982c-.303.522-.79.874-1.336 1.02a1 1 0 1 0 .516 1.932 4.2 4.2 0 0 0 2.55-1.949 4.177 4.177 0 0 0-1.538-5.72 4.21 4.21 0 0 0-5.735 1.531 1 1 0 0 0 1.73 1.004M12 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconQuestionCircle;
