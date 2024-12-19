// services/bloodSugarService.js
import { BloodSugarWriteProps } from "@/0_model/model/bloodSugarModel";
import { dateToUnixTimestamp } from "@/0_model/types/unixtimestamp";
import { BloodSugarRepository } from "@/3_repositories/bloodSugarRepository";
import { LocalDBBloodSugarAdapter } from "@/4_db/adapters/localDB/bloodSugarAdapter";

const bloodSugarRepo = new BloodSugarRepository(new LocalDBBloodSugarAdapter());

export class BloodSugarService {
  async createBloodSugar(data: BloodSugarWriteProps) {
    return await bloodSugarRepo.createBloodSugarRecord(data);
  }

  async getBloodSugar(uid: string) {
    return await bloodSugarRepo.readBloodSugarRecord(uid);
  }

  async getBloodSugarByRange(startDate: Date, endDate: Date) {
    return await bloodSugarRepo.readBloodSugarRecordByRange({
      from: dateToUnixTimestamp(startDate),
      to: dateToUnixTimestamp(endDate),
    });
  }

  async updateBloodSugar(uid: string, data: BloodSugarWriteProps) {
    return await bloodSugarRepo.updateBloodSugarRecord(uid, data);
  }

  async deleteBloodSugar(uid: string) {
    return await bloodSugarRepo.deleteBloodSugarRecord(uid);
  }
}
