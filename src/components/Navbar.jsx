import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import search from '../assets/searchIcon.svg';
import accountIcon from '../assets/userIcon.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled && isHomePage
          ? 'bg-black/70 backdrop-blur-md shadow-lg'
          : isHomePage ? 'bg-transparent' : 'bg-white'}
      `}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-5">

        {/* Logo */}
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className={`w-32 md:w-40 ${isHomePage ? 'brightness-100' : 'brightness-0'}`}
          />
        </a>

        {/* Desktop Menu */}
        <div className={`hidden sm:flex items-center gap-8 font-medium ${isHomePage ? 'text-white' : 'text-black'}`}>
          <a href="/">Home</a>
          <a href="/rooms">Hotels</a>
          <a href="/my-bookings">My Bookings</a>
          <a href="#">Experiences</a>
          <a href="#">About</a>

          {/* Search */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-white/10 rounded-full"
          >
            <img src={search} alt="Search" className="w-6 h-6 brightness-0" />
          </button>

          {/* Account */}
          <img src={accountIcon} alt="Account" className="w-6 h-6 cursor-pointer brightness-0" />

          {/* Login */}
          <button className="px-6 py-2 rounded-full font-semibold bg-white text-black hover:bg-gray-200">
            Login
          </button>
        </div>

        {/* Hamburger Button */}
        <button onClick={() => setOpen(!open)} className="sm:hidden z-50">
          <div className="space-y-1">
            <span className={`block h-0.5 w-6 bg-white transition ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed top-0 right-0 h-full w-2/3 bg-black text-white transform transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
          sm:hidden z-40
        `}
      >
        <div className="flex flex-col px-6 py-20 gap-6 text-lg">

          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/rooms" onClick={() => setOpen(false)}>Hotels</a>
          <a href="/my-bookings" onClick={() => setOpen(false)}>My Bookings</a>
          <a href="#" onClick={() => setOpen(false)}>Experiences</a>
          <a href="#" onClick={() => setOpen(false)}>About</a>

          {/* Search */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 mt-4"
          >
            <img src={search} alt="Search" className="w-5 h-5" />
            Search
          </button>

          {/* Account */}
          <div className="flex items-center gap-3">
            <img src={accountIcon} alt="Account" className="w-5 h-5" />
            Account
          </div>

          {/* Login */}
          <button className="mt-6 bg-white text-black py-2 rounded-full">
            Login
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;