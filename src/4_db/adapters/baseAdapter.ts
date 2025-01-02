import { BloodSugarReadEntity } from "@/0_model/entity/bloodSugarEntity";
import { BloodSugarWriteProps } from "@/0_model/model/bloodSugarModel";
import { UnixTimestampRange } from "@/0_model/types/unixtimestamp";

export abstract class BaseAdapter {
  abstract createBloodSugarEntity(data: BloodSugarWriteProps): Promise<BloodSugarReadEntity>;
  abstract readBloodSugarEntity(
    uid: string,
  ) : Promise<BloodSugarReadEntity>

  abstract readBloodSugarEntityByRange(
    range: UnixTimestampRange,
  ) : Promise<BloodSugarReadEntity[]>

  abstract updateBloodSugarEntity(
    uid: string,
    data: BloodSugarWriteProps,
  ) : Promise<BloodSugarReadEntity>

  abstract deleteBloodSugarEntity(uid: string) : Promise<void>
}
