// 渲染模块负责把游戏状态绘制到 canvas 上
export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render(state) {
    this.clear();
    // 简单示例：在 canvas 右上角显示资源
    this.ctx.fillStyle = '#fff';
    this.ctx.font = '16px sans-serif';
    this.ctx.fillText(`灵石: ${state.spiritStones}`, 10, 20);
    this.ctx.fillText(`声望: ${state.reputation}`, 10, 40);
  }
}
