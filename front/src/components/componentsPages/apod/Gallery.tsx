/* eslint-disable @next/next/no-img-element */

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export const Gallery = ({ className, galleryPictureTheDay, date, setDate, GetGalleryApod }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="flex space-x-5">
        <div className={cn("grid gap-2", className)}>
          <Popover>
            <PopoverTrigger asChild>
              <Button id="date" variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "yyyy-MM-dd")} /{" "}
                      {format(date.to, "yyyy-MM-dd")}
                    </>
                  ) : (
                    format(date.from, "yyyy-MM-dd")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2}/>
            </PopoverContent>
          </Popover>
        </div>

        <Button onClick={GetGalleryApod}>Search</Button>
      </div>

      <div className="w-full flex flex-wrap justify-center pb-5">
        {galleryPictureTheDay.map((img, key) => (
          <a href={img.hdurl} key={key} target="_blank">
            <img src={img.url} alt={img.media_type} className="m-1 h-[300px] w-[300px]"/>
          </a>
        ))}
      </div>
    </div>
  )
}
