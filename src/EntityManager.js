// 管理所有实体（弟子、建筑、NPC 等）
import { Disciple } from './models/Disciple.js';

export class EntityManager {
  constructor(state) {
    this.state = state;
  }

  createDisciple(data) {
    const d = new Disciple(data);
    this.state.disciples.push(d);
    return d;
  }

  update(timestamp) {
    // 为每个实体调用更新方法
    this.state.disciples.forEach(d => d.update && d.update(timestamp));
  }
}
