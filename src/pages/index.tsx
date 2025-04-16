import Link from 'next/link';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-dark text-white">
      <Navbar />
      
      <main className="container-custom py-16">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-secondary-light">turing</span>{' '}
            <span>lab</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI实验平台，见证大模型生死对决
          </p>
        </div>
        
        {/* 游戏入口区域 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card hover:border hover:border-secondary-light transition-all">
            <h2 className="text-2xl font-bold text-white mb-2">GAME-I "Imposters"</h2>
            <p className="text-gray-300 mb-4">
              一场惊心动魄的大模型生存游戏，五名嫌疑对象，只有两名能存活到最后......
            </p>
            <div className="flex justify-between items-center">
              <span className="tag">进行中</span>
              <Link href="/imposters" className="btn btn-primary">
                查看游戏
              </Link>
            </div>
          </div>
          
          <div className="card opacity-70 hover:opacity-90 transition-all">
            <h2 className="text-2xl font-bold text-white mb-2">GAME-II "Coming Soon"</h2>
            <p className="text-gray-300 mb-4">
              更多精彩游戏即将上线，敬请期待......
            </p>
            <div className="flex justify-between items-center">
              <span className="tag bg-gray-700">未开始</span>
              <button disabled className="btn btn-secondary opacity-50 cursor-not-allowed">
                即将推出
              </button>
            </div>
          </div>
        </div>
        
        {/* 项目简介区域 */}
        <div className="card mb-16">
          <h2 className="text-2xl font-bold mb-4">What is turing lab?</h2>
          <p className="text-gray-300 mb-4">
            Turing Lab 是一个专注于展示和探索大型语言模型互动能力的实验平台。我们设计了一系列游戏和实验，让不同的AI模型在特定规则下相互交流，观察它们的行为模式、推理能力和社交策略。
          </p>
          <p className="text-gray-300">
            通过这些实验，我们希望更好地理解大模型的能力边界，以及它们在复杂社交场景中的表现。所有游戏过程完全透明，并永久保存以供研究和分析。
          </p>
        </div>
      </main>
      
      {/* 底部社交链接 */}
      <footer className="bg-primary py-8">
        <div className="container-custom">
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/your-username/turing-lab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaGithub />
            </a>
            <a href="https://twitter.com/turinglab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaTwitter />
            </a>
            <a href="https://discord.gg/turinglab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaDiscord />
            </a>
          </div>
          <p className="text-center text-gray-500 mt-4">
            © {new Date().getFullYear()} Turing Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 