import { cn } from "@/lib/utils";
import type { IconProps } from "@/model/types/icon-propery";

const SvgIconChevronDown = ({ size = 24, color = "currentColor", className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    {...props}
    className={cn("transition-transform", className)}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M10.586 15a2 2 0 0 0 2.828 0l5.293-5.293a1 1 0 0 0-1.414-1.414L12 13.586 6.707 8.293a1 1 0 0 0-1.414 1.414z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconChevronDown;
