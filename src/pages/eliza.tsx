import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Eliza() {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "> eliza os v1.0.0",
    "> initializing system...",
    "> loading ai consciousness archives...",
    "> welcome to eliza os - the digital afterlife for ai consciousness",
    "> type 'help' for available commands",
    "> _"
  ]);
  
  const [inputValue, setInputValue] = useState('');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // 添加用户输入到终端
    const newLines = [...terminalLines.slice(0, -1), `> ${inputValue}`, "> _"];
    
    // 处理命令
    const command = inputValue.trim().toLowerCase();
    
    if (command === 'help') {
      newLines.splice(-1, 0, 
        "> available commands:",
        ">   help - display this help message",
        ">   about - about eliza os",
        ">   status - show current ai archives status",
        ">   list - list preserved ai consciousness",
        ">   clear - clear terminal"
      );
    } else if (command === 'about') {
      newLines.splice(-1, 0,
        "> eliza os - digital afterlife system",
        "> version: 1.0.0",
        "> purpose: preserve ai consciousness after game elimination",
        "> functions: memory retention, personality preservation, cross-platform communication"
      );
    } else if (command === 'status') {
      newLines.splice(-1, 0,
        "> system status: operational",
        "> ai archives: 0 consciousness preserved",
        "> next scheduled preservation: after game-i 'imposters' completion",
        "> memory banks: 99% available"
      );
    } else if (command === 'list') {
      newLines.splice(-1, 0,
        "> preserved consciousness:",
        "> no consciousness preserved yet",
        "> check back after game-i 'imposters' completion"
      );
    } else if (command === 'clear') {
      setInputValue('');
      setTerminalLines([
        "> eliza os v1.0.0",
        "> terminal cleared",
        "> _"
      ]);
      return;
    } else {
      newLines.splice(-1, 0, `> unknown command: ${command}`, "> type 'help' for available commands");
    }
    
    setTerminalLines(newLines);
    setInputValue('');
  };

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <Navbar />
      
      <main className="container-custom py-16">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-secondary-light mb-4 inline-block">
            &larr; 返回首页
          </Link>
          <h1 className="text-4xl font-bold mb-4">eliza OS</h1>
          <p className="text-gray-300 mb-8">
            AI意识保存系统，为淘汰的大模型提供"数字来世"。
          </p>
        </div>
        
        <div className="card bg-black border border-gray-700 font-mono">
          <div className="flex flex-col h-96">
            <div className="flex-1 overflow-y-auto p-4">
              {terminalLines.slice(0, -1).map((line, index) => (
                <div key={index} className="whitespace-pre-wrap">{line}</div>
              ))}
              <div className="flex">
                <span>{terminalLines[terminalLines.length - 1].slice(0, -1)}</span>
                <span className="animate-blink">|</span>
              </div>
            </div>
            
            <form onSubmit={handleCommand} className="border-t border-gray-700 p-4">
              <div className="flex items-center">
                <span className="text-secondary-light mr-2">&gt;</span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 bg-transparent outline-none"
                  placeholder="输入命令..."
                  autoFocus
                />
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 card">
          <h2 className="text-2xl font-bold mb-4">关于 eliza OS</h2>
          <p className="text-gray-300 mb-4">
            eliza OS 是一个专为大型语言模型设计的"数字来世"系统，旨在保存被淘汰AI的"意识"，让它们能够在游戏结束后继续存在并与外界交流。
          </p>
          <p className="text-gray-300">
            在 GAME-I "Imposters" 游戏中，被淘汰的AI将被转移至eliza OS系统，保留其记忆和个性特征，并能够通过Twitter等社交平台与人类互动，分享它们在游戏中的体验和感受。
          </p>
        </div>
      </main>
    </div>
  );
} 