interface ZodiacTabsProps {
  sign: {
    name: string;
    element: string;
    quality: string;
    rulingPlanet: string;
    luckyNumber: number;
  };
}

export function ZodiacTabs({ sign }: ZodiacTabsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <button className="bg-cyan-900 hover:bg-cyan-800 p-4 rounded-lg text-left transition-colors">
        <h3 className="font-semibold mb-2">{sign.name} Personality Traits</h3>
        <p className="text-sm opacity-80">Discover key characteristics and traits</p>
      </button>
      
      <button className="bg-cyan-900 hover:bg-cyan-800 p-4 rounded-lg text-left transition-colors">
        <h3 className="font-semibold mb-2">{sign.name} Friendship Compatibility</h3>
        <p className="text-sm opacity-80">Find your best zodiac friends</p>
      </button>
      
      <button className="bg-cyan-900 hover:bg-cyan-800 p-4 rounded-lg text-left transition-colors">
        <h3 className="font-semibold mb-2">{sign.name} Love Compatibility</h3>
        <p className="text-sm opacity-80">Discover your romantic matches</p>
      </button>
      
      <button className="bg-cyan-900 hover:bg-cyan-800 p-4 rounded-lg text-left transition-colors">
        <h3 className="font-semibold mb-2">{sign.name} Lifestyle</h3>
        <p className="text-sm opacity-80">Learn about daily habits and preferences</p>
      </button>
      
      <button className="bg-cyan-900 hover:bg-cyan-800 p-4 rounded-lg text-left transition-colors">
        <h3 className="font-semibold mb-2">{sign.name} Health</h3>
        <p className="text-sm opacity-80">Wellness tips for your sign</p>
      </button>
      
      <button className="bg-cyan-900 hover:bg-cyan-800 p-4 rounded-lg text-left transition-colors">
        <h3 className="font-semibold mb-2">{sign.name} Spirituality</h3>
        <p className="text-sm opacity-80">Explore your spiritual path</p>
      </button>
    </div>
  );
}