"use client"

import { useEffect, useState } from "react";
import axios from "axios";

import { NewsDeleteForm } from "@/components/componentsPages/news/NewsDeleteForm";

type NewsUser = {
  name: string;
  email: string;
  news: string[];
};

export const NewsGetForm = () => {
  const [getForm, setGetForm] = useState<NewsUser[]>([]);

  const GetUsersForm = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:4000/db/news/getUsers");
      setGetForm(response.data);
    } catch (error) {
      console.error("Front-End: Error trying to get users ", error);
    }
  };

  useEffect(() => {
    GetUsersForm();
  }, []);

  return(
    <div className="p-4 w-full flex flex-wrap">
      {
        getForm.map((e, index) => (
          <div key={index} className="border rounded border-purple-700 p-3 m-1">
            <p>Name: {e.name}</p>
            <p>Email: {e.email}</p>
            <p>News: {e.news}</p>
            <button onClick={() => NewsDeleteForm(e.email)} className="bg-red-700 hover:bg-red-900 px-3 py-1 rounded mt-3" >Delete</button>
          </div>
        ))
      }
    </div>
  )
}
