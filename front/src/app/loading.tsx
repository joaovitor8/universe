

export default function Loading() {
  return(
    <div className="h-screen flex items-center justify-center">
      <h2 className="text-purple-700 font-bold text-5xl">Loading</h2>
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-violet-700"></div>
      {/* <div className="animate-pulse rounded-full h-8 w-8 bg-gray-200"></div> */}
    </div>
  )
}
