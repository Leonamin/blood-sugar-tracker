// adapters/localDB/bloodSugarAdapter.js
import { BaseAdapter } from "../baseAdapter";
import {
  BloodSugarReadEntity,
  BloodSugarWriteEntity,
} from "@/0_model/entity/bloodSugarEntity";
import { UnixTimestampRange } from "@/0_model/types/unixtimestamp";
import { getDatabase } from "@/4_db/adapters/localDB/localDBInstance";
import { writeEntityToSchema } from "@/4_db/adapters/localDB/schemas/bloodSugarSchema";

export class LocalDBBloodSugarAdapter extends BaseAdapter {
  async createBloodSugarEntity(
    data: BloodSugarWriteEntity
  ): Promise<BloodSugarReadEntity> {
    const db = await getDatabase();
    const entityData = writeEntityToSchema(data);
    
    // uid가 없는 경우 생성
    if (!entityData.uid) {
      entityData.uid = crypto.randomUUID();
    }
    
    return await db.bloodsugar.insert(entityData);
  }

  async readBloodSugarEntity(uid: string): Promise<BloodSugarReadEntity> {
    const db = await getDatabase();
    const result = await db.bloodsugar.findOne(uid).exec();
    if (!result) {
      throw new Error("Record not found");
    }
    return result;
  }

  async readBloodSugarEntityByRange(
    range: UnixTimestampRange
  ): Promise<BloodSugarReadEntity[]> {
    const db = await getDatabase();
    const result = await db.bloodsugar
      .find({
        selector: {
          recordedAt: {
            $gte: range.from.toString(),
            $lte: range.to.toString(),
          },
        },
      })
      .exec();

    return result;
  }

  async updateBloodSugarEntity(
    uid: string,
    data: BloodSugarWriteEntity
  ): Promise<BloodSugarReadEntity> {
    const db = await getDatabase();
    const record = await db.bloodsugar.findOne(uid).exec();
    if (!record) {
      throw new Error("Record not found");
    }
    await record.update({
      $set: data,
    });
    return record;
  }

  async deleteBloodSugarEntity(uid: string): Promise<void> {
    const db = await getDatabase();
    const record = await db.bloodsugar.findOne(uid).exec();
    if (!record) {
      throw new Error("Record not found");
    }
    await record.remove();
  }
}
