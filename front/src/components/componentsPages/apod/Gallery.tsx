/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TypeApodGallery } from "@/components/Types";

type TypeProps = {
  galleryPictureTheDay: TypeApodGallery[];
  setDateGallery: (dates: { startDate: Date | null; endDate: Date | null }) => void;
  GetGalleryApod: () => void;
};


export const Gallery: React.FC<TypeProps> = ({ galleryPictureTheDay, setDateGallery, GetGalleryApod }) => {
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

  return (
    <div>
      <div>
        <Input type="date" onChange={(e) => setStartDate(new Date(e.target.value))} />
        <Input type="date" onChange={(e) => setEndDate(new Date(e.target.value))} />
        <Button onClick={handleSetDateGallery}>Search</Button>
      </div>

      <div>
        {galleryPictureTheDay.map((img, key) => (
          <a href={img.hdurl} key={key} target="_blank" rel="noopener noreferrer">
            <img src={img.url} alt={img.media_type}/>
          </a>
        ))}
      </div>
    </div>
  );
};
