import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconNavCalendar = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill={color} fill-rule="evenodd" clip-rule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2H15C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2H18C20.2091 2 22 3.79086 22 6V19C22 21.2091 20.2091 23 18 23H6C3.79086 23 2 21.2091 2 19V6C2 3.79086 3.79086 2 6 2H7C7 1.44772 7.44772 1 8 1ZM7 4H6C4.89543 4 4 4.89543 4 6V8H20V6C20 4.89543 19.1046 4 18 4H17C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4H9C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4ZM20 10H4V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V10Z" />
  </svg>
);
export default SvgIconNavCalendar;


