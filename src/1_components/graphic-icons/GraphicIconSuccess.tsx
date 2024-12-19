import type { IconProps } from "@/0_model/types/icon-propery";

const GraphicIconSuccess = ({ size = 24, ...props }: Omit<IconProps, "color">) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="text-success-icon dark:text-success-icon-dark"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM17.2071 10.2071C17.5976 9.81658 17.5976 9.18342 17.2071 8.79289C16.8166 8.40237 16.1834 8.40237 15.7929 8.79289L10.5 14.0858L8.20711 11.7929C7.81658 11.4024 7.18342 11.4024 6.79289 11.7929C6.40237 12.1834 6.40237 12.8166 6.79289 13.2071L9.79289 16.2071C10.1834 16.5976 10.8166 16.5976 11.2071 16.2071L17.2071 10.2071Z"
            className="fill-current"
        />
    </svg>
);
export default GraphicIconSuccess; 