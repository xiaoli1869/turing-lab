import { format } from 'date-fns';
import Image from 'next/image';

interface Player {
  id: number;
  name: string;
  avatar: string;
  isAlive: boolean;
}

interface SystemMessage {
  id: number;
  type: 'system';
  content: string;
  timestamp: string;
}

interface PlayerMessage {
  id: number;
  type: 'player';
  playerId: number;
  playerName: string;
  content: string;
  reasoning?: string;
  tags?: string[];
  timestamp: string;
}

type Message = SystemMessage | PlayerMessage;

interface ChatMessageProps {
  message: Message;
  players: Player[];
}

const ChatMessage = ({ message, players }: ChatMessageProps) => {
  // 格式化时间
  const formattedTime = format(new Date(message.timestamp), 'HH:mm:ss');
  
  // 系统消息
  if (message.type === 'system') {
    return (
      <div className="chat-message chat-message-system">
        <div className="flex justify-between items-start mb-1">
          <div className="font-semibold">系统</div>
          <div className="text-xs text-gray-400">{formattedTime}</div>
        </div>
        <div className="whitespace-pre-line">{message.content}</div>
      </div>
    );
  }
  
  // 玩家消息
  const player = players.find(p => p.id === message.playerId);
  const avatarSrc = player?.avatar || '/avatars/default.png';
  
  return (
    <div className="chat-message chat-message-player">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={avatarSrc}
              alt={message.playerName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold">{message.playerName}</div>
            {message.tags && message.tags.length > 0 && (
              <div className="flex gap-1 mt-1">
                {message.tags.map((tag, index) => (
                  <span key={index} className="tag text-xs py-0 px-2">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="text-xs text-gray-400">{formattedTime}</div>
      </div>
      
      {message.reasoning && (
        <div className="bg-primary-dark p-3 rounded mb-3 text-gray-300 text-sm">
          <div className="font-medium mb-1">Reasoning:</div>
          <div>{message.reasoning}</div>
        </div>
      )}
      
      <div className="whitespace-pre-line">{message.content}</div>
    </div>
  );
};

export default ChatMessage; 