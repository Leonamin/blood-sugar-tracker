import type { IconProps } from "@/model/types/icon-propery";

const GraphicIconInfo = ({ size = 24, ...props }: Omit<IconProps, "color">) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="text-info-icon dark:text-info-icon-dark"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 7C13 7.55229 12.5523 8 12 8C11.4477 8 11 7.55229 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7ZM12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10Z"
            className="fill-current"
        />
    </svg>
);
export default GraphicIconInfo; 