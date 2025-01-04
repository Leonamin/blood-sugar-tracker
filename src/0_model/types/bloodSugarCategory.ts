import { GlucoseLevel } from "./glucoseLevel";

export enum BloodSugarCategory {
  Fasting = "fasting",
  PostMeal2Hours = "postMeal",
}

export const BloodSugarCategoryUtils = {
  toString(category: BloodSugarCategory): string {
    return category.toString();
  },

  fromString(category: string): BloodSugarCategory {
    switch (category) {
      case "fasting":
        return BloodSugarCategory.Fasting;
      case "postMeal":
        return BloodSugarCategory.PostMeal2Hours;
      default:
        return BloodSugarCategory.Fasting;
    }
  },

  getLabel(category: BloodSugarCategory): string {
    switch (category) {
      case BloodSugarCategory.Fasting:
        return "공복";
      case BloodSugarCategory.PostMeal2Hours:
        return "식후 2시간";
      default:
        return "알 수 없음";
    }
  },

  getGlucoseLevel(
    category: BloodSugarCategory,
    glucoseLevel: number
  ): GlucoseLevel {
    switch (category) {
      case BloodSugarCategory.Fasting:
        if (glucoseLevel < 70) return GlucoseLevel.Low;
        if (glucoseLevel < 100) return GlucoseLevel.Normal;
        if (glucoseLevel < 126) return GlucoseLevel.PreDiabetes;
        return GlucoseLevel.Diabetes;
  
      case BloodSugarCategory.PostMeal2Hours:
        if (glucoseLevel < 90) return GlucoseLevel.Low;
        if (glucoseLevel < 140) return GlucoseLevel.Normal;
        if (glucoseLevel < 180) return GlucoseLevel.PreDiabetes;
        return GlucoseLevel.Diabetes;
  
      default:
        if (glucoseLevel < 70) return GlucoseLevel.Low;
        if (glucoseLevel < 140) return GlucoseLevel.Normal;
        if (glucoseLevel < 180) return GlucoseLevel.PreDiabetes;
        return GlucoseLevel.Diabetes;
    }
  }
};
