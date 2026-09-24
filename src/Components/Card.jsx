import React from "react";
import { up } from "./Navbar";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

export default function Card({
  index,
  view,
  img,
  cat,
  read,
  date,
  title,
  excerpt,
  writer,
  writername,
  role,
}) {
  return (
    <>
      <div
        onClick={up}
        className={`flex appearance border hover:-translate-y-1 group transition-all duration-400 hover:border-[#333333] cursor-pointer rounded-3xl overflow-hidden border-[#262626] ${view == "list" ? "md:flex-row flex-col" : "flex-col"}`}
      >
        <div
          className={` ${view == "list" ? "w-full md:w-72 lg:w-80 h-52 md:h-auto" : "h-52"} relative  overflow-hidden`}
        >
          <img
            src={img}
            className="object-cover transition-all duration-700 group-hover:scale-110 ease-out h-full w-full"
            alt={title}
          />
          <span className="text-[12px] bg-[#0f0f0f] border border-[#333333] absolute rounded-xl top-4 right-4 py-1 px-3 leading-4 font-semibold text-white">
            {cat}{" "}
          </span>
          <div className="absolute bottom-0 w-full h-full grad5 right-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
        </div>

        <div
          className={`p-6 ${view == "list" ? "w-full" : "md:h-65"}  bg-[#171717]`}
        >
          <div className="flex gap-3 mb-3 items-center">
            <span className="text-sm leading-5 flex items-center gap-1 font-normal text-[#737373] ">
              <i className="fa-regular fa-clock fa-sm translate-y-px"></i>
              {read}
            </span>
            <div className="size-1.5 rounded-full bg-[#525252]"></div>
            <span className="text-sm leading-5 font-normal text-[#737373] ">
              {formatDate(date)}
            </span>
          </div>

          <h2 className=" mb-3 group-hover:text-[#f97200] text-[20px] leading-6 font-bold text-white transition-all duration-400">
            {title}
          </h2>
          <p className="mb-5 font-normal text-sm leading-6 text-[#a1a1a1]">
            {excerpt}
          </p>

          <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative  size-9">
                <img
                  src={writer}
                  className="object-cover ring-2 shadow-md ring-[#262626]  rounded-full w-full h-full"
                  alt={writername}
                />
              </div>
              <div>
                <p className="text-sm font-medium leading-5 text-white">
                  {writername}
                </p>
                <p className="text-[12px] leading-4 font-normal text-[#737373] ">
                  {role}
                </p>
              </div>
            </div>

            <div className="size-7    group-hover:bg-[#ff6900] group-hover:border-transparent    transition-all duration-300      items-center flex justify-center rounded-full border border-[#592d10] bg-[#2e1e14]  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="transition-all duration-300 group-hover:text-white  text-[#ff6a00] size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
