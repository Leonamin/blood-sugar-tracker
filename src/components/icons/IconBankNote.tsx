import type { IconProps } from "@/model/types/icon-propery";

const SvgIconBankNote = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M4 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H4m1.5 2A2.5 2.5 0 0 1 3 9.5v5A2.5 2.5 0 0 1 5.5 17h13a2.5 2.5 0 0 1 2.5-2.5v-5A2.5 2.5 0 0 1 18.5 7zm6.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBankNote;
