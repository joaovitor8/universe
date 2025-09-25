/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";

import { NewsAPI } from "@/components/componentsPages/news/NewsAPI";
import { NewsForm } from "@/components/componentsPages/news/NewsForm";
import { NewsFormUsers } from "@/components/componentsPages/news/NewsFormUsers";

import { Button } from "@/components/ui/Button";

export const NewsView = () => {
  const [activeSection, setActiveSection] = useState("");
  const { articles, blogs, reports } = NewsAPI();

  return (
    <div className="mx-10">
      <div className="mb-10 space-x-1">
        <Button onClick={() => setActiveSection("Articles")}>Articles</Button>
        <Button onClick={() => setActiveSection("Blogs")}>Blogs</Button>
        <Button onClick={() => setActiveSection("Reports")}>Reports</Button>
        <Button onClick={() => setActiveSection("")}>Back</Button>

        <Button onClick={() => setActiveSection("Form")} className="ml-5">Form</Button>
      </div>

      {activeSection === "" && (
        <h2 className="text-center">Find out everything that happens in the universe!</h2>
      )}

      {activeSection === "Form" && (
        <div className="flex flex-col items-center space-y-10">
          <NewsForm />
          <NewsFormUsers />
        </div>
      )}

      {activeSection === "Articles" && (
        <div>
          {articles.map((article, index) => (
            <div key={index} className="border border-purple-500 p-4 mb-4 rounded-lg space-y-3">
              <h2>{article.title}</h2>
              <div className="space-x-4 flex">
                <img src={article.imageUrl} alt={article.title} className="w-[300px]" />
                <p>{article.summary}</p>
              </div>
              <div className="flex justify-between">
                <p>Author: {article.author}</p>
                <a href={article.url} target="_blank" className="bg-purple-700 py-1 px-2 rounded hover:bg-purple-950">Read more</a>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeSection === "Blogs" && (
        <div>
          {blogs.map((blog, index) => (
            <div key={index} className="border border-purple-500 p-4 mb-4 rounded-lg space-y-3">
              <h2>{blog.title}</h2>
              <div className="space-x-4 flex">
                <img src={blog.imageUrl} alt={blog.title} className="w-[300px]" />
                <p>{blog.summary}</p>
              </div>
              <div className="flex justify-between">
                <p>Author: {blog.author}</p>
                <a href={blog.url} target="_blank" className="bg-purple-700 py-1 px-2 rounded hover:bg-purple-950">Read more</a>
              </div>
            </div>
          ))}
        </div>
      )}


      {activeSection === "Reports" && (
        <div>
          {reports.map((report, index) => (
            <div key={index} className="border border-purple-500 p-4 mb-4 rounded-lg space-y-3">
              <h2>{report.title}</h2>
              <div className="space-x-4 flex">
                <img src={report.imageUrl} alt={report.title} className="w-[300px]" />
                <p>{report.summary}</p>
              </div>
              <div className="flex justify-between">
                <p>Author: {report.author}</p>
                <a href={report.url} target="_blank" className="bg-purple-700 py-1 px-2 rounded hover:bg-purple-950">Read more</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
