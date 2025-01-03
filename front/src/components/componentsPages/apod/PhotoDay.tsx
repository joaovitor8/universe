/* eslint-disable @next/next/no-img-element */

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

      <div className="flex space-x-2">
        {/* <input mode="single" selected={datePhotoDay} onSelect={setDatePhotoDay} initialFocus/> */}
        <input type="date" name="" id="" className=""/>
        <button onClick={GetApod} className="max-[426px]:w-[100px]">Search</button>
      </div>


      <div className="flex   max-[1022px]:flex-col max-[1022px]:space-y-3   min-[1023px]:space-x-2">
        <div className="w-[500px]   max-[426px]:w-[300px] max-[540px]:w-[400px]">
          <img src={pictureTheDay?.url} alt={pictureTheDay?.media_type} className="rounded-md object-cover" />
        </div>

        <div className="h-min w-[500px] p-5 border border-CinzaMetalico rounded-md space-y-5   max-[426px]:w-[300px] max-[540px]:w-[400px]">
          <div>
            <div>{pictureTheDay?.title}</div>
            <div>{pictureTheDay?.date}</div>
          </div>
          <div>
            <p>{pictureTheDay?.explanation}</p>
          </div>
          <div>
            <p>{pictureTheDay?.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
