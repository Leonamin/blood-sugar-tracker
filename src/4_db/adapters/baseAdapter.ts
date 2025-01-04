import { BloodSugarReadEntity, BloodSugarWriteEntity } from "@/0_model/entity/bloodSugarEntity";
import { UnixTimestampRange } from "@/0_model/types/unixtimestamp";

export abstract class BaseAdapter {
  abstract createBloodSugarEntity(data: BloodSugarWriteEntity): Promise<BloodSugarReadEntity>;
  abstract readBloodSugarEntity(
    uid: string,
  ) : Promise<BloodSugarReadEntity>

  abstract readBloodSugarEntityByRange(
    range: UnixTimestampRange,
  ) : Promise<BloodSugarReadEntity[]>

  abstract updateBloodSugarEntity(
    uid: string,
    data: BloodSugarWriteEntity,
  ) : Promise<BloodSugarReadEntity>

  abstract deleteBloodSugarEntity(uid: string) : Promise<void>
}
