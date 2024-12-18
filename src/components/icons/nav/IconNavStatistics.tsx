import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconNavStatistics = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill={color} fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 2.34315 6.34315 1 8 1C9.65685 1 11 2.34315 11 4V18C11 18.5523 10.5523 19 10 19H6C5.44772 19 5 18.5523 5 18V4ZM8 3C7.44772 3 7 3.44772 7 4V17H9V4C9 3.44772 8.55228 3 8 3ZM13 9C13 7.34315 14.3431 6 16 6C17.6569 6 19 7.34315 19 9V18C19 18.5523 18.5523 19 18 19H14C13.4477 19 13 18.5523 13 18V9ZM16 8C15.4477 8 15 8.44772 15 9V17H17V9C17 8.44772 16.5523 8 16 8ZM3 22C3 21.4477 3.44772 21 4 21H20C20.5523 21 21 21.4477 21 22C21 22.5523 20.5523 23 20 23H4C3.44772 23 3 22.5523 3 22Z" />
  </svg>
);
export default SvgIconNavStatistics;

