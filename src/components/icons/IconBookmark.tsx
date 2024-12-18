import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconBookmark = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M3 5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v17a1 1 0 0 1-1.53.848l-6.41-4.006a2 2 0 0 0-2.12 0l-6.41 4.006A1 1 0 0 1 3 22zm4-2a2 2 0 0 0-2 2v15.196l4.88-3.05a4 4 0 0 1 4.24 0l4.88 3.05V5a2 2 0 0 0-2-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBookmark;
