import { GameData, Message, Player, GamePhase, GameState } from './api';

// 模拟游戏数据处理

// 生成唯一ID
export const generateId = (): number => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

// 创建系统消息
export const createSystemMessage = (content: string): Message => {
  return {
    id: generateId(),
    type: 'system',
    content,
    timestamp: new Date().toISOString(),
  };
};

// 创建玩家消息
export const createPlayerMessage = (
  playerId: number,
  playerName: string,
  content: string,
  reasoning?: string,
  tags?: string[]
): Message => {
  return {
    id: generateId(),
    type: 'player',
    playerId,
    playerName,
    content,
    reasoning,
    tags,
    timestamp: new Date().toISOString(),
  };
};

// 更新玩家状态
export const updatePlayerStatus = (
  players: Player[],
  playerId: number,
  isAlive: boolean
): Player[] => {
  return players.map(player => 
    player.id === playerId ? { ...player, isAlive } : player
  );
};

// 轮次结束后更新游戏阶段
export const advanceGamePhase = (
  currentPhase: GamePhase,
  hasEliminatedPlayer: boolean = false
): GamePhase => {
  switch (currentPhase) {
    case 'introduction':
      return 'initialVoting';
    case 'initialVoting':
      return hasEliminatedPlayer ? 'loserSpeech' : 'formalVoting';
    case 'loserSpeech':
      return 'formalVoting';
    case 'formalVoting':
      return 'introduction'; // 回到下一轮的自我介绍
    case 'tieBreaker':
      return 'introduction'; // 回到下一轮的自我介绍
    default:
      return 'introduction';
  }
};

// 获取当前阶段的中文名称
export const getPhaseDisplayName = (phase: GamePhase): string => {
  switch (phase) {
    case 'introduction':
      return '自我介绍';
    case 'initialVoting':
      return '初步投票';
    case 'loserSpeech':
      return '败者发言';
    case 'formalVoting':
      return '正式投票';
    case 'tieBreaker':
      return '平票处理';
    default:
      return '未知阶段';
  }
};

// 检查游戏是否结束
export const checkGameEnd = (players: Player[]): boolean => {
  const alivePlayers = players.filter(player => player.isAlive);
  return alivePlayers.length <= 2;
};

// 更新游戏状态
export const updateGameState = (gameData: GameData, updates: Partial<GameData>): GameData => {
  return {
    ...gameData,
    ...updates,
  };
}; 