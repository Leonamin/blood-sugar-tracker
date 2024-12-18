import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconChevronLeft = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M9 13.414a2 2 0 0 1 0-2.828l5.293-5.293a1 1 0 0 1 1.414 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconChevronLeft;
