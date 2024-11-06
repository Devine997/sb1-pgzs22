interface ZodiacSign {
  name: string;
  symbol: string;
  date: string;
  element: string;
  quality: string;
  rulingPlanet: string;
  luckyNumber: number;
  dailyHoroscope: string;
  bgColor: string;
  headerBg: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    name: 'Aries',
    symbol: '♈',
    date: 'Mar 21 - Apr 19',
    element: 'Fire',
    quality: 'Cardinal',
    rulingPlanet: 'Mars',
    luckyNumber: 7,
    dailyHoroscope: 'Your energy is high today, making it perfect for starting new projects. Trust your instincts and take the lead.',
    bgColor: 'bg-red-900/40',
    headerBg: 'bg-gradient-to-r from-red-900 to-orange-900'
  },
  {
    name: 'Taurus',
    symbol: '♉',
    date: 'Apr 20 - May 20',
    element: 'Earth',
    quality: 'Fixed',
    rulingPlanet: 'Venus',
    luckyNumber: 6,
    dailyHoroscope: 'Focus on practical matters today. Your natural persistence will help you overcome any obstacles.',
    bgColor: 'bg-green-900/40',
    headerBg: 'bg-gradient-to-r from-green-900 to-emerald-900'
  },
  {
    name: 'Gemini',
    symbol: '♊',
    date: 'May 21 - Jun 20',
    element: 'Air',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    luckyNumber: 5,
    dailyHoroscope: 'Your communication skills are enhanced today. Share your ideas and connect with others.',
    bgColor: 'bg-yellow-900/40',
    headerBg: 'bg-gradient-to-r from-yellow-900 to-amber-900'
  },
  {
    name: 'Cancer',
    symbol: '♋',
    date: 'Jun 21 - Jul 22',
    element: 'Water',
    quality: 'Cardinal',
    rulingPlanet: 'Moon',
    luckyNumber: 2,
    dailyHoroscope: 'Trust your intuition today. Your emotional intelligence will guide you to make the right decisions.',
    bgColor: 'bg-blue-900/40',
    headerBg: 'bg-gradient-to-r from-blue-900 to-cyan-900'
  },
  {
    name: 'Leo',
    symbol: '♌',
    date: 'Jul 23 - Aug 22',
    element: 'Fire',
    quality: 'Fixed',
    rulingPlanet: 'Sun',
    luckyNumber: 1,
    dailyHoroscope: 'Your natural leadership abilities shine today. Take center stage and inspire others.',
    bgColor: 'bg-orange-900/40',
    headerBg: 'bg-gradient-to-r from-orange-900 to-amber-900'
  },
  {
    name: 'Virgo',
    symbol: '♍',
    date: 'Aug 23 - Sep 22',
    element: 'Earth',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    luckyNumber: 5,
    dailyHoroscope: 'Your analytical skills are heightened today. Focus on organizing and improving your daily routine.',
    bgColor: 'bg-emerald-900/40',
    headerBg: 'bg-gradient-to-r from-emerald-900 to-green-900'
  },
  {
    name: 'Libra',
    symbol: '♎',
    date: 'Sep 23 - Oct 22',
    element: 'Air',
    quality: 'Cardinal',
    rulingPlanet: 'Venus',
    luckyNumber: 6,
    dailyHoroscope: 'Harmony and balance are key today. Focus on relationships and creating beauty in your surroundings.',
    bgColor: 'bg-pink-900/40',
    headerBg: 'bg-gradient-to-r from-pink-900 to-rose-900'
  },
  {
    name: 'Scorpio',
    symbol: '♏',
    date: 'Oct 23 - Nov 21',
    element: 'Water',
    quality: 'Fixed',
    rulingPlanet: 'Pluto',
    luckyNumber: 9,
    dailyHoroscope: 'Your intuitive powers are strong today. Dive deep into matters that require investigation.',
    bgColor: 'bg-purple-900/40',
    headerBg: 'bg-gradient-to-r from-purple-900 to-indigo-900'
  },
  {
    name: 'Sagittarius',
    symbol: '♐',
    date: 'Nov 22 - Dec 21',
    element: 'Fire',
    quality: 'Mutable',
    rulingPlanet: 'Jupiter',
    luckyNumber: 3,
    dailyHoroscope: 'Adventure calls today. Expand your horizons and embrace new learning opportunities.',
    bgColor: 'bg-indigo-900/40',
    headerBg: 'bg-gradient-to-r from-indigo-900 to-blue-900'
  },
  {
    name: 'Capricorn',
    symbol: '♑',
    date: 'Dec 22 - Jan 19',
    element: 'Earth',
    quality: 'Cardinal',
    rulingPlanet: 'Saturn',
    luckyNumber: 8,
    dailyHoroscope: 'Focus on your goals today. Your disciplined approach will lead to success.',
    bgColor: 'bg-slate-900/40',
    headerBg: 'bg-gradient-to-r from-slate-900 to-gray-900'
  },
  {
    name: 'Aquarius',
    symbol: '♒',
    date: 'Jan 20 - Feb 18',
    element: 'Air',
    quality: 'Fixed',
    rulingPlanet: 'Uranus',
    luckyNumber: 4,
    dailyHoroscope: 'Your innovative ideas take center stage today. Embrace your unique perspective.',
    bgColor: 'bg-cyan-900/40',
    headerBg: 'bg-gradient-to-r from-cyan-900 to-teal-900'
  },
  {
    name: 'Pisces',
    symbol: '♓',
    date: 'Feb 19 - Mar 20',
    element: 'Water',
    quality: 'Mutable',
    rulingPlanet: 'Neptune',
    luckyNumber: 7,
    dailyHoroscope: 'Your creativity and imagination are heightened today. Trust your inner guidance.',
    bgColor: 'bg-teal-900/40',
    headerBg: 'bg-gradient-to-r from-teal-900 to-cyan-900'
  }
];