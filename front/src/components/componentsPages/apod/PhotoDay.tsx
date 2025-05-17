/* eslint-disable @next/next/no-img-element */

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TypeApod } from "@/components/Types";

interface TypeProps {
  pictureTheDay: TypeApod | undefined;
  setDatePhotoDay: React.Dispatch<React.SetStateAction<Date>>;
  GetApod: () => Promise<void>;
}

export const PhotoDay: React.FC<TypeProps> = ({ pictureTheDay, setDatePhotoDay, GetApod }) => {
  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <div className="flex items-center space-x-1">
        <Input type="date" onChange={(e) => setDatePhotoDay(new Date(e.target.value))} className="w-full sm:w-auto"/>
        
        <Button onClick={GetApod} className="w-full sm:w-auto">Search</Button>
      </div>

      <div className="w-full max-w-4xl space-y-4 flex flex-col items-center lg:space-y-0 lg:flex lg:flex-row lg:items-start lg:space-x-2">
        <div className="flex justify-center w-[300px] sm:w-[400px] md:w-[500px] lg:w-1/2">
          {pictureTheDay?.url ? (
            <img src={pictureTheDay.url} alt={pictureTheDay.title} className="max-w-full h-auto rounded-lg"/>
          ) : (
            <div className="w-full h-[300px] bg-purple-700 rounded-lg"></div>
          )}
        </div>

        {pictureTheDay ? (
          <Card className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-1/2">
            <CardHeader>
              <CardTitle className="text-lg font-bold">{pictureTheDay?.title}</CardTitle>
              <CardDescription className="text-sm text-gray-500">{pictureTheDay?.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">{pictureTheDay?.explanation}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-400">{pictureTheDay?.copyright}</p>
            </CardFooter>
          </Card>
        ) : (
          <div className="w-full h-[300px] bg-purple-700 rounded-lg"></div>
        )}
      </div>
    </div>
  );
};
