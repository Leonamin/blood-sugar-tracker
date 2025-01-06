import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconNavStatisticsFill = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill={color} d="M7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4V17H7V4Z" />
    <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M8 1C6.34315 1 5 2.34315 5 4V18C5 18.5523 5.44772 19 6 19H10C10.5523 19 11 18.5523 11 18V4C11 2.34315 9.65685 1 8 1ZM7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4V17H7V4ZM4 21C3.44772 21 3 21.4477 3 22C3 22.5523 3.44772 23 4 23H20C20.5523 23 21 22.5523 21 22C21 21.4477 20.5523 21 20 21H4Z" />
    <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M16 6C14.3431 6 13 7.34315 13 9V18C13 18.5523 13.4477 19 14 19H18C18.5523 19 19 18.5523 19 18V9C19 7.34315 17.6569 6 16 6ZM16 8C15.4477 8 15 8.44772 15 9V17H17V9C17 8.44772 16.5523 8 16 8Z" />
    <path fill={color} d="M15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V17H15V9Z" />
  </svg>
);
export default SvgIconNavStatisticsFill;