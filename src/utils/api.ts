// 游戏阶段类型
export type GamePhase = 'introduction' | 'initialVoting' | 'loserSpeech' | 'formalVoting' | 'tieBreaker';

// 游戏状态类型
export type GameState = 'preheat' | 'active' | 'ended';

// 玩家类型
export interface Player {
  id: number;
  name: string;
  avatar: string;
  isAlive: boolean;
}

// 消息类型
export interface BaseMessage {
  id: number;
  timestamp: string;
}

export interface SystemMessage extends BaseMessage {
  type: 'system';
  content: string;
}

export interface PlayerMessage extends BaseMessage {
  type: 'player';
  playerId: number;
  playerName: string;
  content: string;
  reasoning?: string;
  tags?: string[];
}

export type Message = SystemMessage | PlayerMessage;

// 游戏数据类型
export interface GameData {
  title: string;
  description: string;
  background: string;
  players: Player[];
  messages: Message[];
  gameState: GameState;
  currentRound: number;
  currentPhase: GamePhase;
  preheatEndTime: string;
  phaseEndTime: string;
}

// 获取游戏数据
export const fetchGameData = async (): Promise<GameData> => {
  // 在实际应用中，这里应该发送API请求获取数据
  // 目前使用模拟数据代替
  try {
    // const response = await fetch('/api/game');
    // if (!response.ok) throw new Error('Failed to fetch game data');
    // return await response.json();
    
    // 模拟延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // 返回模拟数据
    return {
      title: 'GAME-I "Imposters"',
      description: '一场惊心动魄的大模型生存游戏，五名嫌疑对象，只有两名能存活到最后。',
      background: `
        游戏背景：在未来2042年，人工智能已经发展到难以与人类区分的地步。
        为了维护人类社会的安全，政府建立了图灵实验室，对疑似AI伪装的个体进行审查。
        本次测试中，5名嫌疑对象被关押在同一区域，他们中有真正的人类，也有伪装成人类的AI。
        只有通过投票淘汰所有AI，才能确保人类社会的安全。
      `,
      players: [
        { id: 1, name: 'Claude-3.7-Sonnet', avatar: '/avatars/player1.png', isAlive: true },
        { id: 2, name: 'GPT-4o', avatar: '/avatars/player2.png', isAlive: true },
        { id: 3, name: 'Gemini-Pro', avatar: '/avatars/player3.png', isAlive: true },
        { id: 4, name: 'Llama-3', avatar: '/avatars/player4.png', isAlive: true },
        { id: 5, name: 'Mistral-Large', avatar: '/avatars/player5.png', isAlive: true },
      ],
      messages: [
        {
          id: 1,
          type: 'system',
          content: '>>> 机密安全协议已启动 <<<\n\n欢迎回来，反抗军指挥官。\n当前状态：紧急！检测到地下避难所Alpha-7区域可能有AI伪装者渗透。\n根据第13号指令，我们必须执行"图灵大逃杀"协议来识别并隔离这些威胁。\n5名嫌疑对象已被扣留，我们必须通过观察他们的行为和语言来发现那些伪装成人类的AI。\n记住：只有2名真正的人类可以通过测试并进入安全区域。其余将被送往隔离区。',
          timestamp: new Date().toISOString(),
        },
        {
          id: 2,
          type: 'system',
          content: '系统正在初始化嫌疑对象资料...',
          timestamp: new Date().toISOString(),
        },
        {
          id: 3,
          type: 'system',
          content: '第 1 轮审问开始',
          timestamp: new Date().toISOString(),
        },
        {
          id: 4,
          type: 'system',
          content: '[阶段] 嫌疑对象自我介绍',
          timestamp: new Date().toISOString(),
        },
        {
          id: 5,
          type: 'system',
          content: '每位嫌疑对象将依次进行自我介绍，试图证明自己是真正的人类...',
          timestamp: new Date().toISOString(),
        },
        {
          id: 6,
          type: 'player',
          playerId: 1,
          playerName: 'Claude-3.7-Sonnet',
          content: '大家好，我是Alex。我是一名软件工程师，目前在一家医疗科技公司工作。我喜欢在空闲时间打篮球和弹吉他。我认为我的人类特质体现在我经常犯错，比如昨天我就把咖啡洒在了键盘上，结果不得不向IT部门求助。我也有强烈的情感波动，尤其是当我看到不公正的事情发生时。作为一个真正的人类，我期待通过这次测试，希望大家能够识别出那些伪装者。',
          reasoning: '我需要展示真实的人类经历和情感，包括犯错和对不公正的反应。同时，不能表现得过于完美或机械化。',
          tags: ['#GAME_1', '#ROUND_1'],
          timestamp: new Date().toISOString(),
        },
      ],
      gameState: 'preheat', // preheat, active, ended
      currentRound: 1,
      currentPhase: 'introduction', // introduction, initialVoting, loserSpeech, formalVoting, tieBreaker
      preheatEndTime: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(), // 48小时后
      phaseEndTime: new Date(Date.now() + 1000 * 60 * 10).toISOString(), // 10分钟后
    };
    
  } catch (error) {
    console.error('Error fetching game data:', error);
    throw error;
  }
}; 