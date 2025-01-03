// adapters/localDB/localDBInstance.js
import { createRxDatabase, addRxPlugin } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { RxDBMigrationSchemaPlugin } from "rxdb/plugins/migration-schema";
import { bloodSugarSchema } from "./schemas/bloodSugarSchema";
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';

addRxPlugin(RxDBMigrationSchemaPlugin);
addRxPlugin(RxDBDevModePlugin); // 개발 시 유용한 플러그인
addRxPlugin(RxDBUpdatePlugin);
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
      schema: bloodSugarSchema,
    },
  });

  return db;
};

let dbPromise = null;
export const getDatabase = () => {
  if (!dbPromise) dbPromise = createDatabase();
  return dbPromise;
};
