export type IndicatorStep = 1 | 2 | 3 | 4;

export interface StepIndicatorProps {
    step: IndicatorStep;
    children?: React.ReactNode;
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
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            {paths.map((path, index) => (
                <path
                    key={index}
                    d={path.d}
                    className={path.isActive ? activeStyle : disabledStyle}
                />
            ))}
        </svg>
    );
};

const commonPaths = [
    "M18 2C18 0.895432 18.8983 -0.0115019 19.996 0.11096C23.8449 0.540329 27.4728 2.20316 30.3218 4.87857C33.1709 7.55397 35.0582 11.0703 35.7284 14.8847C35.9196 15.9726 35.0708 16.926 33.9684 16.9954L32.5712 17.0833C31.4688 17.1526 30.5348 16.3086 30.292 15.231C29.7419 12.7887 28.4723 10.5494 26.6253 8.815C24.7783 7.08058 22.4637 5.9541 19.9917 5.55837C18.901 5.38377 18 4.50457 18 3.4V2Z",
    "M34 18C35.1046 18 36.0115 18.8983 35.889 19.996C35.4597 23.8449 33.7968 27.4728 31.1214 30.3218C28.446 33.1709 24.9297 35.0582 21.1153 35.7284C20.0274 35.9196 19.074 35.0708 19.0046 33.9684L18.9167 32.5712C18.8474 31.4688 19.6914 30.5348 20.769 30.292C23.2113 29.7418 25.4506 28.4723 27.185 26.6253C28.9194 24.7783 30.0459 22.4637 30.4416 19.9917C30.6162 18.901 31.4954 18 32.6 18H34Z",
    "M18 34C18 35.1046 17.1017 36.0115 16.004 35.889C12.1551 35.4597 8.52717 33.7968 5.67815 31.1214C2.82913 28.446 0.941787 24.9297 0.27159 21.1153C0.0804411 20.0274 0.929182 19.074 2.03157 19.0046L3.42881 18.9167C4.5312 18.8474 5.46524 19.6914 5.70798 20.769C6.25815 23.2113 7.52774 25.4506 9.37471 27.185C11.2217 28.9194 13.5363 30.0459 16.0083 30.4416C17.099 30.6162 18 31.4954 18 32.6V34Z",
    "M2 18C0.895432 18 -0.0115018 17.1017 0.11096 16.004C0.540329 12.1551 2.20316 8.52717 4.87857 5.67815C7.55397 2.82913 11.0703 0.941787 14.8847 0.27159C15.9726 0.0804412 16.926 0.929182 16.9954 2.03157L17.0833 3.42881C17.1526 4.5312 16.3086 5.46524 15.231 5.70798C12.7887 6.25815 10.5494 7.52774 8.815 9.37471C7.08058 11.2217 5.9541 13.5363 5.55837 16.0083C5.38377 17.099 4.50457 18 3.4 18H2Z",
];



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

const CircleStepIndicator = ({ step, children }: StepIndicatorProps): React.ReactNode => {
    return (
        <div className="relative">
            <StepSvg
                activeStyle={getActiveStyle(step)}
                paths={getStepPaths(step)}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {children}
            </div>
        </div>
    );
};

export default CircleStepIndicator;