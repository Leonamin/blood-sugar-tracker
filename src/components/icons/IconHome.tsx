import type { IconProps } from "@/model/types/icon-propery";

const SvgIconHome = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M12.73 4.279a1.094 1.094 0 0 0-1.46 0L5.564 9.637A1.74 1.74 0 0 0 5 10.9v7.283C5 19.128 5.835 20 7 20h10c1.165 0 2-.872 2-1.817V10.9c0-.46-.194-.916-.562-1.262h-.001zm1.369-1.458c-1.166-1.095-3.032-1.095-4.197 0L4.194 8.179 2.316 9.943A1 1 0 0 0 3 11.673v6.51C3 20.35 4.851 22 7 22h10c2.149 0 4-1.65 4-3.817v-6.51a1 1 0 0 0 .684-1.729zM8 17a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconHome;
