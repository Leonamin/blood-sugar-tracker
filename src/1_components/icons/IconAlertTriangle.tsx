import type { IconProps } from "@/0_model/types/icon-propery";

const SvgIconAlertTriangle = ({ size = 24, color = "currentColor", ...props }: IconProps) => (
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
      d="M14.94 4.66c-1.264-2.214-4.615-2.214-5.88 0L2.408 16.315C1.136 18.541 2.947 21 5.347 21h13.307c2.399 0 4.21-2.459 2.939-4.686zm-4.143.992c.497-.87 1.91-.87 2.406 0l6.653 11.654c.381.667-.07 1.694-1.203 1.694H5.348c-1.133 0-1.584-1.027-1.203-1.694zM13 8.5a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm-1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconAlertTriangle;
