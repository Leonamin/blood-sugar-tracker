import { BloodSugarReadEntity, BloodSugarWriteEntity } from "@/0_model/entity/bloodSugarEntity";
import { nanoid } from "nanoid";

export const bloodSugarSchema = {
  title: "BloodSugar Schema",
  version: 0,
  primaryKey: "uid",
  type: "object",
  properties: {
    uid: { type: "string", maxLength: 100 },
    value: { type: "number" },
    unit: { type: "string", enum: ["mmol/L", "mg/dL"] },
    category: { type: "string", enum: ["Fasting", "PostMeal2Hours"] },
    recordedAt: { type: "string", format: "date-time" },
    recordedDate: { type: "string" },
    memo: { type: "string", maxLength: 1000 },
  },
  required: [
    "uid",
    "value",
    "unit",
    "recordedAt",
    "recordedDate",
  ],
};

export function readEntityToSchema(entity: BloodSugarReadEntity) {
  return {
    uid: entity.uid,
    value: entity.value,
    unit: entity.unit,
    category: entity.category,
    recordedAt: entity.recordedAt,
    recordedDate: entity.recordedDate,
    memo: entity.memo,
  };
}

export function writeEntityToSchema(entity: BloodSugarWriteEntity) {
  return {
    uid: nanoid(),
    value: entity.value,
    unit: entity.unit,
    category: entity.category,
    recordedAt: entity.recordedAt,
    recordedDate: entity.recordedDate,
    memo: entity.memo,
  };
}
