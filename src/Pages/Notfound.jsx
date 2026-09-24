import React from "react";
import { Link } from "react-router-dom";
import { up } from "../Components/Navbar";

export default function Notfound() {

  return (
    <>
      <main className="pt-20">
        <div className="min-h-[calc(100vh-5rem)] flex justify-center relative overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s]"></div>
          </div>

          <section className="relative pt-8 md:pt-16">
            <div className="px-4 max-w-lg flex flex-col items-center justify-center">
              <p className="text-[140px] mb-6 md:text-[180px] font-black text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none">
                404
              </p>
              <div className="relative mb-8">
                <div className="size-26 flex items-center justify-center  inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30">
                  <i className="fa-regular fa-face-frown text-4xl text-[#ff6a00]"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce"></div>
                <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                عفواً! الصفحة غير موجودة
              </p>
              <p className="text-neutral-400 mb-8 text-lg text-center font-tajawal">
                الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى
                المسار الصحيح.
              </p>
              <div className="flex flex-col w-full justify-center md:flex-row items-center gap-4 mb-12">
                <Link className="w-full" to="/" onClick={up}>
                  <button className="py-4 w-full cursor-pointer justify-center transition-all duration-300 hover:-translate-y-0.5 px-8 rounded-full grad text-white font-semibold flex items-center gap-2">
                    <i className="fa-solid fa-house"></i>الذهاب للرئيسية
                  </button>
                </Link>
                <Link className="w-full" to="/About" onClick={up}>
                  <button className="hover:bg-[#26180b] w-full justify-center hover:border-[#fa7516] hover:text-[#f97316] py-4 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 px-8 rounded-full bg-transparent border border-[#333333] text-white font-semibold flex items-center gap-2">
                    <i className="fa-regular fa-newspaper"></i>تصفح المقالات
                  </button>
                </Link>
              </div>

              <div className="pt-8 w-full justify-center text-center border-t border-[#262626]">
                <p className="text-sm text-neutral-500 mb-4">
                  قد تجد هذه مفيدة:
                </p>
                <div className="flex justify-center items-center gap-4">
                  <Link
                    to="/About"
                    onClick={up}
                    className="text-orange-500 text-sm leading-5 hover:text-orange-400 hover:underline font-medium"
                  >
                    المدونة
                  </Link>
                  <span className="text-neutral-600">•</span>
                  <Link
                    to="/About"
                    onClick={up}
                    className="text-orange-500 text-sm leading-5 hover:text-orange-400 hover:underline font-medium"
                  >
                    من نحن
                  </Link>
                  <span className="text-neutral-600">•</span>
                  <Link
                    to="/"
                    onClick={up}
                    className="text-orange-500 text-sm leading-5 hover:text-orange-400 hover:underline font-medium"
                  >
                    الخصوصية
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
