import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            HOROSCOPE
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-indigo-400">Horoscopes</Link>
            <Link to="/articles" className="text-white hover:text-indigo-400">Articles</Link>
            <Link to="/tarot" className="text-white hover:text-indigo-400">Tarot</Link>
            <Link to="/games" className="text-white hover:text-indigo-400">Games</Link>
            <Link to="/signs" className="text-white hover:text-indigo-400">Zodiac Signs</Link>
            <Link to="/psychics" className="text-white hover:text-indigo-400">Psychics</Link>
            <Link to="/store" className="text-white hover:text-indigo-400">Store</Link>
          </div>
          
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}