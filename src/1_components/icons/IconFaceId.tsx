import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconFaceId = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M6 4a2 2 0 0 0-2 2v1a1 1 0 0 1-2 0V6a4 4 0 0 1 4-4h1a1 1 0 0 1 0 2zm10-1a1 1 0 0 1 1-1h1a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2h-1a1 1 0 0 1-1-1M8 7a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-4 1a1 1 0 0 1 1 1v3a1 1 0 0 1-.293.707l-.5.5a1 1 0 0 1-1.414-1.414l.207-.207V9a1 1 0 0 1 1-1m-4.625 6.22a1 1 0 0 1 1.406.155c1.6 2 4.839 2 6.438 0a1 1 0 1 1 1.562 1.25c-2.4 3-7.162 3-9.562 0a1 1 0 0 1 .156-1.406M3 16a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2h1a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4h-1a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-1a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconFaceId;
