

export default function Loading() {
  return(
    <div className="flex justify-center items-center space-x-4">
      <h2 className="text-5xl text-violet-700 font-bold">Carregando</h2>
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-violet-700"></div>
      {/* <div className="animate-pulse rounded-full h-8 w-8 bg-gray-200"></div> */}
    </div>
  )
}
