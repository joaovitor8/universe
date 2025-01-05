/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { TypeApodGallery } from "@/components/Types";

interface TypeProps {
  galleryPictureTheDay: TypeApodGallery[];
  setDateGallery: (dates: { startDate: Date; endDate: Date }) => void;
  GetGalleryApod: () => Promise<void>;
}

export const Gallery: React.FC<TypeProps> = ({ galleryPictureTheDay, setDateGallery, GetGalleryApod }) => {
  // Estados locais para armazenar as datas
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Atualiza o estado local para a data inicial
  const handleDateChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const formattedDate1 = new Date(selectedDate);
    console.log(formattedDate1)
    // setStartDate(formattedDate1);
  };

  // Atualiza o estado local para a data final
  const handleDateChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const formattedDate2 = new Date(selectedDate);
    console.log(formattedDate2)
    // setEndDate(formattedDate2);
  };

  // Envia as datas para o componente pai
  const handleSetDateGallery = () => {
    if (startDate && endDate) {
      setDateGallery({ startDate, endDate });
    } else {
      alert("Selecione ambas as datas antes de prosseguir.");
    }
    GetGalleryApod()
  };

  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="flex space-x-2">
        <div className="flex space-x-1">
          <Input type="date" onChange={handleDateChange1} />
          <Input type="date" onChange={handleDateChange2} />
        </div>

        <Button onClick={handleSetDateGallery} className="max-[426px]:w-[80px]">Search</Button>
      </div>

      <div className="w-full flex flex-wrap justify-center pb-5">
        {galleryPictureTheDay.map((img, key) => (
          <a href={img.hdurl} key={key} target="_blank" rel="noopener noreferrer">
            <img src={img.url} alt={img.media_type} className="m-1 h-[300px] w-[300px]" />
          </a>
        ))}
      </div>
    </div>
  );
};

