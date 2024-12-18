// adapters/localDB/localDBInstance.js
import { createRxDatabase, addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { RxDBValidatePlugin } from "rxdb/plugins/validate";
import { getRxStorageDexie } from "rxdb/plugins/dexie";

addRxPlugin(RxDBDevModePlugin); // 개발 시 유용한 플러그인
addRxPlugin(RxDBValidatePlugin);

const createDatabase = async () => {
  const db = await createRxDatabase({
    name: "localdb",
    storage: getRxStorageDexie(), // IndexedDB를 기반으로 저장
    multiInstance: false,
  });

  // 스키마 정의 및 컬렉션 생성
  await db.addCollections({
    bloodSugar: {
      schema: {
        title: "BloodSugar Schema",
        version: 1,
        type: "object",
        properties: {
          uid: { type: "string", primary: true },
          value: { type: "number" },
          unit: { type: "string", enum: ["mmol", "mgdl"] },
          recordedAt: { type: "string", format: "date-time" },
          recordedDate: { type: "string" },
          memoId: { type: ["string", "null"] },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
        required: ["uid", "value", "unit", "recordedAt", "recordedDate", "createdAt", "updatedAt"],
      },
    },
    memo: {
      schema: {
        title: "Memo Schema",
        version: 1,
        type: "object",
        properties: {
          uid: { type: "string", primary: true },
          content: { type: "string" },
          recordedAt: { type: "string", format: "date-time" },
          recordedDate: { type: "string" },
          bloodSugarId: { type: ["string", "null"] },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
        required: ["uid", "content", "recordedAt", "recordedDate", "createdAt", "updatedAt"],
      },
    },
  });

  return db;
};

let dbPromise = null;
export const getDatabase = () => {
  if (!dbPromise) dbPromise = createDatabase();
  return dbPromise;
};
