import type { IconProps } from "@/0_model/types/icon-propery";

const GraphicIconDanger = ({ size = 24, ...props }: Omit<IconProps, "color">) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="text-danger-icon dark:text-danger-icon-dark"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 8.82843V15.1716C2 15.702 2.21071 16.2107 2.58579 16.5858L7.41421 21.4142C7.78929 21.7893 8.298 22 8.82843 22H15.1716C15.702 22 16.2107 21.7893 16.5858 21.4142L21.4142 16.5858C21.7893 16.2107 22 15.702 22 15.1716V8.82843C22 8.298 21.7893 7.78929 21.4142 7.41421L16.5858 2.58579C16.2107 2.21071 15.702 2 15.1716 2H8.82843C8.298 2 7.78929 2.21071 7.41421 2.58579L2.58579 7.41421C2.21071 7.78929 2 8.298 2 8.82843ZM12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
            className="fill-current"
        />
    </svg>
);
export default GraphicIconDanger; 