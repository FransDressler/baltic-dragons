

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const boatWidth = 60;
  const offset = -3*boatWidth;

  useEffect(() => {
    // Initiale Breite berechnen
    if (typeof window !== 'undefined') {
      setTrackWidth(0.3 * window.innerWidth);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = Math.min(scrollTop / docHeight, 1);
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      setTrackWidth(0.3 * window.innerWidth);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {
        setTrackWidth(0.3 * window.innerWidth);
      });
    };
  }, []);

  const xPosition = offset + scrollPercent * (trackWidth + boatWidth);

  return (
    <nav className="fixed top-0 left-0 w-full bg-sky-950/50 backdrop-blur z-50 px-4 md:px-12 py-4 flex justify-between items-center text-stone-100 shadow-md">
      {/* Links */}
      <div className="flex items-center space-x-6 font-semibold">
        <Link href="#home">
          <Image
            src="/baltics-logo-light.png"
            alt="Baltic Dragons Logo"
            width={100}
            height={40}
            className="hidden md:block"
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="border-b-2 border-transparent hover:border-sky-400 transition-all pb-1">
            Home
          </Link>
          <Link href="/news" className="border-b-2 border-transparent hover:border-sky-400 transition-all pb-1">
            News
          </Link>
          <Link href="/team" className="border-b-2 border-transparent hover:border-sky-400 transition-all pb-1">
            Team
          </Link>
        </div>
      </div>

      {/* Rennen */}
      <div className="relative h-[40px] hidden md:block" style={{ width: `${trackWidth}px` }}>
        <Image src="/icons/startboje.png" alt="Startboje" width={30} height={30} className="absolute left-0 bottom-0 z-10" />
        <Image src="/icons/goalboje.png" alt="Zielboje" width={30} height={30} className="absolute right-0 bottom-0 z-10" />
        <div
          className="absolute bottom-0 transition-transform duration-150"
          style={{ transform: `translateX(${xPosition}px) scaleX(-1)` }}
        >
          <Image src="/icons/drachenboot.png" alt="Drachenboot" width={2*boatWidth} height={120} />
        </div>
      </div>

      {/* Mobile Menü */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-stone-100 focus:outline-none"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-sky-950 border-t border-sky-800 text-center py-4 space-y-4 md:hidden">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block hover:text-sky-400">
            Home
          </Link>
          <Link href="/news" onClick={() => setMobileOpen(false)} className="block hover:text-sky-400">
            News
          </Link>
          <Link href="/team" onClick={() => setMobileOpen(false)} className="block hover:text-sky-400">
            Team
          </Link>
        </div>
      )}
    </nav>
  );
}

