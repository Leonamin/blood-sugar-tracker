import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconDartBoard = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M1 12C1 5.925 5.925 1 12 1c1.148 0 2.257.176 3.3.504a1 1 0 1 1-.6 1.908A9 9 0 0 0 12 3a9 9 0 1 0 9 9c0-.942-.145-1.85-.412-2.7a1 1 0 0 1 1.908-.6c.328 1.043.504 2.152.504 3.3 0 6.075-4.925 11-11 11S1 18.075 1 12m18.383-9.424A1 1 0 0 1 20 3.5V4h.5a1 1 0 0 1 .707 1.707l-3 3A1 1 0 0 1 17.5 9h-1.086l-3.707 3.707a1 1 0 0 1-1.414-1.414L15 7.586V6.5a1 1 0 0 1 .293-.707l3-3a1 1 0 0 1 1.09-.217M6 12a6 6 0 0 1 6-6 1 1 0 1 1 0 2 4 4 0 1 0 4 4 1 1 0 1 1 2 0 6 6 0 0 1-12 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconDartBoard;
