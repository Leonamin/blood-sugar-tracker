import * as React from "react";
import type { SVGProps } from "react";

interface IconSendProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconSend = ({ size = 24, color = "#171717", ...props }: IconSendProps) => (
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
      d="m18.995 5.005-13.989 5.38 4.946 2.249 3.737-3.737a1 1 0 1 1 1.414 1.414l-3.737 3.737 2.249 4.946zm-9.581 9.581L4.17 12.203c-1.611-.733-1.543-3.045.11-3.681l14.005-5.387c1.614-.62 3.2.966 2.58 2.58L15.478 19.72c-.636 1.653-2.948 1.722-3.68.11z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSend;
