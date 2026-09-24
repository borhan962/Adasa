import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Card from "../Components/Card";
import { up } from "../Components/Navbar";
import Paination from "../Components/Pagination";
import postsData from "../Data/Posts.json";

export default function Blog() {
  const blogs = postsData.posts;
  let [filteredBlogs, setfilter] = useState(structuredClone(blogs));
  const [currentpage, setcurrentpage] = useState(1);
  const [cardsperpage, setcardsperpage] = useState(6);

  const lastcardindex = currentpage * cardsperpage;
  const firstcardindex = lastcardindex - cardsperpage;

  const currentcards = filteredBlogs.slice(firstcardindex, lastcardindex);

  let [view, setview] = useState("grid");

  let [categ, setcateg] = useState("all");

  function gridview(params) {
    view = "grid";
    setview(view);
  }
  function listview(params) {
    view = "list";
    setview(view);
  }

  function search() {
    setcateg("all");
    let term = document.getElementById("search").value.trim();
    let filteer = structuredClone(blogs);
    let result = filteer.filter((blog) => {
      return blog.title.includes(term);
    });

    setfilter(result);
  }

  function all(params) {
    let allblogs = structuredClone(blogs);
    document.getElementById("search").value = "";
    up();
    setfilter(allblogs);
    setcateg("all");
  }

  function port(params) {
    let filteer = structuredClone(blogs);
    setcurrentpage(1);
    document.getElementById("search").value = "";
    up();
    let port = filteer.filter((blog) => {
      return blog.category == "بورتريه";
    });
    setfilter(port);
    setcateg("بورتريه");
  }

  function light(params) {
    let filteer = structuredClone(blogs);
    setcurrentpage(1);
    document.getElementById("search").value = "";
    up();
    let light = filteer.filter((blog) => {
      return blog.category == "إضاءة";
    });
    setfilter(light);
    setcateg("إضاءة");
  }

  function nature(params) {
    let filteer = structuredClone(blogs);
    setcurrentpage(1);
    document.getElementById("search").value = "";
    up();
    let nature = filteer.filter((blog) => {
      return blog.category == "مناظر طبيعية";
    });
    setfilter(nature);
    setcateg("مناظر طبيعية");
  }
  function tech(params) {
    let filteer = structuredClone(blogs);
    setcurrentpage(1);
    document.getElementById("search").value = "";
    up();
    let tech = filteer.filter((blog) => {
      return blog.category == "تقنيات";
    });
    setfilter(tech);
    setcateg("تقنيات");
  }

  function equip(params) {
    let filteer = structuredClone(blogs);
    setcurrentpage(1);
    document.getElementById("search").value = "";
    up();
    let equip = filteer.filter((blog) => {
      return blog.category == "معدات";
    });
    setfilter(equip);
    setcateg("معدات");
  }

  return (
    <>
      <main className=" pt-20 relative">
        <section className="relative overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"
            style={{ animationDelay: "-2s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto max-w-7xl appearance relative py-20 px-4 md:px-8 ">
            <div className="flex flex-col max-w-4xl mx-auto justify-center items-center">
              <div className="flex gap-2 bg-[#24160b] w-fit rounded-full items-center border border-[#63320e] py-2 px-4 mb-6">
                <div className="h-1 w-1   bg-[#f97316] fade rounded-full "></div>
                <i className="fa-regular fa-newspaper  text-[#f97316]"></i>
                <span className="font-medium text-sm leading-5 text-[#fa7516]">
                  مدونتنا
                </span>
              </div>

              <h1 className=" mb-6  font-bold md:leading-15 text-4xl leading-10 md:text-6xl text-center text-white">
                استكشف<span className="grad2"> مقالاتنا</span>
              </h1>

              <p className="font-normal text-center leading-7 text-[20px]  md:leading-7 md:text-[20px] text-[#a1a1a1]">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </div>
          </div>
        </section>

        <div id="blog-scroll-anchor"></div>
        <div id="blog-filter-section" className="  sticky top-20 z-40  bg-[#0a0a0a]  border-b border-[#262626]">
          <div className="py-4 lg:px-8 px-4  container mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:w-fit">
                <input
                  id="search"
                  onInput={search}
                  className="py-3 md:w-80 w-full pr-12 pl-5 TAJ leading-6 text-white bg-[#171717] border border-[#262626] rounded-xl focus:outline-none focus:border-[#fa7516] transition-all duration-300 placeHolder:text-[#737373] "
                  placeholder="ابحث في المقالات..."
                />
                <i className="absolute left-4 top-1/2 -translate-y-1/2 fa-solid fa-magnifying-glass text-[#737373]"></i>
              </div>

              <div className="flex gap-2 justify-center flex-wrap items-center">
                <button
                  onClick={all}
                  className={`py-2 cursor-pointer ${categ == "all" ? "grad text-white border-transparent" : "border-[#262626] text-[#a1a1a1] bg-[#171717]"} hover:scale-102 hover:border-[#fa75168b] transition-all duration-200  px-4 border  rounded-xl  text-sm font-medium leading-5 `}
                >
                  جميع المقالات
                </button>
                <button
                  onClick={port}
                  className={`py-2 cursor-pointer ${categ == "بورتريه" ? "grad text-white border-transparent" : "border-[#262626] text-[#a1a1a1] bg-[#171717]"} hover:scale-102 hover:border-[#fa75168b] transition-all duration-200  px-4 border  rounded-xl  text-sm font-medium leading-5 `}
                >
                  بورتريه
                </button>
                <button
                  onClick={light}
                  className={`py-2 cursor-pointer ${categ == "إضاءة" ? "grad text-white border-transparent" : "border-[#262626] text-[#a1a1a1] bg-[#171717]"} hover:scale-102 hover:border-[#fa75168b] transition-all duration-200  px-4 border  rounded-xl  text-sm font-medium leading-5 `}
                >
                  إضاءة
                </button>
                <button
                  onClick={nature}
                  className={`py-2 cursor-pointer ${categ == "مناظر طبيعية" ? "grad text-white border-transparent" : "border-[#262626] text-[#a1a1a1] bg-[#171717]"} hover:scale-102 hover:border-[#fa75168b] transition-all duration-200  px-4 border  rounded-xl  text-sm font-medium leading-5 `}
                >
                  مناظر طبيعية
                </button>
                <button
                  onClick={tech}
                  className={`py-2 cursor-pointer ${categ == "تقنيات" ? "grad text-white border-transparent" : "border-[#262626] text-[#a1a1a1] bg-[#171717]"} hover:scale-102 hover:border-[#fa75168b] transition-all duration-200  px-4 border  rounded-xl  text-sm font-medium leading-5 `}
                >
                  تقنيات
                </button>
                <button
                  onClick={equip}
                  className={`py-2 cursor-pointer ${categ == "معدات" ? "grad text-white border-transparent" : "border-[#262626] text-[#a1a1a1] bg-[#171717]"} hover:scale-102 hover:border-[#fa75168b] transition-all duration-200  px-4 border  rounded-xl  text-sm font-medium leading-5 `}
                >
                  معدات
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a]">
          <div className="py-12 px-8 container mx-auto max-w-7xl">
            <div className="flex mb-8 items-center justify-between">
              <div>
                <p className="leading-6 text-[#a1a1a1]">
                  عرض
                  <span className="font-bold text-white">
                    {" "}
                    {filteredBlogs.length}{" "}
                  </span>
                  مقالات{" "}
                  <span className={`${categ == "all" ? "hidden" : ""} `}>
                    في
                  </span>
                  <span
                    className={` ${categ == "all" ? "hidden" : ""} font-bold text-[#f97200] `}
                  >
                    {" "}
                    {categ}{" "}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className=" hidden   p-1 border md:flex border-[#262626] bg-[#161616] rounded-xl">
                  <button
                    onClick={gridview}
                    className={` ${view == "grid" ? "bg-[#ff6a00]" : ""}   size-9 hover:text-[#ff6a00] transition-all duration-200 text-[#a1a1a1] cursor-pointer p-2 rounded-lg  flex items-center justify-center`}
                  >
                    <i
                      className={`fa-solid fa-grip flex ${view == "grid" ? "text-white" : ""}`}
                    ></i>
                  </button>
                  <button
                    onClick={listview}
                    className={` ${view == "list" ? "bg-[#ff6a00]" : ""}   size-9 hover:text-[#ff6a00] transition-all duration-200 text-[#a1a1a1] cursor-pointer p-2 rounded-lg  flex items-center justify-center`}
                  >
                    <i
                      className={`fa-solid fa-list flex ${view == "list" ? "text-white" : ""}`}
                    ></i>
                  </button>
                </div>

                <p
                  onClick={all}
                  className={`text-sm cursor-pointer ${categ == "all" ? "hidden" : ""}  hover:text-[#ff6a00] transition-all duration-200 leading-5 items-center text-[#737373] flex gap-1`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="translate-y-px size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  مسح الفلاتر
                </p>
              </div>
            </div>

            <div
              className={`${filteredBlogs.length == 0 ? "hidden" : "grid"} ${view == "list" ? "md:grid-cols-1 lg:grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3 "} gap-8  `}
            >
              {currentcards.map((blog, i) => {
                return (
                  <Link
                    to={`/blog/${blog.slug}`}
                    state={{ id: blog.id }}
                    key={blog.id}
                  >
                    {" "}
                    <Card
                      index={i}
                      img={blog.image}
                      cat={blog.category}
                      read={blog.readTime}
                      date={blog.date}
                      title={blog.title}
                      excerpt={blog.excerpt}
                      writer={blog.author.avatar}
                      writername={blog.author.name}
                      role={blog.author.role}
                      view={view}
                    />
                  </Link>
                );
              })}
            </div>

            <Paination
              totalcards={filteredBlogs.length}
              currentpage={currentpage}
              cardsperpage={cardsperpage}
              setcurrentpage={setcurrentpage}
            />

            <div
              className={`  ${filteredBlogs.length == 0 ? "flex" : "hidden"} flex-col items-center justify-center py-20`}
            >
              <div className=" mb-6 size-24 rounded-full bg-[#171717] border border-[#262626] flex items-center justify-center">
                <i className="fa-regular fa-face-frown text-4xl text-[#737373]"></i>
              </div>
              <p className="text-white text-2xl font-bold leading-8 mb-3">
                لا توجد مقالات
              </p>
              <p className="leading-6 text-[#a1a1a1] mb-6">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>
              <button
                onClick={all}
                className=" hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group py-4 px-8 rounded-full bg-[#ed5c0e] font-semibold flex items-center justify-center gap-2 leading-6 text-white"
              >
                <i className=" group-hover:rotate-360 transition-all duration-300 fa-solid translate-y-px fa-arrows-rotate text-white"></i>
                إعادة تعيين الفلاتر
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
