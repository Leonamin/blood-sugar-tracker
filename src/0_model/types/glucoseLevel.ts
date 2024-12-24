import { IndicatorStep } from "./indicatorStep";

export enum GlucoseLevel {
  Low = 'low',
  Normal = 'normal',
  PreDiabetes = 'preDiabetes',
  Diabetes = 'diabetes'
}

export namespace GlucoseLevel {
  export function getIndicatorStep(level: GlucoseLevel): IndicatorStep {
    switch (level) {
      case GlucoseLevel.Low:
        return 1;
      case GlucoseLevel.Normal:
        return 2;
      case GlucoseLevel.PreDiabetes:
        return 3;
      case GlucoseLevel.Diabetes:
        return 4;
    }
  }
}