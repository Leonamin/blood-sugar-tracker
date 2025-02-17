import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconClock = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 3a1 1 0 0 1 1 1v4.586l1.707 1.707a1 1 0 0 1-1.414 1.414l-1.854-1.853A1.5 1.5 0 0 1 11 11.793V7a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconClock;
