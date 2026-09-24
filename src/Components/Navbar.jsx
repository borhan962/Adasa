import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export const up = (target) => {
  if (target === "filter") {
    const el = document.getElementById("blog-scroll-anchor");
    if (el) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      return;
    }
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Set RTL text direction and Arabic language 
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Styling links
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
      : "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white";

  // Stylingfor mobile links
  const getMobileLinkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-orange-500/10 text-orange-500 border border-orange-500/30 text-right"
      : "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white text-right";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
        
          <NavLink className="flex items-center gap-3 group" to="/">
            <img src={`${import.meta.env.BASE_URL}Image/logo-GdqARQRt.png`} alt="عدسة" className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl leading-none tracking-wide">عدسة</span>
              <span className="text-orange-400/80 text-xs tracking-wide md:block">عالم التصوير الفوتوغرافي</span>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1 bg-[#121212]/50 border border-[#222222] rounded-full p-1.5 backdrop-blur-md">
            <NavLink className={getLinkClass} to="/">الرئيسية</NavLink>
            <NavLink className={getLinkClass} to="/Blog">المدونة</NavLink>
            <Link className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white" to="/about">من نحن</Link>
          </nav>

          {/* Actions (Left Side) */}
          <div className="flex items-center gap-3">
            <button className="cursor-pointer p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <NavLink className="hidden md:block px-7 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0" to="/Blog">
              ابدأ القراءة
            </NavLink>
            
            {/* Mobile*/}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile (Open State) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden flex flex-col p-4">
          <div className="flex items-center justify-between w-full py-4 px-2">
            <NavLink className="flex items-center gap-3 group" to="/" onClick={toggleMenu}>
              <img src={`${import.meta.env.BASE_URL}Image/logo-GdqARQRt.png`} alt="عدسة" className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" />
              <span className="text-white font-bold text-lg leading-none tracking-wide">عدسة</span>
            </NavLink>
            
            {/* Close Button (X) */}
            <button 
              onClick={toggleMenu}
              className="p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="bg-[#0c0c0c] border border-[#1f1f1f] rounded-3xl p-6 flex flex-col gap-4 mt-2">
            <NavLink className={getMobileLinkClass} to="/" onClick={toggleMenu}>الرئيسية</NavLink>
            <NavLink className={getMobileLinkClass} to="/Blog" onClick={toggleMenu}>المدونة</NavLink>
            <Link className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white text-right" to="/about" onClick={toggleMenu}>من نحن</Link>
            
            <NavLink 
              className="text-sm text-center mt-2 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25" 
              to="/Blog"
              onClick={toggleMenu}
            >
              ابدأ القراءة
            </NavLink>
          </div>
        </div>
      )}
    </>
  )
}