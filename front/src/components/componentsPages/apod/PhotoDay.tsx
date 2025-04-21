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
    <div className="flex flex-col items-center justify-center space-y-5   md:h-screen">
      <div className="flex space-x-2">
        <Input type="date" onChange={(e) => setDatePhotoDay(new Date(e.target.value))} />
        <Button onClick={GetApod}>Search</Button>
      </div>

      <div className="flex max-[1022px]:flex-col max-[1022px]:space-y-3 min-[1023px]:space-x-2">
        <div className="w-[500px] max-[426px]:w-[300px] max-[540px]:w-[400px]">
          <img
            src={pictureTheDay?.url}
            alt={pictureTheDay?.title}
            className="rounded-md object-cover"
          />
        </div>

        <Card>
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
