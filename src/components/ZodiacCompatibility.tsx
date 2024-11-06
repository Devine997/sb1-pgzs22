import { Link } from 'react-router-dom';

interface ZodiacCompatibilityProps {
  signName: string;
}

export function ZodiacCompatibility({ signName }: ZodiacCompatibilityProps) {
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer',
    'Leo', 'Virgo', 'Libra', 'Scorpio',
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {signs.map((compatSign) => (
        <Link
          key={compatSign}
          to={`/compatibility/${signName.toLowerCase()}-${compatSign.toLowerCase()}`}
          className="text-pink-400 hover:text-pink-300 transition-colors"
        >
          {signName} and {compatSign}
        </Link>
      ))}
    </div>
  );
}