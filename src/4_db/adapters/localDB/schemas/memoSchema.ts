export const memoSchema = {
  title: "Memo Schema",
  version: 0,
  primaryKey: "uid",
  type: "object",
  properties: {
    uid: { type: "string", maxLength: 100 },
    content: { type: "string" },
    recordedAt: { type: "string", format: "date-time" },
    recordedDate: { type: "string" },
    bloodSugarId: { type: ["string", "null"] },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
  },
  required: [
    "uid",
    "content",
    "recordedAt",
    "recordedDate",
    "createdAt",
    "updatedAt",
  ],
};
