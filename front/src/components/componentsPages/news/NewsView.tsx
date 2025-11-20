/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";

import { useNewsAPI } from "@/components/componentsPages/news/NewsAPI";
import { Form } from "@/components/componentsPages/news/Form";
import { FormUsers } from "@/components/componentsPages/news/FormUsers";

import Loading from "@/app/loading";

type NewsType = {
  title: string;
  imageUrl: string;
  summary: string;
  author: string;
  url: string;
};

// Reusable News Card component
const NewsCard = ({ title, imageUrl, summary, url }: NewsType) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block border border-slate-800 rounded-lg overflow-hidden bg-slate-900/50 hover:border-purple-800 transition-colors group">
    <div className="aspect-video w-full relative">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors">{title}</h3>
      <p className="text-sm text-slate-400 mt-2 line-clamp-3">{summary}</p>
    </div>
  </a>
);

// Component to render a list of news items
const NewsList = ({ items }: { items: NewsType[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
    {items.map((item, index) => (
      <NewsCard key={index} {...item} />
    ))}
  </div>
);

// Tab Button component
const TabButton = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap 
      ${active ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}
    `}
  >
    {label}
  </button>
);

export const NewsView = () => {
  const [activeSection, setActiveSection] = useState("articles");
  const { articles, blogs, reports, loading, error } = useNewsAPI();

  const newsContent = () => {
    switch (activeSection) {
      case "articles": return <NewsList items={articles} />;
      case "blogs": return <NewsList items={blogs} />;
      case "reports": return <NewsList items={reports} />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex justify-center flex-wrap gap-2 mb-10">
        <TabButton label="Articles" active={activeSection === "articles"} onClick={() => setActiveSection("articles")} />
        <TabButton label="Blogs" active={activeSection === "blogs"} onClick={() => setActiveSection("blogs")} />
        <TabButton label="Reports" active={activeSection === "reports"} onClick={() => setActiveSection("reports")} />
        <TabButton label="Subscribe" active={activeSection === "form"} onClick={() => setActiveSection("form")} />
      </div>

      {loading && <Loading />}
      
      {error && (
        <div className="text-center p-12 border-2 border-dashed border-red-500 rounded-lg">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {activeSection !== "form" && newsContent()}
          {activeSection === "form" && (
            <div className="flex flex-col items-center space-y-12 animate-fade-in">
              <Form />
              <FormUsers />
            </div>
          )}
        </>
      )}
    </div>
  );
}
