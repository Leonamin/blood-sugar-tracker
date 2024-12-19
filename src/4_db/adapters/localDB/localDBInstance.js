// adapters/localDB/localDBInstance.js
import { createRxDatabase, addRxPlugin } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { RxDBMigrationSchemaPlugin } from "rxdb/plugins/migration-schema";

addRxPlugin(RxDBMigrationSchemaPlugin);
addRxPlugin(RxDBDevModePlugin); // 개발 시 유용한 플러그인
// addRxPlugin(RxDBValidatePlugin);

const createDatabase = async () => {
  const db = await createRxDatabase({
    name: "localdb",
    storage: getRxStorageDexie(), // IndexedDB를 기반으로 저장
    multiInstance: false,
  });

  // 스키마 정의 및 컬렉션 생성
  await db.addCollections({
    bloodsugar: {
      schema: {
        title: "BloodSugar Schema",
        version: 0,
        primaryKey: "uid",
        type: "object",
        properties: {
          uid: { type: "string", maxLength: 100 },
          value: { type: "number" },
          unit: { type: "string", enum: ["mmol", "mgdl"] },
          recordedAt: { type: "string", format: "date-time" },
          recordedDate: { type: "string" },
          memoId: { type: ["string", "null"] },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
        required: [
          "uid",
          "value",
          "unit",
          "recordedAt",
          "recordedDate",
          "createdAt",
          "updatedAt",
        ],
      },
      migrationStrategies: {
        // 버전 0은 초기 버전이므로 마이그레이션 전략이 필요 없습니다
        0: function (oldDoc) {
          return oldDoc;
        },
      },
    },
    memo: {
      schema: {
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
      },
      migrationStrategies: {
        // 버전 0은 초기 버전이므로 마이그레이션 전략이 필요 없습니다
        0: function (oldDoc) {
          return oldDoc;
        },
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
