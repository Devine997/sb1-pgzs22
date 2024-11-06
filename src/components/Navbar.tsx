import React from 'react';
import { Link } from 'react-router-dom';
import { Moon } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-transparent py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Moon className="h-8 w-8 text-amber-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 text-transparent bg-clip-text">
            Zodiac Guide
          </span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-amber-200 transition">Home</Link>
          <a href="#daily" className="text-white hover:text-amber-200 transition">Daily Horoscope</a>
          <a href="#tarot" className="text-white hover:text-amber-200 transition">Tarot</a>
        </div>
      </div>
    </nav>
  );
}