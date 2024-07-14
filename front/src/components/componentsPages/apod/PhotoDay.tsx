/* eslint-disable @next/next/no-img-element */

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export const PhotoDay = ({pictureTheDay, date, setDate, GetApod}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-5">
      <div className="w-[1012px] flex items-start mt-20 space-x-5">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground" )}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "yyyy-MM-dd") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus/>
          </PopoverContent>
        </Popover>

        <Button onClick={GetApod}>Search</Button>
      </div>

      <div className="flex justify-center space-x-3">
        <div className="w-[500px]">
          <a href={pictureTheDay?.hdurl} target="_blank">
            <img src={pictureTheDay?.url} alt={pictureTheDay?.media_type} className="rounded-md object-cover" />
          </a>
        </div>

        <Card className="h-min w-[500px]">
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
