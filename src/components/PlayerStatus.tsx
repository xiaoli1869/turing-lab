import Image from 'next/image';

interface PlayerStatusProps {
  name: string;
  avatar: string;
  isAlive: boolean;
}

const PlayerStatus = ({ name, avatar, isAlive }: PlayerStatusProps) => {
  return (
    <div className="player-badge">
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image 
          src={avatar} 
          alt={name} 
          fill
          className={`object-cover ${!isAlive ? 'grayscale opacity-60' : ''}`} 
        />
      </div>
      <div className="flex-grow">
        <div className="font-medium">{name}</div>
        <div className={isAlive ? 'status-alive text-sm' : 'status-dead text-sm'}>
          {isAlive ? '存活' : '淘汰'}
        </div>
      </div>
    </div>
  );
};

export default PlayerStatus; 