import { IndicatorStep } from "@/0_model/types/indicatorStep";
import { useTheme } from "next-themes";

interface StepIndicatorProps {
    step: IndicatorStep;
    className?: string;
}

const SemiCircleStepIndicator = ({ step, className }: StepIndicatorProps) => {
    const { theme } = useTheme();

    const imagePath = theme === "dark"
        ? `/images/indicators/semi-circle-step-${step}-dark.png`
        : `/images/indicators/semi-circle-step-${step}.png`;

    return (
        <div className="leading-[0]">
            <picture className={`block w-full ${className ?? ''}`}>
                <source
                    media="(prefers-color-scheme: dark)"
                    srcSet={`/images/indicators/semi-circle-step-${step}-dark.png`}
                />
                <img
                    src={imagePath}
                    alt={`Step indicator ${step}`}
                    className="w-full h-auto object-cover transition-[src] duration-300 align-top block"
                />
            </picture>
        </div>
    );
};

export default SemiCircleStepIndicator;