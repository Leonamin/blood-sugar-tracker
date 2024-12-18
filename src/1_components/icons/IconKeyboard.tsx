import * as React from "react";
import type { SVGProps } from "react";

interface IconKeyboardProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconKeyboard = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconKeyboardProps) => (
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
      d="M1 7a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm1 3a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m3.5 0a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2h-.5a1 1 0 0 1-1-1M16 9a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m3.5 0a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2h-.5a1 1 0 0 1-1-1m3.5 0a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1m3.5 0a1 1 0 0 1 1-1H18a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1M5 15a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m3.5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1m8 0a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2h-.5a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgIconKeyboard;
