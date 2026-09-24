import React from "react";
import { up } from "./Navbar";

export default function Paination({
  totalcards,
  cardsperpage,
  setcurrentpage,
  currentpage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalcards / cardsperpage); i++) {
    pages.push(i);
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pages.length) {
      setcurrentpage(page);
      up("filter");
    }
  };

  return (
    <>
      <div
        className={`  ${pages.length <= 1 ? "hidden" : "flex"} justify-center items-center gap-2 mt-12`}
      >
        {/* Right Arrow (Previous page) */}
        <button
          disabled={currentpage === 1}
          onClick={() => handlePageChange(currentpage - 1)}
          className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center border border-[#262626] bg-[#161616] text-neutral-400 disabled:opacity-30 disabled:pointer-events-none hover:border-orange-500/50 hover:text-white cursor-pointer"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>

        <div className="flex items-center gap-1">
          {pages.map((page, i) => {
            return (
              <button
                onClick={() => handlePageChange(page)}
                key={i}
                className={`
                  
                    ${currentpage == page ? "min-w-11 h-11 rounded-xl text-sm font-medium transition-all border-transparent duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white" : "min-w-11 cursor-pointer h-11 rounded-xl text-sm font-medium transition-all  duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"}`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Left Arrow (Next page ) */}
        <button
          disabled={currentpage === pages.length}
          onClick={() => handlePageChange(currentpage + 1)}
          className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center border border-[#262626] bg-[#161616] text-neutral-400 disabled:opacity-30 disabled:pointer-events-none hover:border-orange-500/50 hover:text-white cursor-pointer"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </div>
      <p
        className={`   ${pages.length <= 1 ? "hidden" : ""}  ${totalcards == 0 ? "hidden" : ""}    text-center text-neutral-500 mt-4 text-sm`}
      >
        {" "}
        صفحة {currentpage} من {pages.length}
      </p>
    </>
  );
}
