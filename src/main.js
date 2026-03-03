// 游戏主循环模块 (entry point)
import { gameState, loadGame, saveGame } from './state.js';
import { PhysicsEngine } from './PhysicsEngine.js';
import { EntityManager } from './EntityManager.js';
import { SectSystem } from './SectSystem.js';
import { Renderer } from './Renderer.js';

const canvas = document.getElementById('gameCanvas');
const renderer = new Renderer(canvas);
const physics = new PhysicsEngine();
const entities = new EntityManager(gameState);
const sect = new SectSystem(gameState, entities);

function gameLoop(timestamp) {
  // 更新逻辑
  physics.update(gameState);
  entities.update(timestamp);
  sect.update(timestamp);

  // 渲染
  renderer.render(gameState);

  requestAnimationFrame(gameLoop);
}

// 启动入口
export function startGame() {
  if (loadGame()) {
    console.log('恢复存档');
  }
  requestAnimationFrame(gameLoop);
}

window.addEventListener('DOMContentLoaded', () => {
  startGame();
});
