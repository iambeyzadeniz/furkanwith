import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Dinamik arka plan renkleri
  const bgColor =
    currentPath === "/programs" ? "bg-transparent" : "bg-[#0A0F19]";

  return (
    <header className={`h-[129px] ${bgColor} text-white`}>
      <div className="max-w-full flex items-center justify-between h-full px-10">
        {/* Sol: Logo */}
        <div className="w-1/3">
          <Link to="/">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="w-[238px] h-[55px]"
            />
          </Link>
        </div>

        {/* Orta: Başlıklar */}
        <nav className="w-1/3 flex justify-center gap-8">
          {["/programs", "/about", "/contact", "/prices"].map((path) => (
            <Link
              key={path}
              to={path}
              className={`text-[16px] font-semibold ${
                currentPath === path ? "text-[#7DC6B5]" : "text-white"
              }`}
            >
              {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </nav>

        {/* Sağ: Butonlar */}
        <div className="w-1/3 flex justify-end gap-4">
          <button
            className={`px-4 py-2 rounded-md ${
              currentPath === "/programs"
                ? "bg-transparent text-white border border-white text-[16px] font-semibold"
                : "bg-[#CFCFCF] text-white text-[16px] font-semibold"
            }`}
          >
            GİRİŞ
          </button>
          <button className="bg-[#ED417F] text-[16px] font-semibold px-4 py-2 rounded-md">
            BAŞVUR
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
