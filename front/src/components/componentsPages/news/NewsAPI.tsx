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

export function NewsAPI() {
  const [articles, setArticles] = useState<NewsType[]>([]);
  const [blogs, setBlogs] = useState<NewsType[]>([]);
  const [reports, setReports] = useState<NewsType[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        axios.get("http://127.0.0.1:4000/api/news/articles").then(res => setArticles(res.data));
        axios.get("http://127.0.0.1:4000/api/news/blogs").then(res => setBlogs(res.data));
        axios.get("http://127.0.0.1:4000/api/news/reports").then(res => setReports(res.data));
      } catch (err) {
        setError(`Error fetching news ( Erro ao buscar notícias ): ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return { articles, blogs, reports, loading, error };
}
