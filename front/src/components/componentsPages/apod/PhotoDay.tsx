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
    <div>
      <div>
        <Input type="date" onChange={(e) => setDatePhotoDay(new Date(e.target.value))} />
        <Button onClick={GetApod}>Search</Button>
      </div>

      <div>
        <div>
          <img
            src={pictureTheDay?.url}
            alt={pictureTheDay?.title}
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
