"use client"

import { useEffect, useState } from "react";
import axios from "axios";


type NewsType = {
  title: string;
  imageUrl: string;
  summary: string;
  author: string;
  url: string;
};


export const useNewsAPI = () => {
  const [articles, setArticles] = useState<NewsType[]>([]);
  const [blogs, setBlogs] = useState<NewsType[]>([]);
  const [reports, setReports] = useState<NewsType[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    async function fetchNews() {
      try {
        const [articlesRes, blogsRes, reportsRes] = await Promise.all([
          axios.get("http://127.0.0.1:4000/api/news/articles"),
          axios.get("http://127.0.0.1:4000/api/news/blogs"),
          axios.get("http://127.0.0.1:4000/api/news/reports"),
        ]);
        setArticles(articlesRes.data);
        setBlogs(blogsRes.data);
        setReports(reportsRes.data);
      } catch (err) {
        setError(`Error fetching news: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return { articles, blogs, reports, loading, error };
}
