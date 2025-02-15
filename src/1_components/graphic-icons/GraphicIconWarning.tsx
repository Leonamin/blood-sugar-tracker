import type { IconProps } from "@/0_model/types/icon-propery";

const GraphicIconWarning = ({ size = 24, ...props }: Omit<IconProps, "color">) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="text-warning-icon dark:text-warning-icon-dark"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.34668 20H18.6533C20.4193 20 21.5507 18.2574 20.7245 16.8101L14.0711 5.15633C13.1909 3.61455 10.8091 3.61456 9.92888 5.15634L3.27555 16.8101C2.44927 18.2574 3.5807 20 5.34668 20ZM12 7.5C12.5523 7.5 13 7.94772 13 8.5V13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5V8.5C11 7.94772 11.4477 7.5 12 7.5ZM13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5C12.5523 15.5 13 15.9477 13 16.5Z"
            className="fill-current"
        />
    </svg>
);
export default GraphicIconWarning; 