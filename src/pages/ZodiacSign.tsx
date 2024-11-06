import { useParams } from 'react-router-dom';
import { zodiacSigns } from '../data/zodiacSigns';
import { ZodiacTabs } from '../components/ZodiacTabs';
import { ZodiacCompatibility } from '../components/ZodiacCompatibility';

export function ZodiacSign() {
  const { name } = useParams();
  const sign = zodiacSigns.find(
    (s) => s.name.toLowerCase() === name?.toLowerCase()
  );

  if (!sign) {
    return <div>Sign not found</div>;
  }

  return (
    <div>
      <div
        className={`${sign.headerBg} bg-cover bg-center h-64 relative`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">{sign.symbol}</div>
            <h1 className="text-4xl font-bold mb-2">{sign.name} Horoscope</h1>
            <p className="text-lg opacity-90">{sign.date}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Daily Horoscope</h2>
          <p className="text-lg">{sign.dailyHoroscope}</p>
        </div>

        <ZodiacTabs sign={sign} />
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">{sign.name} Sign Compatibility</h2>
          <ZodiacCompatibility signName={sign.name} />
        </div>
      </div>
    </div>
  );
}