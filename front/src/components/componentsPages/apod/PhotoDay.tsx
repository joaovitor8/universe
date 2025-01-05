/* eslint-disable @next/next/no-img-element */

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { TypeApod } from "@/components/Types"

interface TypeProps {
  pictureTheDay: TypeApod | undefined
  setDatePhotoDay: React.Dispatch<React.SetStateAction<Date | undefined>>
  GetApod: () => Promise<void>
}

// React.FC - React.FunctionComponent   tipagem generica
export const PhotoDay: React.FC<TypeProps> = ({ pictureTheDay, setDatePhotoDay, GetApod }) => {

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value // Captura o valor do input no formato "YYYY-MM-DD"
    const [year, month, day] = selectedDate.split("-") // Separa os componentes da data
    const formattedDate = new Date(`${year}-${month}-${day}`) // Cria um objeto Date a partir do formato
    setDatePhotoDay(formattedDate) // Atualiza o estado com o objeto Date
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-5">

      <div className="flex space-x-2">
        <Input type="date" onChange={handleDateChange} />
        <Button onClick={GetApod}>Search</Button>
      </div>

      <div className="flex   max-[1022px]:flex-col max-[1022px]:space-y-3   min-[1023px]:space-x-2">
        <div className="w-[500px]   max-[426px]:w-[300px] max-[540px]:w-[400px]">
          <img src={pictureTheDay?.url} alt={pictureTheDay?.media_type} className="rounded-md object-cover" />
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
  )
}
