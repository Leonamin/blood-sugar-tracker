import { GlucoseLevel } from "./glucoseLevel";


export enum BloodSugarCategory {
  Normal = 'normal',
  Fasting = 'fasting',
  PostMeal2Hours = 'postMeal',
  PreMeal = 'preMeal',
  BeforeExercise = 'beforeExercise',
  AfterExercise = 'afterExercise'
}

export namespace BloodSugarCategory {
  export function getLabel(category: BloodSugarCategory): string {
    switch (category) {
      case BloodSugarCategory.Normal:
        return "일반";
      case BloodSugarCategory.Fasting:
        return "공복";
      case BloodSugarCategory.PostMeal2Hours:
        return "식후 2시간";
      case BloodSugarCategory.PreMeal:
        return "식전";
      case BloodSugarCategory.BeforeExercise:
        return "운동 전";
      case BloodSugarCategory.AfterExercise:
        return "운동 후";
      default:
        return "알 수 없음";
    }
  }

  export function getGlucoseLevel(category: BloodSugarCategory, glucoseLevel: number): GlucoseLevel {
    switch (category) {
      case BloodSugarCategory.Fasting:
        if (glucoseLevel < 70) return GlucoseLevel.Low;
        if (glucoseLevel < 100) return GlucoseLevel.Normal;
        if (glucoseLevel < 126) return GlucoseLevel.PreDiabetes;
        return GlucoseLevel.Diabetes;
        
      case BloodSugarCategory.PostMeal2Hours:
        if (glucoseLevel < 70) return GlucoseLevel.Low;
        if (glucoseLevel < 140) return GlucoseLevel.Normal;
        if (glucoseLevel < 200) return GlucoseLevel.PreDiabetes;
        return GlucoseLevel.Diabetes;
        
      case BloodSugarCategory.PreMeal:
      case BloodSugarCategory.BeforeExercise:
      case BloodSugarCategory.AfterExercise:
      case BloodSugarCategory.Normal:
      default:
        if (glucoseLevel < 70) return GlucoseLevel.Low;
        if (glucoseLevel < 140) return GlucoseLevel.Normal;
        if (glucoseLevel < 180) return GlucoseLevel.PreDiabetes;
        return GlucoseLevel.Diabetes;
    }
  }

  // 각 카테고리별 정상 범위 반환
  export function getNormalRange(category: BloodSugarCategory): { min: number; max: number } {
    switch (category) {
      case BloodSugarCategory.Fasting:
        return { min: 70, max: 100 };
      case BloodSugarCategory.PostMeal2Hours:
        return { min: 70, max: 140 };
      default:
        return { min: 70, max: 140 };
    }
  }
} 