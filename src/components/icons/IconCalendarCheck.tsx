import type { IconProps } from "@/model/types/icon-propery";

const SvgIconCalendarCheck = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M8 1a1 1 0 0 1 1 1h6a1 1 0 1 1 2 0h1a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1a1 1 0 0 1 1-1M7 4H6a2 2 0 0 0-2 2v2h16V6a2 2 0 0 0-2-2h-1a1 1 0 1 1-2 0H9a1 1 0 0 1-2 0m13 6H4v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-4.793 2.793a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 1 1 1.414-1.414l.793.793 2.793-2.793a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCalendarCheck;
