export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin h-8 w-8 border-4 border-t-transparent border-blue-500 rounded-full"></div>
      <span className="ml-4 text-blue-500">Cargando...</span>
    </div>
  )
}

