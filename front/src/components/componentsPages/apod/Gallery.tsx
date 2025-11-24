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
  const [error, setError] = useState<string | null>(null);

  const handleSetDateGallery = () => {
    if (!startDate || !endDate) {
      setError("Please select both a start and end date.");
      return;
    }
    if (startDate > endDate) {
      setError("Start date cannot be after end date.");
      return;
    }
    setError(null);
    setDateGallery({ startDate, endDate });
    GetGalleryApod();
  };

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">APOD Gallery</h1>
        <p className="text-muted-foreground mt-2">Explore a gallery of astronomical images by selecting a date range.</p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-4">
        <Input type="date" onChange={(e) => setStartDate(new Date(e.target.value))} />
        <Input type="date" onChange={(e) => setEndDate(new Date(e.target.value))} />
        <Button onClick={handleSetDateGallery} className="w-full sm:w-auto">Search</Button>
      </div>

      {error && <p className="text-center text-red-500 mb-8">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryPictureTheDay && galleryPictureTheDay.length > 0 ? (
          galleryPictureTheDay.slice().reverse().map((item, key) => (
            <div key={key} className="group relative block overflow-hidden shadow-lg">
              <a href={item.hdurl || item.url} target="_blank" rel="noopener noreferrer">
                <div className="aspect-square w-full">
                  {item.media_type === 'image' ? (
                    <img src={item.url} alt={item.title} className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="text-white">{item.media_type}</p>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.title}</p>
                </div>
              </a>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center p-12 border-2 border-dashed border-purple-700 rounded-lg mt-8">
            <p className="text-muted-foreground">ERROR</p>
          </div>
        )}
      </div>
    </div>
  );
};
