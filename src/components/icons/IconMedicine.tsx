import * as React from "react";
import type { SVGProps } from "react";

interface IconMedicineProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconMedicine = ({ size = 24, color = "#171717", ...props }: IconMedicineProps) => (
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
      d="M1 7.5a4.5 4.5 0 0 1 9 0v9a4.5 4.5 0 1 1-9 0zM5.5 5A2.5 2.5 0 0 0 3 7.5V11h5V7.5A2.5 2.5 0 0 0 5.5 5M8 13H3v3.5a2.5 2.5 0 0 0 5 0zm8-4.874a4.002 4.002 0 0 0 0 7.748zm2 0v7.748a4.002 4.002 0 0 0 0-7.748M11 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconMedicine;
