/* eslint-disable @next/next/no-img-element */
"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { APIsApod } from "./APIsApod";
import Loading from '@/app/loading';


export const PhotoDay = () => {
  const { loading, pictureTheDay, setDatePhotoDay, GetApod } = APIsApod();

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Astronomy Picture of the Day</h1>
        <p className="text-muted-foreground mt-2">Select a date to see the picture of that day.</p>
      </div>
      
      <div className="flex justify-center items-center space-x-2 mb-8">
        <Input type="date" onChange={(e) => setDatePhotoDay(new Date(e.target.value))} className="max-w-xs"/>
        <Button onClick={GetApod}>Search</Button>
      </div>

      {pictureTheDay ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative aspect-video w-full rounded-lg shadow-lg">
            {pictureTheDay.media_type === 'image' ? (
              <img src={pictureTheDay.url} alt={pictureTheDay.title} className="object-contain" />
            ) : pictureTheDay.media_type === 'video' ? (
              <iframe src={pictureTheDay.url} title={pictureTheDay.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-white">Unsupported media type</p>
              </div>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{pictureTheDay.title}</CardTitle>
              <CardDescription>{pictureTheDay.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">{pictureTheDay.explanation}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">{pictureTheDay.copyright}</p>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="text-center p-12 border-2 border-dashed border-purple-700 rounded-lg mt-8">
          <p className="text-muted-foreground">ERROR</p>
        </div>
      )}
    </div>
  );
};
