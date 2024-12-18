import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconChevronUp = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M10.586 9a2 2 0 0 1 2.828 0l5.293 5.293a1 1 0 0 1-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconChevronUp;
