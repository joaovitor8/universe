import { NewsAPIForm } from "./NewsAPIForm"

export const NewsFormUsers = () => {
  const { getForm, handleDelete } = NewsAPIForm();

  return(
    <div className="p-4 w-full flex flex-wrap">
      {
        getForm.map((e, index) => (
          <div key={index} className="border rounded border-purple-700 p-3 m-1">
            <p>Name: {e.name}</p>
            <p>Email: {e.email}</p>
            <p>News: {e.news}</p>
            <button onClick={() => handleDelete(e.email)} className="bg-red-700 hover:bg-red-900 px-3 py-1 rounded mt-3" >Delete</button>
          </div>
        ))
      }
    </div>
  )
}
