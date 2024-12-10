import type { IconProps } from "@/model/types/icon-propery";

const SvgIconCopy = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M2 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 1 1-2 0 1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1 1 1 0 1 1 0 2 3 3 0 0 1-3-3zm6 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCopy;
