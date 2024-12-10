import type { IconProps } from "@/model/types/icon-propery";

const SvgIconEye = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M5.58 11.222C7.409 8.309 9.775 7 12 7s4.592 1.309 6.419 4.222a1.47 1.47 0 0 1 0 1.556C16.592 15.691 14.225 17 11.999 17s-4.591-1.309-6.418-4.222a1.47 1.47 0 0 1 0-1.556m14.533-1.063C18.018 6.819 15.08 5 12 5c-3.08 0-6.018 1.818-8.113 5.159a3.47 3.47 0 0 0 0 3.682C5.982 17.181 8.92 19 12 19c3.08 0 6.018-1.818 8.113-5.159a3.47 3.47 0 0 0 0-3.682m-8.198-.157L12 10a2 2 0 1 1-1.998 1.915 1.5 1.5 0 0 0 1.913-1.913M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconEye;
