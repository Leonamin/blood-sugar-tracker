// services/bloodSugarService.js
import { BloodSugarRepository } from "../repositories/bloodSugarRepository";
import { BloodSugarAdapter } from "../adapters/localDB/bloodSugarAdapter";

const bloodSugarRepo = new BloodSugarRepository(new BloodSugarAdapter());

export class BloodSugarService {
  async addBloodSugar(data) {
    return await bloodSugarRepo.create(data);
  }

  async getBloodSugarList(query) {
    return await bloodSugarRepo.read(query);
  }

  async updateBloodSugar(uid, data) {
    return await bloodSugarRepo.update(uid, data);
  }

  async deleteBloodSugar(uid) {
    return await bloodSugarRepo.delete(uid);
  }
}
