import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#0A0F19] text-white py-0 px-6  h-[440px]   pl-[86px]">
      <div className="max-w-7xl  h-full grid grid-cols-1 md:grid-cols-6 ">
        <div className="  col-span-2 flex flex-col justify-between h-full">
          <div className="flex flex-col items-start mb-4 pt-[58px]">
            <img
              src="/images/logo.svg"
              alt="System Pure"
              className="w-[238px] h-[55px]"
            />
          </div>

          <div className=" flex justify-between items-center pb-[35px] mt-6 md:mt-0">
            <img
              src="images/logos/mastercard.svg"
              alt="MasterCard"
              className="w-[79px] h-[62px]"
            />
            <img
              src="images/logos/visa.svg"
              alt="Visa"
              className="w-[81px] h-[26px]"
            />
            <img
              src="images/logos/amex.svg"
              alt="American Express"
              className="w-[81px] h-[26px]"
            />
          </div>
        </div>

        <div className="col-span-4 grid grid-cols-2 md:grid-cols-4 pt-[95px] space-x-3">
          <div className="space-y-4">
            <Link
              to="/hakkimizda"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Hakkımızda
            </Link>
            <Link
              to="/medya"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Medya
            </Link>
            <Link
              to="/isverenler"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              İşverenler
            </Link>
            <Link
              to="/iletisim"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              İletişim
            </Link>
          </div>
          <div className="space-y-4">
            <Link
              to="/fullstack-pro"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Fullstack Pro
            </Link>
            <Link
              to="/fullstack-up"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Fullstack Up
            </Link>
            <Link
              to="/fullstack-uppro"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Fullstack UpPro
            </Link>
            <Link
              to="/frontend-developer"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Frontend Developer
            </Link>
            <Link
              to="/fullstack-genc"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Fullstack Genç
            </Link>
            <Link
              to="/fullstack-gpro"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Fullstack GPro
            </Link>
          </div>
          <div className="space-y-4">
            <Link
              to="/kvkk-politikasi"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              KVKK Politikası
            </Link>
            <Link
              to="/gizlilik-politikasi"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Gizlilik Politikası
            </Link>
            <Link
              to="/instagram"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Instagram
            </Link>
            <Link
              to="/linkedin"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Linkedin
            </Link>
          </div>
          <div className="space-y-4">
            <Link
              to="/sikca-sorulanlar"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Sıkça Sorulanlar
            </Link>
            <Link
              to="/kullanım-sartlari"
              className="block text-[#C2C3C5] font-semibold text-sm mb-2"
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
        {/* Ödeme Yöntemleri */}
      </div>
    </footer>
  );
};

export default Footer;
