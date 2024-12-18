export type IndicatorStep = 1 | 2 | 3 | 4;

export interface StepIndicatorProps {
    step: IndicatorStep;
}

function getActiveStyle(step: IndicatorStep): string {
    const colorSet: Record<IndicatorStep, string> = {
        1: 'color-fill-brand',
        2: 'color-fill-success',
        3: 'color-fill-warning',
        4: 'color-fill-danger',
    };

    return colorSet[step];
}

interface StepSvgProps {
    activeStyle: string;
    disabledStyle?: string;
    paths: {
        d: string;
        isActive: boolean;
    }[];
}

const StepSvg = ({ activeStyle, disabledStyle = 'color-fill-disabled', paths }: StepSvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="398" height="228" viewBox="0 0 398 228" fill="none">
            {paths.map((path, index) => (
                <g filter={`url(#${getFilterId(index + 1)})`}>
                    <path
                        key={index}
                        d={path.d}
                        className={path.isActive ? activeStyle : disabledStyle}
                    />
                </g>
            ))}
            <Defs />
        </svg>
    );
};

const commonPaths = [
    "M36.4521 191.049C29.3261 191.049 23.4988 185.264 24.0342 178.158C26.6735 143.13 40.0135 109.744 62.239 82.5422C66.7478 77.0239 74.9575 76.8471 80.1214 81.7578L106.161 106.521C111.325 111.431 111.46 119.559 107.189 125.263C95.6078 140.729 88.3124 158.987 86.0466 178.176C85.2109 185.253 79.5125 191.049 72.3865 191.049H36.4521Z",
    "M82.9043 78.9042C77.8654 73.8653 77.8358 65.6538 83.239 61.0078C109.874 38.1057 142.914 23.9309 177.864 20.4122C184.955 19.6983 190.885 25.3784 191.064 32.5022L191.967 68.4252C192.146 75.549 186.494 81.3913 179.441 82.4045C160.315 85.1518 142.246 92.9038 127.076 104.87C121.481 109.283 113.353 109.352 108.314 104.314L82.9043 78.9042Z",
    "M195.049 32.4521C195.049 25.3261 200.835 19.4988 207.941 20.0342C242.968 22.6735 276.355 36.0135 303.556 58.239C309.075 62.7478 309.251 70.9575 304.341 76.1214L279.578 102.161C274.667 107.325 266.54 107.46 260.836 103.189C245.37 91.6078 227.111 84.3124 207.923 82.0466C200.846 81.2109 195.049 75.5125 195.049 68.3865V32.4521Z",
    "M307.194 78.9041C312.233 73.8653 320.445 73.8357 325.091 79.2389C347.993 105.873 362.168 138.914 365.686 173.864C366.4 180.954 360.72 186.885 353.596 187.064L317.673 187.967C310.549 188.146 304.707 182.494 303.694 175.44C300.947 156.315 293.195 138.246 281.229 123.076C276.816 117.481 276.746 109.352 281.785 104.314L307.194 78.9041Z",
];

interface FilterProps {
    x: number;
    y: number;
    width: number;
    height: number;
}

const filterProps: Record<IndicatorStep, FilterProps> = {
    1: { x: 0, y: 58.2308, width: 142.227, height: 168.818 },
    2: { x: 55.155, y: 0.351501, width: 168.816, height: 143.787 },
    3: { x: 171.049, y: 0, width: 168.818, height: 142.227 },
    4: { x: 253.96, y: 55.1549, width: 143.787, height: 168.816 },
};

const getFilterId = (step: number) => {
    return `filter${step - 1}_dd_292_6169`;
}

const getFilter = (step: IndicatorStep) => {
    const { x, y, width, height } = filterProps[step];
    const filterId = getFilterId(step);

    return (
        <filter id={filterId} x={x} y={y} width={width} height={height} filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="4" dy="8" />
            <feGaussianBlur stdDeviation="14" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_292_6169" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="6" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_292_6169" result="effect2_dropShadow_292_6169" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_292_6169" result="shape" />
        </filter>
    );
}

const Defs = () => {
    return (
        <defs>
            {getFilter(1)}
            {getFilter(2)}
            {getFilter(3)}
            {getFilter(4)}
        </defs>
    );
}

const getStepPaths = (step: IndicatorStep) => {
    const activeSegments: Record<IndicatorStep, number[]> = {
        1: [0],
        2: [0, 1],
        3: [0, 1, 2],
        4: [0, 1, 2, 3]
    };

    return commonPaths.map((d, index) => ({
        d,
        isActive: activeSegments[step].includes(index)
    }));
};

const SemiCircleStepIndicator = ({ step }: StepIndicatorProps): React.ReactNode => {
    return <StepSvg
        activeStyle={getActiveStyle(step)}
        paths={getStepPaths(step)}
    />;
};

export default SemiCircleStepIndicator;