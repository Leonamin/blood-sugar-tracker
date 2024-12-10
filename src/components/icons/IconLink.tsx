import type { IconProps } from "@/model/types/icon-propery";

const SvgIconLink = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M2 12a5 5 0 0 1 5-5h2a1 1 0 0 1 0 2H7a3 3 0 1 0 0 6h2a1 1 0 1 1 0 2H7a5 5 0 0 1-5-5m12-4a1 1 0 0 1 1-1h2a5 5 0 0 1 0 10h-2a1 1 0 1 1 0-2h2a3 3 0 1 0 0-6h-2a1 1 0 0 1-1-1m-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconLink;
