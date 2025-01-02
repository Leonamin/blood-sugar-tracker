import { BloodSugarReadEntity } from "@/0_model/entity/bloodSugarEntity";
import { BloodSugarWriteProps } from "@/0_model/model/bloodSugarModel";
import { UnixTimestampRange } from "@/0_model/types/unixtimestamp";
import { BaseAdapter } from "@/4_db/adapters/baseAdapter";

export class BloodSugarRepository {
  private adapter: BaseAdapter;
  constructor(adapter: BaseAdapter) {
    this.adapter = adapter;
  }

  async createBloodSugarRecord(
    data: BloodSugarWriteProps
  ) : Promise<void> {
    return await this.adapter.createBloodSugarEntity(data);
  }

  async readBloodSugarRecord(
    uid: string
  ): Promise<BloodSugarReadEntity> {
    return await this.adapter.readBloodSugarEntity(uid);
  }

  async readBloodSugarRecordByRange(
    range: UnixTimestampRange
  ): Promise<BloodSugarReadEntity[]> {
    return await this.adapter.readBloodSugarEntityByRange(range);
  }

  async updateBloodSugarRecord(
    uid: string,
    data: BloodSugarWriteProps
  ): Promise<BloodSugarReadEntity> {
    return await this.adapter.updateBloodSugarEntity(uid, data);
  }

  async deleteBloodSugarRecord(uid: string): Promise<void> {
    return await this.adapter.deleteBloodSugarEntity(uid);
  }
}
