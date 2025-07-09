import { Link, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Stocks from './pages/Stocks';
import Portfolio from './pages/Portfolio';

export default function App() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-48 bg-gray-800 text-white p-4">
        <nav className="space-y-2">
          <Link to="/" className="block hover:underline">Dashboard</Link>
          <Link to="/stocks" className="block hover:underline">Stocks</Link>
          <Link to="/portfolio" className="block hover:underline">Portfolio</Link>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </div>
  );
}
