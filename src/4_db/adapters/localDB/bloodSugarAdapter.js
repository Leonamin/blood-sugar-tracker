// adapters/localDB/bloodSugarAdapter.js
import { getDatabase } from "./localDBInstance";

export class BloodSugarAdapter {
  async create(data) {
    const db = await getDatabase();
    return db.bloodSugar.insert(data);
  }

  async read(query = {}) {
    const db = await getDatabase();
    return query.uid ? db.bloodSugar.findOne(query.uid).exec() : db.bloodSugar.find(query).exec();
  }

  async update(uid, data) {
    const db = await getDatabase();
    const record = await db.bloodSugar.findOne(uid).exec();
    if (record) {
      return record.update({ $set: data });
    }
    throw new Error("Record not found");
  }

  async delete(uid) {
    const db = await getDatabase();
    const record = await db.bloodSugar.findOne(uid).exec();
    if (record) {
      return record.remove();
    }
    throw new Error("Record not found");
  }
}
