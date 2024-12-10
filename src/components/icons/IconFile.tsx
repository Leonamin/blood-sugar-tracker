import type { IconProps } from "@/model/types/icon-propery";

const SvgIconFile = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7h-4a4 4 0 0 1-4-4V3zm6 1.63V8a2 2 0 0 0 2 2h2.773zm.344-2.623A3 3 0 0 0 11.102 1H7a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-7.24a3 3 0 0 0-.758-1.993z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconFile;
