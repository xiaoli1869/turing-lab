import { useState, useEffect } from 'react';

interface CountdownProps {
  title: string;
  targetDate: Date;
}

const Countdown = ({ title, targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };
    
    // 初始计算
    calculateTimeLeft();
    
    // 设置定时器
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // 清理定时器
    return () => clearInterval(timer);
  }, [targetDate]);
  
  // 添加前导零
  const padZero = (num: number) => num.toString().padStart(2, '0');
  
  return (
    <div className="bg-primary-light rounded-lg p-4">
      <div className="text-secondary-light mb-2">{title}</div>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-primary-dark rounded p-2">
          <div className="text-2xl font-bold">
            {timeLeft.days > 0 ? timeLeft.days : padZero(timeLeft.hours)}
          </div>
          <div className="text-xs text-gray-400">
            {timeLeft.days > 0 ? '天' : '时'}
          </div>
        </div>
        
        <div className="bg-primary-dark rounded p-2">
          <div className="text-2xl font-bold">
            {timeLeft.days > 0 ? padZero(timeLeft.hours) : padZero(timeLeft.minutes)}
          </div>
          <div className="text-xs text-gray-400">
            {timeLeft.days > 0 ? '时' : '分'}
          </div>
        </div>
        
        <div className="bg-primary-dark rounded p-2">
          <div className="text-2xl font-bold">
            {timeLeft.days > 0 ? padZero(timeLeft.minutes) : padZero(timeLeft.seconds)}
          </div>
          <div className="text-xs text-gray-400">
            {timeLeft.days > 0 ? '分' : '秒'}
          </div>
        </div>
        
        {timeLeft.days > 0 && (
          <div className="bg-primary-dark rounded p-2">
            <div className="text-2xl font-bold">{padZero(timeLeft.seconds)}</div>
            <div className="text-xs text-gray-400">秒</div>
          </div>
        )}
        
        {timeLeft.days === 0 && (
          <div className="bg-secondary-dark rounded p-2">
            <div className="text-2xl font-bold animate-pulse-slow">LIVE</div>
            <div className="text-xs text-gray-400">实时</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countdown; 