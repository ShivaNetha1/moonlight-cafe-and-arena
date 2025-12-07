import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Calendar,
  Coffee,
  Gamepad2,
  UtensilsCrossed,
  Instagram,
  Linkedin,
  Clock,
  ArrowRight,
  Menu,
  X,
  Trophy,
  Target,
  Crown,
  Grid
} from 'lucide-react';

const MoonlightCafe = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionPadding = "py-20 px-6 md:px-12 lg:px-24";
  const glowText = "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 drop-shadow-md";
  const buttonPrimary = "bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(234,179,8,0.5)] flex items-center gap-2 cursor-pointer";
  const buttonSecondary = "border-2 border-yellow-500 text-yellow-400 font-bold py-3 px-8 rounded-full hover:bg-yellow-500/10 transition-colors duration-300 flex items-center gap-2 cursor-pointer";

  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen relative overflow-x-hidden selection:bg-yellow-500 selection:text-black">

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] mix-blend-overlay"></div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a
            href="https://www.instagram.com/moonlightcafe_arena"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold tracking-wider uppercase text-yellow-400 cursor-pointer hover:scale-105 transition-transform"
          >
            Moonlight <span className="text-white">Arena</span>
          </a>

          <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
            {['About', 'Services', 'Food', 'Location'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-yellow-400 transition-colors uppercase"
              >
                {item}
              </button>
            ))}
            <a
              href="https://wa.me/916309474794?text=Hello%20Moonlight%E2%9D%A4%EF%B8%8F%2C%0AI%20would%20like%20to%20book%20a%20box%20cricket%20slot%20for%3A%0A%0ADate%3A%20%0ATime%3A%20%0ATeam%20Size%3A%20"
              className="border border-yellow-500 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-all"
            >
              Book Slot
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 text-center">
             {['About', 'Services', 'Food', 'Location'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-lg hover:text-yellow-400 uppercase"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2535&auto=format&fit=crop"
            alt="Night Gaming Vibe"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1 border border-yellow-500/30 rounded-full bg-black/50 backdrop-blur-sm mb-6 animate-fade-in-up">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">The Nightlife of Sadasivpet</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            <span className="text-white">MOONLIGHT</span> <br />
            <span className={glowText}>CAFE & ARENA</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
            Coffee & Pizza Corner <span className="text-yellow-500 mx-2">|</span> Gaming Arena
          </p>

          <p className="text-md md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto italic">
            Home of Sadasivpet's Premium Box Cricket Arena
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/916309474794?text=Hello%20Moonlight%E2%9D%A4%EF%B8%8F%2C%0AI%20would%20like%20to%20book%20a%20box%20cricket%20slot%20for%3A%0A%0ADate%3A%20%0ATime%3A%20%0ATeam%20Size%3A%20
" target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
              <Calendar size={20} />
              Book Now
            </a>
            <a href="https://maps.app.goo.gl/1MzQ7z1f3KiuTVG26" target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              <MapPin size={20} />
              View Location
            </a>
          </div>
        </div>
      </section>

      <section id="about" className={`${sectionPadding} bg-gray-900/50 relative z-10`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl opacity-20 blur-lg"></div>
              <img
                src="https://iiedm.com/blog/wp-content/uploads/2022/01/1715062560942.jpg"
                alt="Boys and Girls playing Box Cricket on Turf"
                className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover h-[400px] w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Where <span className="text-yellow-400">Flavor</span> Meets <span className="text-orange-400">Fun</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Moonlight Cafe & Arena is not just a place; it's an experience. We've blended the cozy, aromatic world of a premium cafe with the high-energy excitement of a modern gaming arena.
              </p>
              <ul className="space-y-4">
                {[
                  "Artisan Coffees, Teas & Thick Shakes",
                  "Hand-tossed Pizzas & Authentic Chinese",
                  "Premium Box Cricket & Indoor Games",
                  "The Perfect Night-out Spot in Sadasivpet"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={`${sectionPadding} relative z-10`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className={glowText}>Arena</span></h2>
            <p className="text-gray-400">Level up your entertainment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative bg-gray-800/40 backdrop-blur-sm border border-yellow-500/30 rounded-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 z-0">
                <img src="/box_cricket_640x360.jpg" alt="Box Cricket" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

              <div className="relative z-20 flex flex-col items-center text-center p-8">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6 text-yellow-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(234,179,8,0.3)] backdrop-blur-md">
                  <Trophy size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">Box Cricket</h3>
                <span className="text-xs font-bold bg-yellow-500 text-black px-2 py-1 rounded mb-3 shadow-lg">PREMIUM</span>
                <p className="text-gray-200 text-sm font-medium drop-shadow-md">Experience Sadasivpet's finest turf. Perfect for tournaments or friendly matches.</p>
              </div>
            </div>

            {[
              { title: "Carrom", icon: <Target size={32} />, desc: "Strikes and pockets for a relaxing time with friends.", img: "/carrom.jpg" },
              { title: "Chess", icon: <Crown size={32} />, desc: "Sharpen your mind with a classic game of strategy.", img: "/chess.jpg" },
              { title: "Ludo", icon: <Grid size={32} />, desc: "Roll the dice and race to the finish line. Fun for all ages.", img: "/ludo.jpg" },
            ].map((game, idx) => (
              <div key={idx} className="group relative bg-gray-800/40 backdrop-blur-sm border border-white/5 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:border-orange-500/50 overflow-hidden min-h-[320px] flex flex-col justify-center">
                <div className="absolute inset-0 z-0">
                  <img src={game.img} alt={game.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
                </div>
                 <div className="relative z-10 flex flex-col items-center text-center p-8">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-300 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all">
                    {game.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm">{game.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="food" className="py-20 relative z-10">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 z-[-1]">
           <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Cafe bg" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                Bite, Sip <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">& Play</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Refuel after a match or just chill with our cafe specials.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Pizzas", icon: "🍕" },
                  { name: "Chinese", icon: "🍜" },
                  { name: "Thick Shakes", icon: "🥤" },
                  { name: "Coffee & Tea", icon: "☕" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-900/80 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:border-yellow-500/50 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-bold text-gray-200">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl w-full h-48 object-cover shadow-lg transform translate-y-8" alt="Pizza" />
              <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2121&auto=format&fit=crop" className="rounded-2xl w-full h-48 object-cover shadow-lg" alt="Coffee" />
              <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop" className="rounded-2xl w-full h-48 object-cover shadow-lg transform translate-y-8" alt="Dumplings" />
              <img src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974&auto=format&fit=crop" className="rounded-2xl w-full h-48 object-cover shadow-lg" alt="Shake" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 relative z-10 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-yellow-400 mb-4 bg-black/30 px-4 py-2 rounded-full border border-yellow-500/20">
            <Clock size={18} />
            <span>Slots Available: 10:00 AM – 12:00 AM (Midnight)</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to hit the pitch?</h2>
          <div className="flex justify-center">
            <a href="https://wa.me/916309474794?text=Hello%20Moonlight%E2%9D%A4%EF%B8%8F%2C%0AI%20would%20like%20to%20book%20a%20box%20cricket%20slot%20for%3A%0A%0ADate%3A%20%0ATime%3A%20%0ATeam%20Size%3A%20
" target="_blank" rel="noopener noreferrer" className={`${buttonPrimary} text-lg px-10 py-4`}>
              Book Your Slot Now <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="location" className={`${sectionPadding} relative z-10`}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Find Us <span className={glowText}>Here</span></h2>
            <p className="text-gray-400 text-lg">Your Gateway to Premium Gaming & Cafe Experience</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 border border-yellow-500/20 overflow-hidden">
            <div className="lg:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Moonlight Cafe & Arena</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-gray-300 font-medium">Address</p>
                      <p className="text-gray-400 text-sm">Beside Rao's International School,<br />Vikarabad Road, Sadasivpet,<br />Telangana</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-gray-300 font-medium">Open Hours</p>
                      <p className="text-gray-400 text-sm">10:00 AM – 12:00 AM (Midnight)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a href="https://maps.app.goo.gl/1MzQ7z1f3KiuTVG26" target="_blank" rel="noopener noreferrer" className={`${buttonPrimary} justify-center`}>
                  <MapPin size={20} />
                  Open in Google Maps
                </a>
                <a href="https://wa.me/916309474794?text=Hello%20Moonlight%E2%9D%A4%EF%B8%8F%2C%0AI%20would%20like%20to%20book%20a%20box%20cricket%20slot%20for%3A%0A%0ADate%3A%20%0ATime%3A%20%0ATeam%20Size%3A%20
" target="_blank" rel="noopener noreferrer" className={`${buttonSecondary} justify-center`}>
                  <Calendar size={20} />
                  Book a Slot
                </a>
              </div>
            </div>

            <div className="lg:w-3/5 h-[400px] bg-gray-900 rounded-2xl overflow-hidden relative group shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.622614688863!2d77.94658337668925!3d17.618037983296225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefad7754942d%3A0x6335193910543633!2sMoonlight%20Cafe%20Arena!5e0!3m2!1sen!2sin!4v1733518800000"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-full"
                title="Moonlight Cafe & Arena Location"
              ></iframe>
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-4 py-2 rounded-full text-sm text-white pointer-events-none flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                Moonlight Cafe & Arena
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <a
            href="https://www.instagram.com/moonlightcafe_arena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 mb-10 hover:scale-105 transition-transform group cursor-pointer"
          >
            <Instagram className="text-pink-500 group-hover:text-pink-400 transition-colors" size={32} />
            <h2 className="text-3xl font-bold group-hover:text-pink-500 transition-colors">Follow Our Vibe</h2>
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
             {[
               "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop"
             ].map((src, idx) => (
               <div key={idx} className="aspect-square overflow-hidden rounded-xl relative group">
                 <img src={src} alt="Insta Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Instagram className="text-white" />
                 </div>
               </div>
             ))}
          </div>

          <a href="https://www.instagram.com/moonlightcafe_arena" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white border-b-2 border-yellow-500 pb-1 hover:text-yellow-400 transition-colors">
            <Instagram size={20} />
            @moonlightcafe_arena
          </a>
        </div>
      </section>

      <footer className="bg-black text-white py-12 border-t border-yellow-500/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">Moonlight Cafe & Arena</h3>
              <p className="text-gray-500 text-sm">Sadasivpet's Premium Hangout Spot</p>
            </div>

            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/shiva-pandala/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 hover:scale-110 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/mr_shivnetha/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 flex items-center justify-center gap-1">
              Built with <span className="text-red-500 animate-pulse">❤️</span> by <a href="https://www.linkedin.com/in/shiva-pandala/" className="text-gray-300 hover:text-white transition-colors underline decoration-yellow-500/50 hover:decoration-yellow-500">Shiva Netha</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MoonlightCafe;
