import React from "react";
import { Link } from "react-router-dom";
import { up } from "./Navbar";

export default function Footer() {

  return (
    <>
      <footer className="relative overflow-hidden bg-[#0a0a0a] border-t border-[#262626]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="py-16 md:px-8 relative px-4 container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 lg:grid-cols-4">
            <div>
              <Link onClick={up} className="flex gap-3 mb-6 items-center" to="/">
                <div className="size-11 text-[20px] shadow-2xl shadow-[#f95200] font-bold leading-7 flex text-white items-center justify-center rounded-2xl bg-[#f95200]">
                  <span className="-translate-y-1.5">ع</span>
                </div>
                <span className="text-[20px] leading-7 font-bold text-white">
                  عدسه
                </span>
              </Link>

              <p className="text-sm leading-6 font-normal mb-6 text-[#737373]">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.youtube.com/@adasah"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:bg-[#fc5800] transition-all duration-200 ease-in-out hover:border-transparent hover:scale-105 group size-10 border flex items-center justify-center border-[#262626] bg-[#171717] rounded-xl"
                >
                  <i className="fa-brands group-hover:text-white transition-all group-hover:scale-110 duration-200 fa-youtube text-[#737373]"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/unavailable/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:bg-[#fc5800] transition-all duration-200 ease-in-out hover:border-transparent hover:scale-105 group size-10 border flex items-center justify-center border-[#262626] bg-[#171717] rounded-xl"
                >
                  <i className="fa-brands group-hover:text-white transition-all group-hover:scale-110 duration-200 fa-x-twitter text-[#737373]"></i>
                </a>
                <a
                  href="https://github.com/adasah"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:bg-[#fc5800] transition-all duration-200 ease-in-out hover:border-transparent hover:scale-105 group size-10 border flex items-center justify-center border-[#262626] bg-[#171717] rounded-xl"
                >
                  <i className="fa-brands group-hover:text-white transition-all group-hover:scale-110 duration-200 fa-github text-[#737373]"></i>
                </a>
                <a
                  href="https://x.com/adasah"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:bg-[#fc5800] transition-all duration-200 ease-in-out hover:border-transparent hover:scale-105 group size-10 border flex items-center justify-center border-[#262626] bg-[#171717] rounded-xl"
                >
                  <i className="fa-brands group-hover:text-white transition-all group-hover:scale-110 duration-200 fa-linkedin text-[#737373]"></i>
                </a>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <div className="flex mb-6 items-center gap-2">
                <div className="w-8 h-[1.5px] grad4 rounded-full"></div>
                <span className="leading-6 text-white font-semibold">
                  استكشف
                </span>
              </div>

              <div>
                <Link
                  to="/"
                  onClick={up}
                  className="flex items-center group cursor-pointer mb-4 gap-2.5"
                >
                  <i className="fa-solid translate-y-px fa-sm group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-1.5 fa-angle-left text-[#ff6900]"></i>
                  <p className="group-hover:text-[#ff6900] transition-all duration-200 group-hover:-translate-x-1 text-sm font-medium leading-5 text-[#737373]">
                    الرئيسية
                  </p>
                </Link>
                <Link
                  onClick={up}
                  to="/Blog"
                  className="flex items-center group cursor-pointer mb-4 gap-2.5"
                >
                  <i className="fa-solid translate-y-px fa-sm group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-1.5 fa-angle-left text-[#ff6900]"></i>
                  <p className="group-hover:text-[#ff6900] transition-all duration-200 group-hover:-translate-x-1 text-sm font-medium leading-5 text-[#737373]">
                    المدونة
                  </p>
                </Link>
                <Link
                  to="/Blog"
                  onClick={up}
                  className="flex items-center group cursor-pointer gap-2.5"
                >
                  <i className="fa-solid translate-y-px fa-sm group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-1.5 fa-angle-left text-[#ff6900]"></i>
                  <p className="group-hover:text-[#ff6900] transition-all duration-200 group-hover:-translate-x-1 text-sm font-medium leading-5 text-[#737373]">
                    من نحن
                  </p>
                </Link>
              </div>
            </div>

            {/* Categories Links */}
            <div>
              <div className="flex mb-6 items-center gap-2">
                <div className="w-8 h-[1.5px] grad4 rounded-full"></div>
                <span className="leading-6 text-white font-semibold">
                  التصنيفات
                </span>
              </div>

              <div>
                <Link
                  onClick={up}
                  to="/Blog"
                  className="flex items-center group cursor-pointer mb-4 gap-2.5"
                >
                  <i className="fa-solid translate-y-px fa-sm group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-1.5 fa-angle-left text-[#ff6900]"></i>
                  <p className="group-hover:text-[#ff6900] transition-all duration-200 group-hover:-translate-x-1 text-sm font-medium leading-5 text-[#737373]">
                    إضاءة
                  </p>
                </Link>

                <Link
                  to="/Blog"
                  onClick={up}
                  className="flex items-center group cursor-pointer mb-4 gap-2.5"
                >
                  <i className="fa-solid translate-y-px fa-sm group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-1.5 fa-angle-left text-[#ff6900]"></i>
                  <p className="group-hover:text-[#ff6900] transition-all duration-200 group-hover:-translate-x-1 text-sm font-medium leading-5 text-[#737373]">
                    بورتريه
                  </p>
                </Link>

                <Link
                  to="/Blog"
                  onClick={up}
                  className="flex items-center group cursor-pointer mb-4 gap-2.5"
                >
                  <i className="fa-solid translate-y-px fa-sm group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-1.5 fa-angle-left text-[#ff6900]"></i>
                  <p className="group-hover:text-[#ff6900] transition-all duration-200 group-hover:-translate-x-1 text-sm font-medium leading-5 text-[#737373]">
                    مناظر طبيعية
                  </p>
                </Link>

                <Link
                  to="/Blog"
                  onClick={up}
                  className="flex items-center group cursor-pointer gap-2.5"
                >
                  <i className="fa-solid translate-y-px fa-sm group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-1.5 fa-angle-left text-[#ff6900]"></i>
                  <p className="group-hover:text-[#ff6900] transition-all duration-200 group-hover:-translate-x-1 text-sm font-medium leading-5 text-[#737373]">
                    تقنيات
                  </p>
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="flex mb-6 items-center gap-2">
                <div className="w-8 h-[1.5px] grad4 rounded-full"></div>
                <span className="leading-6 text-white font-semibold">
                  ابقى على اطلاع
                </span>
              </div>
              <p className="text-sm leading-6 font-normal mb-4 text-[#737373]">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <div>
                <input
                  className="mb-3 py-3 px-4 rounded-xl outline-0 outline-transparent transition-all duration-200 text-white TAJ focus:outline-[#ff6a00] focus:outline-2 border text-sm leading-5 font-normal border-[#262626] w-full bg-[#161616] placeholder:-translate-y-px placeholder:text-[#737373]"
                  placeholder="أدخل بريدك الاكتروني"
                />
                <Link to="/Blog" onClick={up}>
                  <button className="transition-all duration-300 hover:-translate-y-0.5 w-full py-4 px-8 rounded-full text TAJ text-sm leading-5 font-semibold text-white cursor-pointer grad">
                    اشترك
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#262626]">
          <div className="py-6 px-4 md:px-8 relative gap-4 flex items-center justify-between flex-col md:flex-row container mx-auto max-w-7xl">
            <p className="text-sm leading-5 text-[#525252]">
              © 2026 عدسة صنع بكل{" "}
              <i className="fa-solid fa-heart text-orange-500"></i> جميع الحقوق
              محفوظة.
            </p>
            <div className="flex gap-6 items-center">
              <Link
                to="/Privacy"
                onClick={up}
                className="text-sm leading-5 font-normal text-[#525252] hover:text-[#f97200] transition-all duration-200"
              >
                سياسة الخصوصية
              </Link>
              <Link
                to="/Terms"
                onClick={up}
                className="text-sm leading-5 font-normal text-[#525252] hover:text-[#f97200] transition-all duration-200"
              >
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
