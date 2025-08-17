/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Gallery } from "@/components/componentsPages/apod/Gallery";
import { PhotoDay } from "@/components/componentsPages/apod/PhotoDay";
import Loading from '@/app/loading';
import { TypeApod, TypeApodGallery } from "@/components/Types";

import { useState, useEffect } from 'react';
import axios from "axios";

const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 20);
  return formatDate(yesterday);
};

export const APIsApod = () => {
  const today = new Date();

  const [pictureTheDay, setPictureTheDay] = useState<TypeApod>();
  const [galleryPictureTheDay, setGalleryPictureTheDay] = useState<TypeApodGallery[]>([]);

  const [datePhotoDay, setDatePhotoDay] = useState<Date>(today);
  const [dateGallery, setDateGallery] = useState<{ startDate: Date | null; endDate: Date | null }>({
    startDate: null,
    endDate: null,
  });
  
  const [loading, setLoading] = useState(true);

  const GetApod = async () => {
    try {
      if (datePhotoDay > today) {
        throw new Error("Select dates before or equal to today.");
      }
      const response = await axios.get(`http://127.0.0.1:4000/api/apod?date=${formatDate(datePhotoDay)}`);
      setPictureTheDay(response.data);
    } catch (error) {
      console.error("Error when searching for image", error)
    }
  };

  // https://universe-back.onrender.com
  // http://127.0.0.1:4000

  const GetGalleryApod = async () => {
    try {
      const formtDateFrom = dateGallery.startDate ? formatDate(dateGallery.startDate) : getYesterday();
      const formatDateTo = dateGallery.endDate ? formatDate(dateGallery.endDate) : formatDate(today);

      if (new Date(formtDateFrom) > today || new Date(formatDateTo) > today) {
        throw new Error("Select dates before or equal to today.");
      }

      const response = await axios.get(`http://127.0.0.1:4000/api/apod/gallery?start_date=${formtDateFrom}&end_date=${formatDateTo}`);
      if (response.data.length > 100) {
        throw new Error("Maximum request limit reached! (maximum 40)");
      }
      setGalleryPictureTheDay(response.data);
    } catch (error) {
      console.error("Error fetching image:", error)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([GetApod(), GetGalleryApod()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <main>
      <PhotoDay pictureTheDay={pictureTheDay} setDatePhotoDay={setDatePhotoDay} GetApod={GetApod} />
      <div className="m-20"></div>
      <Gallery galleryPictureTheDay={galleryPictureTheDay} setDateGallery={setDateGallery} GetGalleryApod={GetGalleryApod} />
    </main>
  );
};
