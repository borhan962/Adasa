import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { up } from "../Components/Navbar";
import postsData from "../Data/Posts.json";

// تغيير التاريخ
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

export default function Blogdetails() {
  const blogs = postsData.posts;

  function generateNumbers() {
    const numbers = new Set();

    while (numbers.size < 3) {
      numbers.add(Math.floor(Math.random() * blogs.length));
    }

    return [...numbers];
  }

  let [nums, setnums] = useState(generateNumbers());

  const { slug } = useParams();

  // Find the using slug from URL
  const rawBlog = blogs.find((item) => item.slug === slug);

  // Parse (intro string and content array of sections)
  const blog = React.useMemo(() => {
    if (!rawBlog) return null;
    
    const contentStr = rawBlog.content || "";
    const headerIndex = contentStr.indexOf("##");
    let intro = "";
    let body = contentStr;
    
    if (headerIndex !== -1) {
      intro = contentStr.substring(0, headerIndex).trim();
      body = contentStr.substring(headerIndex);
    } else {
      intro = contentStr.trim();
      body = "";
    }
    
    const parts = body.split(/(?=## )/);
    const contentSections = [];
    parts.forEach((part) => {
      if (part.startsWith("## ")) {
        const lines = part.split("\n");
        const title = lines[0].replace("## ", "").trim();
        const text = lines.slice(1).join("\n").trim();
        if (title) {
          contentSections.push({ title, text });
        }
      }
    });
    
    return {
      ...rawBlog,
      intro: intro,
      content: contentSections
    };
  }, [rawBlog]);

  useEffect(() => {
    generateNumbers();
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        جاري التحميل...
      </div>
    );
  }

  return (
    <>
      <main className=" pt-20 ">
        <div className="min-h-screen bg-[#0a0a0a]">
          <div className="relative h-[60vh] min-h-125 overflow-hidden">
            <img
              className="object-cover w-full h-full inset-0 absolute"
              alt={blog.title}
              src={blog.image}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent"></div>

            <div className="py-2 absolute top-8 w-fit right-8 left-8 px-4 rounded-full bg-black/30 backdrop-blur-md   flex items-center gap-2">
              <Link to={"/"}>
                <i className="fa-solid translate-y-px fa-house text-[#cccdcf]"></i>
              </Link>
              <i className="fa-solid fa-angle-left translate-y-px  text-[#888c8f]"></i>
              <Link
                to={"/Blog"}
                className="text-white/70 hover:text-white text-sm  transition-all duration-200"
              >
                المدونة
              </Link>
              <i className="fa-solid fa-angle-left translate-y-px  text-[#888c8f]"></i>
              <span className="text-orange-400 font-medium -translate-y-px  truncate text-sm max-w-50">
                {blog.category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Link
                    to={"/Blog"}
                    className="py-2 px-4 transition-all duration-200  text-white rounded-full bg-[#ff6a00] text-sm font-bold leading-5 hover:bg-orange-600"
                  >
                    {blog.category}
                  </Link>
                  <span className="flex items-center text-sm leading-5 gap-2 text-[#ffffffb3]">
                    <i className="fa-regular fa-calendar text-[#cfd2d4]"></i>
                    {formatDate(blog.date)}
                  </span>
                  <span className="flex items-center text-sm leading-5 gap-2 text-[#ffffffb3]">
                    <i className="fa-regular fa-clock text-[#cfd2d4]"></i>
                    {blog.readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                  {blog.title}
                </h2>
                <div className="p-4 gap-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit flex items-center">
                  <div className="size-14">
                    <img
                      src={blog.author.avatar}
                      className="object-cover ring-2 ring-orange-500/50 rounded-full w-full h-full  "
                      alt={blog.author.name}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">{blog.author.name}</p>
                    <p className="text-sm text-white/60">{blog.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 md:px-8 py-12">
            <div className="flex flex-col items-start md:flex-row gap-12 ">
              <div
                className="order-2 md:order-1 md:w-[65%] lg:w-[75%] w-full "
                id="right"
              >
                <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                  <p className="text-lg text-neutral-200 leading-relaxed italic">
                    {" "}
                    {blog.excerpt}
                  </p>
                </div>

                <div>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    {blog.intro}
                  </p>
                  {blog.content.map((content, i) => {
                    return (
                      <div key={i}>
                        <div
                          id={`section${i}`}
                          className="flex items-center gap-4 mb-6 mt-14"
                        >
                          <div className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                            <i className="fa-solid fa-xl fa-camera text-[#ff6a00]"></i>
                          </div>
                          <p className=" text-2xl md:text-3xl font-bold text-white">
                            {content.title}
                          </p>
                        </div>
                        <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                          {content.text}
                        </p>
                      </div>
                    );
                  })}

                  <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-tag text-[#ff6a00]"></i>
                      </div>
                      <p className="font-bold text-white">الوسوم</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {blog.tags.map((tag, i) => {
                        return (
                          <div
                            key={i}
                            className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border flex items-center border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer"
                          >
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-share-nodes text-[#ff6a00]"></i>
                      </div>
                      <p className="font-bold text-white">شارك المقال</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-brands fa-x-twitter "></i>
                      </div>
                      <div className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-brands fa-linkedin "></i>
                      </div>
                      <div className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-brands fa-whatsapp "></i>
                      </div>
                      <div className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-solid fa-link"></i>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626] flex flex-col md:flex-row justify-center md:justify-start  items-center gap-6 ">
                    <div className="w-24 h-24">
                      <img
                        src={blog.author.avatar}
                        className="rounded-2xl w-full h-full object-cover ring-4 ring-orange-500/20"
                        alt=""
                      />
                    </div>

                    <div>
                      <p className=" text-center md:text-start  text-xs text-orange-500 font-semibold uppercase tracking-wider">
                        كاتب المقال{" "}
                      </p>
                      <p className=" text-center md:text-start  text-xl font-bold text-white mt-1">
                        {blog.author.name}
                      </p>
                      <p className=" text-center md:text-start  text-neutral-500 text-sm mb-3">
                        {blog.author.role}
                      </p>
                      <p className=" text-center md:text-start  text-neutral-400 text-sm leading-relaxed">
                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                        الفوتوغرافي.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="left"
                className="lg:w-[25%] md:w-[35%] order-1 md:order-2 w-full lg:sticky lg:top-24 "
              >
                <div className="p-6 bg-[#111111] mb-6 rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-list text-[#ff6a00]"></i>
                    </div>
                    <p className="font-bold text-white">محتويات المقال</p>
                  </div>

                  <div className="flex flex-col gap-1.5 align-right text-right">
                    {blog.content.map((content, i) => {
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            document
                              .getElementById(`section${i}`)
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                          }}
                          className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group text-right"
                        >
                          <div className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                            {i + 1}
                          </div>
                          <p className="text-sm">{content.title}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-6 mb-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-stretch h-full justify-center gap-4">
                    <div className="flex-col w-full justify-center p-4 bg-[#0a0a0a] rounded-xl">
                      <div className=" flex mb-2 items-center justify-center">
                        <i className="fa-regular fa-clock text-orange-500"></i>
                      </div>
                      <p className="text-white text-center font-bold">
                        {blog.readTime}
                      </p>
                      <p className="text-neutral-500 text-center text-xs">
                        وقت القرأة
                      </p>
                    </div>

                    <div className="flex-col w-full justify-center p-4 bg-[#0a0a0a] rounded-xl">
                      <div className=" flex items-center mb-2  justify-center">
                        <i className="fa-regular fa-calendar text-orange-500"></i>
                      </div>
                      <p className="text-white text-center font-bold">
                        {formatDate(blog.date)}
                      </p>
                      <p className="text-neutral-500 text-center text-xs">
                        وقت النشر
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-linear-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-envelope text-orange-500 fa-lg"></i>
                  </div>
                  <p className="font-bold text-center text-white mb-2">
                    لا تفوّت جديدنا
                  </p>
                  <p className="text-neutral-400 text-center text-sm mb-4">
                    اشترك للحصول على أحدث المقالات
                  </p>
                  <Link onClick={up} to={"/Blog"}>
                    <button className=" cursor-pointer block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center">
                      تصفح المزيد
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-[#262626]">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-images text-orange-500"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">
                      مقالات قد تعجبك
                    </p>
                    <p className="text-neutral-500 text-sm">
                      استكشف المزيد من المحتوى المميز
                    </p>
                  </div>
                </div>

                <Link
                  onClick={up}
                  to={"/Blog"}
                  className="group hidden md:flex leading-5 font-semibold text-[#f97200] gap-2"
                >
                  {" "}
                  عرض الكل
                  <i className="fa-solid group-hover:-translate-x-1 transition-all duration-300 translate-y-1 fa-arrow-left-long"></i>
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6 ">
                <Link
                  onClick={() => {
                    generateNumbers();
                    setnums(generateNumbers());
                    up();
                  }}
                  to={`/blog/${blogs[nums[0]].slug}`}
                  state={{ id: blogs[nums[0]].id }}
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blogs[nums[0]].image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent"></div>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {blogs[nums[0]].category}{" "}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      {blogs[nums[0]].title}{" "}
                    </p>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <div className="flex items-center gap-2">
                        <img
                          src={blogs[nums[0]].author.avatar}
                          className="w-6 h-6 rounded-full"
                          alt=""
                        />
                        <p>{blogs[nums[0]].author.name}</p>
                      </div>

                      <p>{blogs[nums[0]].readTime}</p>
                    </div>
                  </div>
                </Link>

                <Link
                  onClick={() => {
                    generateNumbers();
                    setnums(generateNumbers());
                    up();
                  }}
                  to={`/blog/${blogs[nums[1]].slug}`}
                  state={{ id: blogs[nums[1]].id }}
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blogs[nums[1]].image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent"></div>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {blogs[nums[1]].category}{" "}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      {blogs[nums[1]].title}{" "}
                    </p>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <div className="flex items-center gap-2">
                        <img
                          src={blogs[nums[1]].author.avatar}
                          className="w-6 h-6 rounded-full"
                          alt=""
                        />
                        <p>{blogs[nums[1]].author.name}</p>
                      </div>

                      <p>{blogs[nums[1]].readTime}</p>
                    </div>
                  </div>
                </Link>

                <Link
                  onClick={() => {
                    generateNumbers();
                    setnums(generateNumbers());
                    up();
                  }}
                  to={`/blog/${blogs[nums[2]].slug}`}
                  state={{ id: blogs[nums[2]].id }}
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blogs[nums[2]].image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent"></div>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {blogs[nums[2]].category}{" "}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      {blogs[nums[2]].title}{" "}
                    </p>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <div className="flex items-center gap-2">
                        <img
                          src={blogs[nums[2]].author.avatar}
                          className="w-6 h-6 rounded-full"
                          alt=""
                        />
                        <p>{blogs[nums[2]].author.name}</p>
                      </div>

                      <p>{blogs[nums[2]].readTime}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
