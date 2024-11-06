import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ZodiacSign } from './pages/ZodiacSign';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign/:name" element={<ZodiacSign />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;