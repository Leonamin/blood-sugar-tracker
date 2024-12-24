import { TagColorType } from "@/1_components/ui/tag/tag";
import { IndicatorStep } from "./indicatorStep";

export enum GlucoseLevel {
  Low = "low",
  Normal = "normal",
  PreDiabetes = "preDiabetes",
  Diabetes = "diabetes",
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

  export function getLabel(level: GlucoseLevel): string {
    switch (level) {
      case GlucoseLevel.Low:
        return "저혈당";
      case GlucoseLevel.Normal:
        return "정상";
      case GlucoseLevel.PreDiabetes:
        return "전당뇨";
      case GlucoseLevel.Diabetes:
        return "당뇨";
    }
  }

  export function getColor(level: GlucoseLevel): TagColorType {
    switch (level) {
      case GlucoseLevel.Low:
        return "info";
      case GlucoseLevel.Normal:
        return "success";
      case GlucoseLevel.PreDiabetes:
        return "warning";
      case GlucoseLevel.Diabetes:
        return "error";
    }
  }
}
