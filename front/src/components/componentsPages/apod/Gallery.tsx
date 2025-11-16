/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";


import { APIsApod } from "@/components/componentsPages/apod/APIsApod";
import Loading from '@/app/loading';


export const Gallery = () => {
  const { loading, galleryPictureTheDay, setDateGallery, GetGalleryApod } = APIsApod();

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSetDateGallery = () => {
    if (!startDate || !endDate || startDate > endDate) {
      alert("Please select valid dates. Start date cannot be after end date.");
      return;
    }
    setDateGallery({ startDate, endDate });
    GetGalleryApod();
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-2 gap-2 mb-3 md:flex">
        <Input type="date" onChange={(e) => setStartDate(new Date(e.target.value))} />
        <Input type="date" onChange={(e) => setEndDate(new Date(e.target.value))} />
        <Button onClick={handleSetDateGallery} className="col-span-2">Search</Button>
      </div>

      <div className="w-full flex flex-wrap justify-center">
        {galleryPictureTheDay && galleryPictureTheDay.length > 0 ? (
          galleryPictureTheDay.slice().reverse().map((img, key) => (
            <div key={key} className="m-2">
              <a href={img.hdurl} target="_blank" rel="noopener noreferrer">
                <img src={img.url} alt={img.media_type} className="h-[300px] w-[300px] rounded-md object-cover hover:opacity-50" />
              </a>
              <p className="text-center">{img.title}</p>
            </div>
          ))
        ) : (
          <div className="w-full h-[300px] bg-purple-700 rounded-lg mx-10"></div>
        )}
      </div>
    </div>
  );
};
