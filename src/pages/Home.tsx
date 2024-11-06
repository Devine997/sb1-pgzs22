import { Link } from 'react-router-dom';
import { zodiacSigns } from '../data/zodiacSigns';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Choose Your Zodiac Sign</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {zodiacSigns.map((sign) => (
          <Link
            key={sign.name}
            to={`/sign/${sign.name.toLowerCase()}`}
            className={`${sign.bgColor} rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-200 shadow-lg`}
          >
            <div className="text-4xl mb-2">{sign.symbol}</div>
            <h2 className="text-xl font-semibold mb-1">{sign.name}</h2>
            <p className="text-sm opacity-90">{sign.date}</p>
          </Link>
        ))}
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">More Horoscopes for You</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['DAILY HOROSCOPES', '2024 HOROSCOPE', 'LOVE', 'TAROT', 'CAREER', 'MONEY', 'HEALTH', 'CHINESE'].map((category) => (
            <button
              key={category}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}