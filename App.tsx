import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { TAMIL_TRANSLATIONS, MOCK_PROFILES } from './constants';
import { ProfileCard } from './components/ProfileCard';
import { HoroscopeMatcher } from './components/HoroscopeMatcher';
import { ChatAssistant } from './components/ChatAssistant';
import { Heart, Search, Menu, X, Filter } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-brand-600 font-bold' : 'text-gray-600 hover:text-brand-600';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-500 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-brand-900 leading-tight">நம்ம வீட்டு<br/><span className="text-brand-600">கல்யாணம்</span></h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`${isActive('/')} transition-colors`}>{TAMIL_TRANSLATIONS.nav.home}</Link>
            <Link to="/matches" className={`${isActive('/matches')} transition-colors`}>{TAMIL_TRANSLATIONS.nav.matches}</Link>
            <Link to="/horoscope" className={`${isActive('/horoscope')} transition-colors`}>{TAMIL_TRANSLATIONS.nav.horoscope}</Link>
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
              {TAMIL_TRANSLATIONS.nav.login}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-700">{TAMIL_TRANSLATIONS.nav.home}</Link>
            <Link to="/matches" onClick={() => setIsMenuOpen(false)} className="block text-gray-700">{TAMIL_TRANSLATIONS.nav.matches}</Link>
            <Link to="/horoscope" onClick={() => setIsMenuOpen(false)} className="block text-gray-700">{TAMIL_TRANSLATIONS.nav.horoscope}</Link>
            <button className="w-full bg-brand-600 text-white py-2 rounded-lg">
              {TAMIL_TRANSLATIONS.nav.login}
            </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-brand-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-200 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-red-200 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 text-center md:text-left">
                    <span className="inline-block px-4 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-6">
                        ❤️ #1 Tamil Matrimony Site
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                        {TAMIL_TRANSLATIONS.hero.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                        {TAMIL_TRANSLATIONS.hero.subtitle}. பாரம்பரியம் மற்றும் தொழில்நுட்பத்தின் சரியான கலவை.
                    </p>
                    
                    {/* Search Widget */}
                    <div className="bg-white p-4 rounded-2xl shadow-xl max-w-md mx-auto md:mx-0">
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <div>
                                <label className="text-xs text-gray-500 font-semibold uppercase">{TAMIL_TRANSLATIONS.filters.lookingFor}</label>
                                <select className="w-full mt-1 border-b-2 border-brand-100 focus:border-brand-500 outline-none bg-transparent py-1 font-medium">
                                    <option>{TAMIL_TRANSLATIONS.filters.bride}</option>
                                    <option>{TAMIL_TRANSLATIONS.filters.groom}</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-semibold uppercase">{TAMIL_TRANSLATIONS.filters.religion}</label>
                                <select className="w-full mt-1 border-b-2 border-brand-100 focus:border-brand-500 outline-none bg-transparent py-1 font-medium">
                                    <option>Hindu</option>
                                    <option>Muslim</option>
                                    <option>Christian</option>
                                </select>
                            </div>
                        </div>
                        <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-brand-200">
                            {TAMIL_TRANSLATIONS.hero.searchBtn}
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2">
                   <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1605202026859-9b93a02c4c72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Tamil Wedding Couple" 
                            className="rounded-3xl shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                            <div className="bg-green-100 p-2 rounded-full">
                                <Users className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Active Profiles</p>
                                <p className="font-bold text-lg">10,000+</p>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  );
};

const Matches = () => {
    return (
        <div className="container mx-auto px-4 py-12">
             <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{TAMIL_TRANSLATIONS.nav.matches}</h2>
                    <p className="text-gray-500">உங்களுக்கான சிறந்த வரன்கள்</p>
                </div>
                <button className="flex items-center gap-2 text-brand-600 font-medium hover:bg-brand-50 px-4 py-2 rounded-lg transition-colors">
                    <Filter className="w-5 h-5" />
                    Filters
                </button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {MOCK_PROFILES.map(profile => (
                     <ProfileCard key={profile.id} profile={profile} />
                 ))}
             </div>
        </div>
    );
};

// Simple User Icon component for Hero section
function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-brand-500">Namma Veettu Kalyanam</h3>
                    <p className="text-gray-400 text-sm">
                        நம்பிக்கையான தமிழ் மேட்ரிமோனி சேவை. 
                        எங்கள் நோக்கம் தமிழர்களின் திருமண கனவை நனவாக்குவதே.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/" className="hover:text-brand-500">Home</Link></li>
                        <li><Link to="/matches" className="hover:text-brand-500">Matches</Link></li>
                        <li><Link to="/horoscope" className="hover:text-brand-500">Horoscope</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Contact</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Chennai, Tamil Nadu</li>
                        <li>support@nvkalyanam.com</li>
                        <li>+91 98765 43210</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Download App</h4>
                    <div className="flex gap-2">
                        <div className="bg-gray-800 h-10 w-32 rounded flex items-center justify-center text-xs text-gray-500 cursor-pointer hover:bg-gray-700">App Store</div>
                        <div className="bg-gray-800 h-10 w-32 rounded flex items-center justify-center text-xs text-gray-500 cursor-pointer hover:bg-gray-700">Google Play</div>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                © 2024 Namma Veettu Kalyanam. All rights reserved.
            </div>
        </div>
    </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <div className="bg-white">
                           <Matches />
                        </div>
                    </>
                } />
                <Route path="/matches" element={<Matches />} />
                <Route path="/horoscope" element={<div className="py-12"><HoroscopeMatcher /></div>} />
            </Routes>
        </main>
        
        <ChatAssistant />
        <Footer />
      </div>
    </Router>
  );
};

export default App;