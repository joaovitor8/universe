

export default function Loading() {
  return(
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full bg-purple-600 opacity-75 animate-ping"></div>
        <div className="relative rounded-full w-24 h-24 bg-purple-500"></div>
      </div>
      <p className="mt-8 text-xl font-medium text-purple-200">Entering the Universe...</p>
    </div>
  )
}
