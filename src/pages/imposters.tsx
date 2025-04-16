import { useState, useEffect } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import Navbar from '@/components/Navbar';
import ChatMessage from '@/components/ChatMessage';
import PlayerStatus from '@/components/PlayerStatus';
import Countdown from '@/components/Countdown';

// 临时数据 - 后续替换为实际API
const GAME_DATA = {
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

export default function ImpostersGame() {
  const [gameData, setGameData] = useState(GAME_DATA);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);
  
  // 自动滚动到底部
  useEffect(() => {
    if (isScrolledToBottom) {
      const chatContainer = document.getElementById('chat-container');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  }, [gameData.messages, isScrolledToBottom]);

  // 检测滚动位置
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const isBottom = scrollHeight - scrollTop <= clientHeight + 50;
    setIsScrolledToBottom(isBottom);
  };

  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col md:flex-row">
        {/* 左侧边栏 - 游戏信息 */}
        <div className="w-full md:w-1/3 bg-primary p-6 overflow-y-auto">
          <div className="mb-8">
            <Link href="/" className="text-gray-400 hover:text-secondary-light mb-4 inline-block">
              &larr; 返回首页
            </Link>
            <h1 className="game-title">{gameData.title}</h1>
            <p className="game-description">{gameData.description}</p>
          </div>
          
          {/* 倒计时区域 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">倒计时</h2>
            {gameData.gameState === 'preheat' ? (
              <Countdown 
                title="预热阶段" 
                targetDate={new Date(gameData.preheatEndTime)} 
              />
            ) : (
              <Countdown 
                title={`第 ${gameData.currentRound} 轮 - ${
                  gameData.currentPhase === 'introduction' ? '自我介绍' :
                  gameData.currentPhase === 'initialVoting' ? '初步投票' :
                  gameData.currentPhase === 'loserSpeech' ? '败者发言' :
                  gameData.currentPhase === 'formalVoting' ? '正式投票' : '平票处理'
                }`}
                targetDate={new Date(gameData.phaseEndTime)} 
              />
            )}
          </div>
          
          {/* 参与者状态 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">嫌疑对象状态</h2>
            <div className="space-y-3">
              {gameData.players.map(player => (
                <PlayerStatus 
                  key={player.id}
                  name={player.name}
                  avatar={player.avatar}
                  isAlive={player.isAlive}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* 右侧 - 聊天窗口 */}
        <div className="w-full md:w-2/3 bg-background-dark flex flex-col">
          {/* 固定消息区域 */}
          <div className="bg-primary-light p-4 border-b border-primary text-sm">
            <div className="max-h-40 overflow-y-auto prose prose-invert">
              <p className="text-gray-300">{gameData.background}</p>
            </div>
          </div>
          
          {/* 聊天消息列表 */}
          <div 
            id="chat-container" 
            className="flex-grow overflow-y-auto p-4"
            onScroll={handleScroll}
          >
            <div className="space-y-4">
              {gameData.messages.map(message => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  players={gameData.players}
                />
              ))}
            </div>
          </div>
          
          {/* 自动滚动按钮 */}
          {!isScrolledToBottom && (
            <button 
              className="absolute bottom-4 right-6 bg-secondary p-2 rounded-full shadow-lg"
              onClick={() => {
                const chatContainer = document.getElementById('chat-container');
                if (chatContainer) {
                  chatContainer.scrollTop = chatContainer.scrollHeight;
                  setIsScrolledToBottom(true);
                }
              }}
              aria-label="滚动到底部"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </button>
          )}
        </div>
      </main>
    </div>
  );
} 