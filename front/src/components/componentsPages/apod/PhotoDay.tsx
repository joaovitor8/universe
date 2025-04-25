/* eslint-disable @next/next/no-img-element */

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
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
    <div className="min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex space-x-2 mb-3">
        <Input type="date" onChange={(e) => setDatePhotoDay(new Date(e.target.value))} />
        <Button onClick={GetApod}>Search</Button>
      </div>

      <div className="flex space-x-3 mx-2 md:w-[1000px]  max-md:flex-col max-md:items-center max-md:space-y-3">
        <div className="md:w-[50%]">
          <img
            src={pictureTheDay?.url}
            alt={pictureTheDay?.title}
            className="rounded-md object-cover"
          />
        </div>

        <Card className="md:w-[50%]">
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
  );
};
