
import { NewsAPIForm } from "./NewsAPIForm";


export const NewsFormUsers = () => {
  const { getForm, handleDelete } = NewsAPIForm();

  return(
    <div className="p-4 w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {
          getForm.map((e, index) => (
            <div key={index} className="border rounded border-purple-700 p-4 shadow w-full">
              <p className="break-words"><span className="font-semibold">Name:</span> {e.name}</p>
              <p className="break-words"><span className="font-semibold">Email:</span> {e.email}</p>
              <p className="break-words"><span className="font-semibold">News:</span> {Array.isArray(e.news) ? e.news.join(', ') : JSON.parse(e.news).join(', ')}</p>
              <button onClick={() => handleDelete(e.email)} className="bg-red-700 hover:bg-red-900 px-3 py-1 rounded mt-3 transition" > Delete </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
