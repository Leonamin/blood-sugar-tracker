// services/bloodSugarService.js
import { BloodSugarReadEntityUtils, writePropsToEntity } from "@/0_model/entity/bloodSugarEntity";
import BloodSugarModel, {
  BloodSugarWriteProps,
} from "@/0_model/model/bloodSugarModel";
import { TaskResponse } from "@/0_model/model/taskResponse";
import { UnixTimestamp } from "@/0_model/types/unixtimestamp";
import { BloodSugarRepository } from "@/3_repositories/bloodSugarRepository";
import { LocalDBBloodSugarAdapter } from "@/4_db/adapters/localDB/bloodSugarAdapter";

const bloodSugarRepo = new BloodSugarRepository(new LocalDBBloodSugarAdapter());

class BloodSugarService {
  async createBloodSugar(
    data: BloodSugarWriteProps
  ): Promise<TaskResponse<BloodSugarModel>> {
    try {
      const record = await bloodSugarRepo.createBloodSugarRecord(writePropsToEntity(data));
      const model = BloodSugarReadEntityUtils.toModel(record);
      return TaskResponse.success(model);
    } catch (error) {
      return TaskResponse.failure(error.message);
    }
  }

  async getBloodSugar(uid: string): Promise<TaskResponse<BloodSugarModel>> {
    try {
      const record = await bloodSugarRepo.readBloodSugarRecord(uid);
      const model = BloodSugarReadEntityUtils.toModel(record);
      return TaskResponse.success(model);
    } catch (error) {
      return TaskResponse.failure(error.message);
    }
  }

  async getBloodSugarByRange(
    startDate: Date,
    endDate: Date
  ): Promise<TaskResponse<BloodSugarModel[]>> {
    try {
      const from = UnixTimestamp.fromDate(startDate);
      const to = UnixTimestamp.fromDate(endDate);

      const records = await bloodSugarRepo.readBloodSugarRecordByRange({
        from: from,
        to: to,
      });
      const models = records.map((record) =>
        BloodSugarReadEntityUtils.toModel(record)
      );

      return TaskResponse.success(models);
    } catch (error) {
      return TaskResponse.failure(error.message);
    }
  }

  async updateBloodSugar(
    uid: string,
    data: BloodSugarWriteProps
  ): Promise<TaskResponse<BloodSugarModel>> {
    console.log("updateBloodSugar", data);
    try {
      await bloodSugarRepo.updateBloodSugarRecord(uid, writePropsToEntity(data));
      const record = await bloodSugarRepo.readBloodSugarRecord(uid);
      const model = BloodSugarReadEntityUtils.toModel(record);
      return TaskResponse.success(model);
    } catch (error) {
      console.log("error occurred", error);
      return TaskResponse.failure(error.message);
    }
  }

  async deleteBloodSugar(uid: string): Promise<TaskResponse<void>> {
    try {
      await bloodSugarRepo.deleteBloodSugarRecord(uid);
      return TaskResponse.success(null);
    } catch (error) {
      return TaskResponse.failure(error.message);
    }
  }
}

export const bloodSugarService = new BloodSugarService();
