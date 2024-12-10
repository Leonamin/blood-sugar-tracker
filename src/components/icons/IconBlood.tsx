import type { IconProps } from "@/model/types/icon-propery";

const SvgIconBlood = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M12 3a.73.73 0 0 0-.467.172c-1.04.853-2.699 2.458-4.088 4.431C6.043 9.593 5 11.84 5 14a7 7 0 0 0 14 0c0-2.16-1.043-4.406-2.445-6.397-1.39-1.973-3.048-3.578-4.088-4.43A.73.73 0 0 0 12 3m-1.735-1.375A2.73 2.73 0 0 1 12 1c.619 0 1.231.213 1.735.625 1.154.946 2.944 2.68 4.456 4.827C19.69 8.582 21 11.238 21 14a9 9 0 0 1-18 0c0-2.762 1.31-5.418 2.81-7.548 1.51-2.147 3.301-3.881 4.455-4.827M7.429 13a1 1 0 0 1 1 1A3.57 3.57 0 0 0 12 17.571a1 1 0 1 1 0 2A5.57 5.57 0 0 1 6.429 14a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBlood;
