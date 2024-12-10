import * as React from "react";
import type { SVGProps } from "react";

interface IconSunProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconSun = ({ size = 24, color = "#171717", ...props }: IconSunProps) => (
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
      d="M12 1a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M4.222 4.222a1 1 0 0 1 1.414 0l1.06 1.06a1 1 0 0 1-1.414 1.415l-1.06-1.061a1 1 0 0 1 0-1.414m15.556 0a1 1 0 0 1 0 1.414l-1.06 1.06a1 1 0 1 1-1.415-1.414l1.061-1.06a1 1 0 0 1 1.414 0M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M1 12a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18.5 0a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1M6.697 17.303a1 1 0 0 1 0 1.415l-1.061 1.06a1 1 0 0 1-1.414-1.414l1.06-1.06a1 1 0 0 1 1.415 0m10.606 0a1 1 0 0 1 1.415 0l1.06 1.061a1 1 0 0 1-1.414 1.414l-1.06-1.06a1 1 0 0 1 0-1.415M12 19.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSun;
