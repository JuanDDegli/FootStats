const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-100px)]">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
        <div className="absolute inset-2 bg-white rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-blue-600 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold text-blue-600 animate-pulse">Carregando...</p>
    </div>
  )
}

export default Loader

