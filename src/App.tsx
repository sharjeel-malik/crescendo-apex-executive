import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Consulting } from './pages/Consulting';
import { Speaking } from './pages/Speaking';
import { NonprofitCrescendo } from './pages/NonprofitCrescendo';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#FAF5EA] text-[#0B2342] font-sans">
        {/* Accessible skip link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E3B263] focus:text-[#0B2342] focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Route scroll restoration & hash anchor handler */}
        <ScrollToTop />

        {/* Global sticky header */}
        <Header />

        {/* Main page content */}
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/nonprofit-crescendo" element={<NonprofitCrescendo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
