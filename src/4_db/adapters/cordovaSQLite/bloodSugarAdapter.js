// adapters/cordovaSQLite/bloodSugarAdapter.js
import SQLite from "cordova-sqlite-storage";

export class BloodSugarSQLiteAdapter {
  constructor() {
    this.db = SQLite.openDatabase({ name: "localdb", location: "default" });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO blood_sugar (uid, value, unit, recordedAt, recordedDate, memoId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          [
            data.uid,
            data.value,
            data.unit,
            data.recordedAt,
            data.recordedDate,
            data.memoId,
            data.createdAt,
            data.updatedAt,
          ],
          () => resolve(data),
          (_, error) => reject(error)
        );
      });
    });
  }

  read(query) {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          query.uid
            ? "SELECT * FROM blood_sugar WHERE uid = ?"
            : "SELECT * FROM blood_sugar",
          query.uid ? [query.uid] : [],
          (_, result) => resolve(result.rows.raw()),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Update and delete methods would be similar, with appropriate SQL queries
}
