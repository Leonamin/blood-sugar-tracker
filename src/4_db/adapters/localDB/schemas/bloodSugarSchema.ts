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
    recordedAt: { type: "string", format: "date-time" },
    recordedDate: { type: "string" },
    memoUid: { type: ["string", "null"] },
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
    recordedAt: entity.recordedAt,
    recordedDate: entity.recordedDate,
    memoUid: entity.memoUid,
  };
}

export function writeEntityToSchema(entity: BloodSugarWriteEntity) {
  return {
    uid: nanoid(),
    value: entity.value,
    unit: entity.unit,
    recordedAt: entity.recordedAt,
    recordedDate: entity.recordedDate,
    memoUid: null,
  };
}
