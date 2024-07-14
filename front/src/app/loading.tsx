

export default function Loading() {
  return(
    <div className="h-screen bg-red-500">
      <p>Loading...</p>
      <p>Carregando...</p>
    </div>
  )
}

//   await new Promise((resolve) => setTimeout(resolve, 10000))