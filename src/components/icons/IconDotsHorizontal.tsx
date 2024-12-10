import type { IconProps } from "@/model/types/icon-propery";

const SvgIconDotsHorizontal = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M4 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconDotsHorizontal;
