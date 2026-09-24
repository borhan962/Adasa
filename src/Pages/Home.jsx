import React from "react";
import { Link } from "react-router-dom";
import postsData from "../Data/Posts.json";
import { up } from "../Components/Navbar";

//تغيير التاريخ 
export const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

export default function Home() {
  const blogs = postsData.posts;

  return (
    <>
      <main className="overflow-hidden pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a0a0a] flex items-center relative min-h-[90vh]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"
            style={{ animationDelay: "-2s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto max-w-7xl appearance relative">
            <div className="px-4 md:px-8 py-20 flex items-center">
              <div className="flex flex-col max-w-4xl mx-auto justify-center items-center">
                <div className="flex gap-2 bg-[#24160b] w-fit rounded-full items-center border border-[#63320e] py-2 px-4 mb-8">
                  <div className="h-1 w-1 bg-[#f97316] fade rounded-full"></div>
                  <div className="flex items-center justify-center h-2 w-2 bg-[#f97316] rounded-full">
                    <div className="animate-ping h-2 w-2 bg-[#f97316] rounded-full"></div>
                  </div>
                  <span className="font-medium text-sm leading-5 text-[#d4d4d4]">
                    مرحباً بك في عدسة
                  </span>
                </div>

                <h1 className="mb-6 font-bold md:leading-22.5 text-5xl leading-15 md:text-7xl text-center text-white">
                  اكتشف<span className="text-[#fa9d1d]"> فن</span>
                  <br /> التصوير الفوتوغرافي
                </h1>

                <p className="font-normal text-center leading-8.25 text-[20px] mb-10 md:leading-10 md:text-2xl text-[#a1a1a1]">
                  انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في{" "}
                  <br className="hidden md:block" /> التصوير.
                </p>

                <div className="flex gap-4 md:flex-row flex-col w-full md:w-fit mb-16 items-center">
                  <Link onClick={up} className="w-full md:w-fit" to={"/Blog"}>
                    <button className="px-8 transition-all w-full md:w-fit duration-300 cursor-pointer group hover:-translate-y-0.5 py-4 TAJ flex items-center justify-center grad rounded-full text-white leading-6 font-semibold">
                      استكشف المقالات
                      <i className="fa-solid ms-1.5 group-hover:-translate-x-1 transition-all duration-200 translate-y-px fa-arrow-left-long"></i>
                    </button>
                  </Link>
                  <Link onClick={up} className="w-full md:w-fit" to={"/Blog"}>
                    <button className="flex w-full md:w-fit gap-1.5 transition-all duration-300 hover:border-[#fa7014] cursor-pointer TAJ hover:text-[#fa7014] hover:bg-[#2e1a0a] items-center justify-center rounded-full border border-[#333333] text-white leading-6 font-semibold py-4 px-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        />
                      </svg>
                      اعرف المزيد
                    </button>
                  </Link>
                </div>

                <div className="grid gap-4 grid-cols-2 mx-auto md:grid-cols-4 w-full">
                  <div className="flex flex-col items-center p-4 justify-center transition-all duration-300 border hover:scale-105 bg-[#161616cc] backdrop-blur-[20px] rounded-3xl border-[#262626]">
                    <div className="mb-1">
                      <i className="fa-solid fa-newspaper fa-xl text-[#fa7014]"></i>
                    </div>
                    <p className="font-bold text-2xl leading-8 md:leading-9 md:text-3xl grad2">
                      +50
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      مقالة
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-4 justify-center transition-all duration-300 border hover:scale-105 bg-[#161616cc] backdrop-blur-[20px] rounded-3xl border-[#262626]">
                    <div className="mb-1">
                      <i className="fa-solid fa-users fa-xl text-[#fa7014]"></i>
                    </div>
                    <p className="font-bold text-2xl leading-8 md:leading-9 md:text-3xl grad2">
                      +10ألف
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      قارئ
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-4 justify-center transition-all duration-300 border hover:scale-105 bg-[#161616cc] backdrop-blur-[20px] rounded-3xl border-[#262626]">
                    <div className="mb-1">
                      <i className="fa-solid fa-folder fa-xl text-[#fa7014]"></i>
                    </div>
                    <p className="font-bold text-2xl leading-8 md:leading-9 md:text-3xl grad2">
                      4
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      تصنيفات
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-4 justify-center transition-all duration-300 border hover:scale-105 bg-[#161616cc] backdrop-blur-[20px] rounded-3xl border-[#262626]">
                    <div className="mb-1">
                      <i className="fa-solid fa-pen-nib fa-xl text-[#fa7014]"></i>
                    </div>
                    <p className="font-bold text-2xl leading-8 md:leading-9 md:text-3xl grad2">
                      6
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      كاتب
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="relative py-24 bg-[#0a0a0a]">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 h-full grad33"></div>
          <div className="relative container mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-12">
              <div className="flex flex-col">
                <div className="flex gap-2 bg-[#24160b] w-fit rounded-full items-center border border-[#63320e] py-2 px-4 mb-4">
                  <div className="h-1 w-1 bg-[#f97316] fade rounded-full"></div>
                  <div className="flex items-center justify-center h-2 w-2 bg-[#f97316] rounded-full">
                    <div className="animate-ping h-2 w-2 bg-[#f97316] rounded-full"></div>
                  </div>
                  <span className="font-medium text-sm leading-5 text-[#fa7516]">
                    مميز
                  </span>
                </div>

                <h2 className="md:leading-18.75 leading-11 text-4xl md:text-6xl font-bold text-white">
                  مقالات مختارة
                </h2>
                <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-[18px] mb-4 md:m-0 font-normal leading-7 text-[#a1a1a1]">
                    محتوى منتقى لبدء رحلة تعلمك
                  </p>
                  <Link to={"/Blog"} onClick={up}>
                    <button className="py-2.5 bg-[#f97316] TAJ px-5 cursor-pointer transition-all duration-300 group hover:-translate-y-0.5 rounded-xl leading-6 font-medium text-white flex items-center gap-1">
                      عرض الكل
                      <i className="group-hover:-translate-x-0.5 transition-all duration-300 translate-y-0.5 fa-solid fa-angle-left"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Post 0 */}
            <Link
              onClick={() => {
                up();
              }}
              to={`/blog/${blogs[0].slug}`}
              state={{ id: blogs[0].id }}
            >
              <div className="w-full border-[1.5px] md:flex-row flex-col cursor-pointer group overflow-hidden hover:border-[#5c2e0f] transition-all duration-400 mb-8 border-[#262626] rounded-3xl flex">
                <div className="relative md:h-100 h-72 overflow-hidden md:w-1/2">
                  <img
                    src={blogs[0].image}
                    alt={blogs[0].title}
                    className="w-full transition-all duration-700 group-hover:scale-110 ease-out md:rounded-r-3xl object-cover h-full"
                  />
                  <span className="absolute top-4 right-4 py-1.5 px-3 font-semibold text-[12px] leading-4 grad4 flex items-center text-white gap-1.5 rounded-full">
                    <i className="fa-solid fa-star fa-sm translate-y-px"></i>
                    مميز
                  </span>
                  <div className="absolute bottom-0 w-full h-full grad5 right-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                </div>

                <div className="md:p-10 p-8 md:w-1/2 flex flex-col md:rounded-l-3xl bg-[#161616]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#2e1e14] border border-[#592d10] text-[#ff6900] text-[12px] leading-4 rounded-full font-semibold p-1 px-3">
                        {blogs[0].category}
                      </span>
                      <div className="flex gap-1 text-sm font-normal leading-5 text-[#737373] items-center">
                        <i className="fa-regular fa-clock fa-sm translate-y-px"></i>
                        {blogs[0].readTime}
                      </div>
                    </div>

                    <h2 className="font-bold md:text-3xl text-2xl leading-7.5 group-hover:text-[#f97200] transition-all duration-400 md:leading-9.5 text-white mb-4">
                      {blogs[0].title}
                    </h2>
                    <p className="leading-6.5 text-[#a1a1a1] mb-6">
                      {blogs[0].excerpt}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative size-12">
                        <img
                          src={blogs[0].author.avatar}
                          alt={blogs[0].author.name}
                          className="object-cover ring-2 shadow-md ring-[#262626] rounded-full w-full h-full"
                        />
                        <div className="size-3 absolute -bottom-0.5 left-0 rounded-full border-2 border-[#161616] bg-[#ff6a00]"></div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold leading-5 text-white">
                          {blogs[0].author.name}
                        </p>
                        <p className="text-[12px] leading-4 font-normal text-[#737373]">
                          {formatDate(blogs[0].date)}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm leading-5 font-semibold text-[#f97200] gap-2 flex">
                      اقرأ المقال
                      <i className="fa-solid group-hover:-translate-x-1 transition-all duration-300 translate-y-1 fa-arrow-left-long"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Post 1 */}
            <Link
              onClick={() => {
                up();
              }}
              to={`/blog/${blogs[1].slug}`}
              state={{ id: blogs[1].id }}
            >
              <div className="w-full border-[1.5px] md:flex-row flex-col cursor-pointer group overflow-hidden hover:border-[#5c2e0f] transition-all duration-400 mb-8 border-[#262626] rounded-3xl flex">
                <div className="relative md:h-100 h-72 overflow-hidden md:w-1/2">
                  <img
                    src={blogs[1].image}
                    alt={blogs[1].title}
                    className="w-full transition-all duration-700 group-hover:scale-110 ease-out md:rounded-r-3xl object-cover h-full"
                  />
                  <span className="absolute top-4 right-4 py-1.5 px-3 font-semibold text-[12px] leading-4 grad4 flex items-center text-white gap-1.5 rounded-full">
                    <i className="fa-solid fa-star fa-sm translate-y-px"></i>
                    مميز
                  </span>
                  <div className="absolute bottom-0 w-full h-full grad5 right-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                </div>

                <div className="md:p-10 p-8 md:w-1/2 flex flex-col md:rounded-l-3xl bg-[#161616]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#2e1e14] border border-[#592d10] text-[#ff6900] text-[12px] leading-4 rounded-full font-semibold p-1 px-3">
                        {blogs[1].category}
                      </span>
                      <div className="flex gap-1 text-sm font-normal leading-5 text-[#737373] items-center">
                        <i className="fa-regular fa-clock fa-sm translate-y-px"></i>
                        {blogs[1].readTime}
                      </div>
                    </div>

                    <h2 className="font-bold md:text-3xl text-2xl leading-7.5 group-hover:text-[#f97200] transition-all duration-400 md:leading-9.5 text-white mb-4">
                      {blogs[1].title}
                    </h2>
                    <p className="leading-6.5 text-[#a1a1a1] mb-6">
                      {blogs[1].excerpt}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative size-12">
                        <img
                          src={blogs[1].author.avatar}
                          alt={blogs[1].author.name}
                          className="object-cover ring-2 shadow-md ring-[#262626] rounded-full w-full h-full"
                        />
                        <div className="size-3 absolute -bottom-0.5 left-0 rounded-full border-2 border-[#161616] bg-[#ff6a00]"></div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold leading-5 text-white">
                          {blogs[1].author.name}
                        </p>
                        <p className="text-[12px] leading-4 font-normal text-[#737373]">
                          {formatDate(blogs[1].date)}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm leading-5 font-semibold text-[#f97200] gap-2 flex">
                      اقرأ المقال
                      <i className="fa-solid group-hover:-translate-x-1 transition-all duration-300 translate-y-1 fa-arrow-left-long"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Post 2 */}
            <Link
              onClick={() => {
                up();
              }}
              to={`/blog/${blogs[2].slug}`}
              state={{ id: blogs[2].id }}
            >
              <div className="w-full border-[1.5px] md:flex-row flex-col cursor-pointer group overflow-hidden hover:border-[#5c2e0f] transition-all duration-400 border-[#262626] rounded-3xl flex">
                <div className="relative md:h-100 h-72 overflow-hidden md:w-1/2">
                  <img
                    src={blogs[2].image}
                    alt={blogs[2].title}
                    className="w-full transition-all duration-700 group-hover:scale-110 ease-out md:rounded-r-3xl object-cover h-full"
                  />
                  <span className="absolute top-4 right-4 py-1.5 px-3 font-semibold text-[12px] leading-4 grad4 flex items-center text-white gap-1.5 rounded-full">
                    <i className="fa-solid fa-star fa-sm translate-y-px"></i>
                    مميز
                  </span>
                  <div className="absolute bottom-0 w-full h-full grad5 right-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                </div>

                <div className="md:p-10 p-8 md:w-1/2 flex flex-col md:rounded-l-3xl bg-[#161616]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#2e1e14] border border-[#592d10] text-[#ff6900] text-[12px] leading-4 rounded-full font-semibold p-1 px-3">
                        {blogs[2].category}
                      </span>
                      <div className="flex gap-1 text-sm font-normal leading-5 text-[#737373] items-center">
                        <i className="fa-regular fa-clock fa-sm translate-y-px"></i>
                        {blogs[2].readTime}
                      </div>
                    </div>

                    <h2 className="font-bold md:text-3xl text-2xl leading-7.5 group-hover:text-[#f97200] transition-all duration-400 md:leading-9.5 text-white mb-4">
                      {blogs[2].title}
                    </h2>
                    <p className="leading-6.5 text-[#a1a1a1] mb-6">
                      {blogs[2].excerpt}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative size-12">
                        <img
                          src={blogs[2].author.avatar}
                          alt={blogs[2].author.name}
                          className="object-cover ring-2 shadow-md ring-[#262626] rounded-full w-full h-full"
                        />
                        <div className="size-3 absolute -bottom-0.5 left-0 rounded-full border-2 border-[#161616] bg-[#ff6a00]"></div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold leading-5 text-white">
                          {blogs[2].author.name}
                        </p>
                        <p className="text-[12px] leading-4 font-normal text-[#737373]">
                          {formatDate(blogs[2].date)}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm leading-5 font-semibold text-[#f97200] gap-2 flex">
                      اقرأ المقال
                      <i className="fa-solid group-hover:-translate-x-1 transition-all duration-300 translate-y-1 fa-arrow-left-long"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 border-y bg-[#111111] border-[#262626]">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-12 flex flex-col items-center">
              <div className="flex gap-2 bg-[#24160b] w-fit rounded-full items-center border border-[#63320e] py-2 px-4 mb-4">
                <div className="h-1 w-1 bg-[#f97316] fade rounded-full"></div>
                <div className="flex items-center justify-center h-2 w-2 bg-[#f97316] rounded-full">
                  <div className="animate-ping h-2 w-2 bg-[#f97316] rounded-full"></div>
                </div>
                <span className="font-medium text-sm leading-5 text-[#fa7516]">
                  التصنيفات
                </span>
              </div>

              <h2 className="md:leading-18.75 text-center font-bold text-4xl leading-11 md:text-6xl text-white">
                استكشف حسب الموضوع
              </h2>
              <p className="leading-7 text-[18px] text-[#a1a1a1] mt-4">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4 grid-cols-2">
              <Link to="/Blog" onClick={up}>
                <div className="p-6 relative bg-[#171717] group transition-all hover:scale-103 overflow-hidden duration-300 hover:border-[#592d10] cursor-pointer rounded-xl border border-[#262626]">
                  <div className="absolute top-0 right-0 left-0 bottom-0 group-hover:opacity-100 transition-all duration-300 gradx opacity-0 w-full h-full"></div>
                  <div className="relative flex flex-col justify-center">
                    <div className="mb-4 size-12 flex justify-center items-center rounded-xl border border-[#592d10] bg-[#2e1e14]">
                      <i className="fa-solid fa-sun fa-lg text-[#ff6a00]"></i>
                    </div>
                    <p className="mb-1 font-bold text-[18px] leading-7 text-white">
                      إضاءة
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      3 مقالة
                    </p>
                  </div>
                  <div className="size-7 absolute left-10 top-12 group-hover:opacity-100 transition-all duration-300 opacity-0 hidden md:items-center md:flex md:justify-center rounded-full border border-[#592d10] bg-[#2e1e14]">
                    <i className="fa-solid fa-angle-left transition-all duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0 text-[#ff6a00]"></i>
                  </div>
                </div>
              </Link>

              <Link to="/Blog" onClick={up}>
                <div className="p-6 relative bg-[#171717] group transition-all hover:scale-103 overflow-hidden duration-300 hover:border-[#592d10] cursor-pointer rounded-xl border border-[#262626]">
                  <div className="absolute top-0 right-0 left-0 bottom-0 group-hover:opacity-100 transition-all duration-300 gradx opacity-0 w-full h-full"></div>
                  <div className="relative flex flex-col justify-center">
                    <div className="mb-4 size-12 flex justify-center items-center rounded-xl border border-[#592d10] bg-[#2e1e14]">
                      <i className="fa-solid fa-user fa-lg text-[#ff6a00]"></i>
                    </div>
                    <p className="mb-1 font-bold text-[18px] leading-7 text-white">
                      بورتريه
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      3 مقالة
                    </p>
                  </div>
                  <div className="size-7 absolute left-10 top-12 group-hover:opacity-100 transition-all duration-300 opacity-0 hidden md:items-center md:flex md:justify-center rounded-full border border-[#592d10] bg-[#2e1e14]">
                    <i className="fa-solid fa-angle-left transition-all duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0 text-[#ff6a00]"></i>
                  </div>
                </div>
              </Link>

              <Link to="/Blog" onClick={up}>
                <div className="p-6 relative bg-[#171717] group transition-all hover:scale-103 overflow-hidden duration-300 hover:border-[#592d10] cursor-pointer rounded-xl border border-[#262626]">
                  <div className="absolute top-0 right-0 left-0 bottom-0 group-hover:opacity-100 transition-all duration-300 gradx opacity-0 w-full h-full"></div>
                  <div className="relative flex flex-col justify-center">
                    <div className="mb-4 size-12 flex justify-center items-center rounded-xl border border-[#592d10] bg-[#2e1e14]">
                      <i className="fa-solid fa-mountain-sun fa-lg text-[#ff6a00]"></i>
                    </div>
                    <p className="mb-1 font-bold text-[18px] leading-7 text-white">
                      مناظر طبيعية
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      2 مقالة
                    </p>
                  </div>
                  <div className="size-7 absolute left-10 top-12 group-hover:opacity-100 transition-all duration-300 opacity-0 hidden md:items-center md:flex md:justify-center rounded-full border border-[#592d10] bg-[#2e1e14]">
                    <i className="fa-solid fa-angle-left transition-all duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0 text-[#ff6a00]"></i>
                  </div>
                </div>
              </Link>

              <Link to="/Blog" onClick={up}>
                <div className="p-6 relative bg-[#171717] group transition-all hover:scale-103 overflow-hidden duration-300 hover:border-[#592d10] cursor-pointer rounded-xl border border-[#262626]">
                  <div className="absolute top-0 right-0 left-0 bottom-0 group-hover:opacity-100 transition-all duration-300 gradx opacity-0 w-full h-full"></div>
                  <div className="relative flex flex-col justify-center">
                    <div className="mb-4 size-12 flex justify-center items-center rounded-xl border border-[#592d10] bg-[#2e1e14]">
                      <i className="fa-solid fa-sliders fa-lg text-[#ff6a00]"></i>
                    </div>
                    <p className="mb-1 font-bold text-[18px] leading-7 text-white">
                      تقنيات
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      5 مقالة
                    </p>
                  </div>
                  <div className="size-7 absolute left-10 top-12 group-hover:opacity-100 transition-all duration-300 opacity-0 hidden md:items-center md:flex md:justify-center rounded-full border border-[#592d10] bg-[#2e1e14]">
                    <i className="fa-solid fa-angle-left transition-all duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0 text-[#ff6a00]"></i>
                  </div>
                </div>
              </Link>

              <Link to="/Blog" onClick={up}>
                <div className="p-6 relative bg-[#171717] group transition-all hover:scale-103 overflow-hidden duration-300 hover:border-[#592d10] cursor-pointer rounded-xl border border-[#262626]">
                  <div className="absolute top-0 right-0 left-0 bottom-0 group-hover:opacity-100 transition-all duration-300 gradx opacity-0 w-full h-full"></div>
                  <div className="relative flex flex-col justify-center">
                    <div className="mb-4 size-12 flex justify-center items-center rounded-xl border border-[#592d10] bg-[#2e1e14]">
                      <i className="fa-solid fa-toolbox fa-lg text-[#ff6a00]"></i>
                    </div>
                    <p className="mb-1 font-bold text-[18px] leading-7 text-white">
                      معدات
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      3 مقالة
                    </p>
                  </div>
                  <div className="size-7 absolute left-10 top-12 group-hover:opacity-100 transition-all duration-300 opacity-0 hidden md:items-center md:flex md:justify-center rounded-full border border-[#592d10] bg-[#2e1e14]">
                    <i className="fa-solid fa-angle-left transition-all duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0 text-[#ff6a00]"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="relative py-24 bg-[#0a0a0a]">
          <div className="absolute left-0 top-0 bottom-0 w-1/2 md:w-1/3 h-full grad33l"></div>
          <div className="container mx-auto max-w-7xl relative px-4 md:px-8">
            <div className="mb-12">
              <div className="flex flex-col">
                <div className="flex gap-2 bg-[#24160b] w-fit rounded-full items-center border border-[#63320e] py-2 px-4 mb-4">
                  <div className="h-1 w-1 bg-[#f97316] fade rounded-full"></div>
                  <div className="flex items-center justify-center h-2 w-2 bg-[#f97316] rounded-full">
                    <div className="animate-ping h-2 w-2 bg-[#f97316] rounded-full"></div>
                  </div>
                  <span className="font-medium text-sm leading-5 text-[#fa7516]">
                    الأحدث
                  </span>
                </div>

                <h2 className="md:leading-18.75 leading-11 text-4xl md:text-6xl font-bold text-white">
                  أحدث المقالات
                </h2>
                <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-[18px] mb-4 md:m-0 font-normal leading-7 text-[#a1a1a1]">
                    محتوى جديد طازج من المطبعة
                  </p>
                  <Link to={"/Blog"} onClick={up}>
                    <button className="TAJ cursor-pointer transition-all duration-300 group hover:text-[#ff8a05] leading-6 font-semibold text-[#ff6a00] flex items-center gap-2">
                      عرض جميع المقالات
                      <i className="group-hover:-translate-x-0.5 transition-all duration-300 translate-y-px fa-solid fa-arrow-left-long"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3 grid-cols-1">
              {/* Post 3 */}
              <Link
                onClick={() => {
                  up();
                }}
                to={`/blog/${blogs[3].slug}`}
                state={{ id: blogs[3].id }}
              >
                <div className="flex border hover:-translate-y-1 group transition-all duration-400 hover:border-[#333333] cursor-pointer rounded-3xl overflow-hidden border-[#262626] flex-col h-full">
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src={blogs[3].image}
                      alt={blogs[3].title}
                      className="object-cover transition-all duration-700 group-hover:scale-110 ease-out h-full w-full"
                    />
                    <span className="text-[12px] bg-[#0f0f0f] border border-[#333333] absolute rounded-xl top-4 right-4 py-1 px-3 leading-4 font-semibold text-white">
                      {blogs[3].category}
                    </span>
                    <div className="absolute bottom-0 w-full h-full grad5 right-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                  </div>

                  <div className="p-6 bg-[#171717] flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-3 mb-3 items-center">
                        <span className="text-sm leading-5 flex items-center gap-1 font-normal text-[#737373]">
                          <i className="fa-regular fa-clock fa-sm translate-y-px"></i>
                          {blogs[3].readTime}
                        </span>
                        <div className="size-1.5 rounded-full bg-[#525252]"></div>
                        <span className="text-sm leading-5 font-normal text-[#737373]">
                          {formatDate(blogs[3].date)}
                        </span>
                      </div>

                      <h2 className="mb-3 group-hover:text-[#f97200] text-[20px] leading-6 font-bold text-white transition-all duration-400">
                        {blogs[3].title}
                      </h2>
                      <p className="mb-5 font-normal text-sm leading-6 text-[#a1a1a1]">
                        {blogs[3].excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#262626] flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative size-9">
                          <img
                            src={blogs[3].author.avatar}
                            alt={blogs[3].author.name}
                            className="object-cover ring-2 shadow-md ring-[#262626] rounded-full w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-5 text-white">
                            {blogs[3].author.name}
                          </p>
                          <p className="text-[12px] leading-4 font-normal text-[#737373]">
                            {formatDate(blogs[3].date)}
                          </p>
                        </div>
                      </div>

                      <div className="size-7 group-hover:bg-[#ff6900] group-hover:border-transparent transition-all duration-300 items-center flex justify-center rounded-full border border-[#592d10] bg-[#2e1e14]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="transition-all duration-300 group-hover:text-white text-[#ff6a00] size-4"
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
              </Link>

              {/* Post 4 */}
              <Link
                onClick={() => {
                  up();
                }}
                to={`/blog/${blogs[4].slug}`}
                state={{ id: blogs[4].id }}
              >
                <div className="flex border hover:-translate-y-1 group transition-all duration-400 hover:border-[#333333] cursor-pointer rounded-3xl overflow-hidden border-[#262626] flex-col h-full">
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src={blogs[4].image}
                      alt={blogs[4].title}
                      className="object-cover transition-all duration-700 group-hover:scale-110 ease-out h-full w-full"
                    />
                    <span className="text-[12px] bg-[#0f0f0f] border border-[#333333] absolute rounded-xl top-4 right-4 py-1 px-3 leading-4 font-semibold text-white">
                      {blogs[4].category}
                    </span>
                    <div className="absolute bottom-0 w-full h-full grad5 right-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                  </div>

                  <div className="p-6 bg-[#171717] flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-3 mb-3 items-center">
                        <span className="text-sm leading-5 flex items-center gap-1 font-normal text-[#737373]">
                          <i className="fa-regular fa-clock fa-sm translate-y-px"></i>
                          {blogs[4].readTime}
                        </span>
                        <div className="size-1.5 rounded-full bg-[#525252]"></div>
                        <span className="text-sm leading-5 font-normal text-[#737373]">
                          {formatDate(blogs[4].date)}
                        </span>
                      </div>

                      <h2 className="mb-3 group-hover:text-[#f97200] text-[20px] leading-6 font-bold text-white transition-all duration-400">
                        {blogs[4].title}
                      </h2>
                      <p className="mb-5 font-normal text-sm leading-6 text-[#a1a1a1]">
                        {blogs[4].excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#262626] flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative size-9">
                          <img
                            src={blogs[4].author.avatar}
                            alt={blogs[4].author.name}
                            className="object-cover ring-2 shadow-md ring-[#262626] rounded-full w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-5 text-white">
                            {blogs[4].author.name}
                          </p>
                          <p className="text-[12px] leading-4 font-normal text-[#737373]">
                            {formatDate(blogs[4].date)}
                          </p>
                        </div>
                      </div>

                      <div className="size-7 group-hover:bg-[#ff6900] group-hover:border-transparent transition-all duration-300 items-center flex justify-center rounded-full border border-[#592d10] bg-[#2e1e14]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="transition-all duration-300 group-hover:text-white text-[#ff6a00] size-4"
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
              </Link>

              {/* Post 5 */}
              <Link
                onClick={() => {
                  up();
                }}
                to={`/blog/${blogs[5].slug}`}
                state={{ id: blogs[5].id }}
              >
                <div className="flex border hover:-translate-y-1 group transition-all duration-400 hover:border-[#333333] cursor-pointer rounded-3xl overflow-hidden border-[#262626] flex-col h-full">
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src={blogs[5].image}
                      alt={blogs[5].title}
                      className="object-cover transition-all duration-700 group-hover:scale-110 ease-out h-full w-full"
                    />
                    <span className="text-[12px] bg-[#0f0f0f] border border-[#333333] absolute rounded-xl top-4 right-4 py-1 px-3 leading-4 font-semibold text-white">
                      {blogs[5].category}
                    </span>
                    <div className="absolute bottom-0 w-full h-full grad5 right-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                  </div>

                  <div className="p-6 bg-[#171717] flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-3 mb-3 items-center">
                        <span className="text-sm leading-5 flex items-center gap-1 font-normal text-[#737373]">
                          <i className="fa-regular fa-clock fa-sm translate-y-px"></i>
                          {blogs[5].readTime}
                        </span>
                        <div className="size-1.5 rounded-full bg-[#525252]"></div>
                        <span className="text-sm leading-5 font-normal text-[#737373]">
                          {formatDate(blogs[5].date)}
                        </span>
                      </div>

                      <h2 className="mb-3 group-hover:text-[#f97200] text-[20px] leading-6 font-bold text-white transition-all duration-400">
                        {blogs[5].title}
                      </h2>
                      <p className="mb-5 font-normal text-sm leading-6 text-[#a1a1a1]">
                        {blogs[5].excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#262626] flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative size-9">
                          <img
                            src={blogs[5].author.avatar}
                            alt={blogs[5].author.name}
                            className="object-cover ring-2 shadow-md ring-[#262626] rounded-full w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-5 text-white">
                            {blogs[5].author.name}
                          </p>
                          <p className="text-[12px] leading-4 font-normal text-[#737373]">
                            {formatDate(blogs[5].date)}
                          </p>
                        </div>
                      </div>

                      <div className="size-7 group-hover:bg-[#ff6900] group-hover:border-transparent transition-all duration-300 items-center flex justify-center rounded-full border border-[#592d10] bg-[#2e1e14]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="transition-all duration-300 group-hover:text-white text-[#ff6a00] size-4"
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
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 relative bg-[#0a0a0a]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto max-w-7xl relative px-4 md:px-8">
            <div className="md:p-16 p-8 bg-[#171717] rounded-3xl border max-w-4xl mx-auto border-[#262626]">
              <div className="flex items-center mb-6 justify-center">
                <div className="size-16 rounded-2xl bg-[#fc5800] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="md:text-4xl mb-4 text-3xl text-center md:leading-10 leading-9 font-bold text-white">
                اشترك في <span className="grad2">نشرتنا الإخبارية</span>{" "}
              </h2>

              <p className="text-[18px] mb-8 text-center font-normal leading-7 text-[#a1a1a1]">
                احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                الإلكتروني
              </p>

              <div className="mb-6 flex items-center justify-center flex-col md:flex-row gap-3">
                <input
                  className="py-4 px-5 md:w-[50%] w-full TAJ rounded-xl border transition-all duration-100 focus:border-[#873905] focus:outline-none flex items-center placeholder:-translate-y-px placeholder:text-[#737373] leading-6 text-white border-[#262626] bg-[#0a0a0a]"
                  placeholder="أدخل بريدك الاكتروني"
                />
                <a className="w-full md:w-fit" href="#">
                  <button className="transition-all duration-300 hover:-translate-y-1 py-4 w-full md:w-fit cursor-pointer text-white font-semibold grad px-8 rounded-xl">
                    اشترك الآن
                  </button>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <div className="flex">
                  <img
                    src={blogs[0].author.avatar}
                    alt=""
                    className="size-8 border border-[#171717] rounded-full object-cover"
                  />
                  <img
                    src={blogs[1].author.avatar}
                    alt=""
                    className="size-8 border-2 translate-x-1.5 border-[#171717] rounded-full object-cover"
                  />
                  <img
                    src={blogs[2].author.avatar}
                    alt=""
                    className="size-8 border-2 translate-x-3 border-[#171717] rounded-full object-cover"
                  />
                </div>

                <p className="text-sm leading-5 text-[#737373]">
                  انضم لـ
                  <span className="text-white font-medium"> +10.000</span> مصور
                </p>
                <div className="size-0.5 translate-y-0.5 hidden md:block rounded-full bg-[#525252]"></div>
                <p className="text-sm leading-5 text-[#737373]">بدون إزعاج</p>
                <div className="size-0.5 translate-y-0.5 hidden md:block rounded-full bg-[#525252]"></div>
                <p className="text-sm leading-5 text-[#737373]">
                  إلغاء الاشتراك في أي وقت
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
