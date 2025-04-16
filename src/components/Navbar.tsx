import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-secondary-light">turing</span>{' '}
            <span className="text-white">lab</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href="/about" 
              className={`hover:text-secondary-light transition-colors ${
                router.pathname === '/about' ? 'text-secondary-light' : 'text-gray-300'
              }`}
            >
              What is turing lab?
            </Link>
            <Link 
              href="/eliza" 
              className={`hover:text-secondary-light transition-colors ${
                router.pathname === '/eliza' ? 'text-secondary-light' : 'text-gray-300'
              }`}
            >
              eliza OS
            </Link>
            <a 
              href="https://github.com/your-username/turing-lab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/about" 
                className={`block py-2 px-4 rounded ${
                  router.pathname === '/about' ? 'bg-primary-light text-white' : 'text-gray-300 hover:bg-primary-light'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                What is turing lab?
              </Link>
              <Link 
                href="/eliza" 
                className={`block py-2 px-4 rounded ${
                  router.pathname === '/eliza' ? 'bg-primary-light text-white' : 'text-gray-300 hover:bg-primary-light'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                eliza OS
              </Link>
              <a 
                href="https://github.com/your-username/turing-lab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-primary-light rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 