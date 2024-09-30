/* eslint-disable @next/next/no-img-element */

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import { TypeApod } from "@/components/Types"

interface TypeProps {
  pictureTheDay: TypeApod | undefined
  datePhotoDay: Date | undefined
  setDatePhotoDay: React.Dispatch<React.SetStateAction<Date | undefined>>
  GetApod: () => Promise<void>
}

// React.FC - React.FunctionComponent   tipagem generica
export const PhotoDay: React.FC<TypeProps> = ({ pictureTheDay, datePhotoDay, setDatePhotoDay, GetApod }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <div className="flex items-start mt-5 space-x-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal   max-[426px]:w-[200px]", !datePhotoDay && "text-muted-foreground" )}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {datePhotoDay ? format(datePhotoDay, "yyyy-MM-dd") : <span>Choose a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={datePhotoDay} onSelect={setDatePhotoDay} initialFocus/>
          </PopoverContent>
        </Popover>

        <Button onClick={GetApod} className="max-[426px]:w-[100px]">Search</Button>
      </div>

      <div className="flex   max-[1022px]:flex-col max-[1022px]:space-y-3   min-[1023px]:space-x-2">
        <div className="w-[500px]   max-[426px]:w-[300px] max-[540px]:w-[400px]">
          <a href={pictureTheDay?.hdurl} target="_blank">
            <img src={pictureTheDay?.url} alt={pictureTheDay?.media_type} className="rounded-md object-cover" />
          </a>
        </div>

        <Card className="h-min w-[500px]   max-[426px]:w-[300px] max-[540px]:w-[400px]">
          <CardHeader>
            <CardTitle>{pictureTheDay?.title}</CardTitle>
            <CardDescription>{pictureTheDay?.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{pictureTheDay?.explanation}</p>
          </CardContent>
          <CardFooter>
            <p>{pictureTheDay?.copyright}</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
