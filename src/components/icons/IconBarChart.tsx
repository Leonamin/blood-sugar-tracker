import type { IconProps } from "@/model/types/icon-propery";

const SvgIconBarChart = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M5 4a3 3 0 0 1 6 0v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm3-1a1 1 0 0 0-1 1v13h2V4a1 1 0 0 0-1-1m5 6a3 3 0 1 1 6 0v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-1a1 1 0 0 0-1 1v8h2V9a1 1 0 0 0-1-1M3 22a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBarChart;
