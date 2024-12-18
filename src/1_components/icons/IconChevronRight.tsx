import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconChevronRight = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M15 10.586a2 2 0 0 1 0 2.828l-5.293 5.293a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconChevronRight;
