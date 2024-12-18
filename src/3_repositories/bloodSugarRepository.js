// repositories/bloodSugarRepository.js
export class BloodSugarRepository {
  constructor(adapter) {
    this.adapter = adapter;
  }

  create(data) {
    return this.adapter.create(data);
  }

  read(query) {
    return this.adapter.read(query);
  }

  update(uid, data) {
    return this.adapter.update(uid, data);
  }

  delete(uid) {
    return this.adapter.delete(uid);
  }
}
