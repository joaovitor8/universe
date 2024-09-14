/* eslint-disable @next/next/no-img-element */

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import { TypeApodGallery } from "@/components/Types"
import { DateRange } from "react-day-picker"

interface TypeProps {
  className?: string
  galleryPictureTheDay: TypeApodGallery[]
  dateGallery: DateRange | undefined
  setDateGallery: React.Dispatch<React.SetStateAction<DateRange | undefined>>
  GetGalleryApod: () => Promise<void>
}

// React.FC - React.FunctionComponent tipagem generica
export const Gallery: React.FC<TypeProps> = ({ className, galleryPictureTheDay, dateGallery, setDateGallery, GetGalleryApod }) => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="flex space-x-2">
        <div className={cn("grid gap-2", className)}>
          <Popover>
            <PopoverTrigger asChild>
              <Button id="date" variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal   max-[426px]:w-[220px]", !dateGallery && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4 max-[426px]:hidden" />
                {dateGallery?.from ? (
                  dateGallery.to ? (
                    <>
                      {format(dateGallery.from, "yyyy-MM-dd")} /{" "}
                      {format(dateGallery.to, "yyyy-MM-dd")}
                    </>
                  ) : (
                    format(dateGallery.from, "yyyy-MM-dd")
                  )
                ) : (
                  <span>Escolha uma data</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar initialFocus mode="range" defaultMonth={dateGallery?.from} selected={dateGallery} onSelect={setDateGallery} numberOfMonths={2}/>
            </PopoverContent>
          </Popover>
        </div>

        <Button onClick={GetGalleryApod} className="max-[426px]:w-[80px]">Pesquisar</Button>
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
