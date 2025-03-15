

export const StoreApp = () => {
  return (
    <>
      <h1 className="text-5xl font-extrabold text-center text-blue-400 mt-10 mb-6 hover:text-blue-800">Bienvenido al diseño</h1>


      <button className="bg-rose-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-rose-400">
        Enviar
      </button>

      <div className="flex flex-col items-center j bg-violet-300 space-y-4">
        <h3>Iniciar sesión</h3>
        <label className="text-lg font-semibold text-emerald-700">
          Ingrese su nombre
        </label>
        <input className="p-3 w-64 border boder-gray-300 rounded-lg shadow-md" placeholder="Escribe tu nombre" />
        <label>
          Ingrese su Correo
        </label>
        <input placeholder="Escribe tu gmail" />
        <button className="bg-rose-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-rose-400">
          Enviar
        </button>
      </div>

    </>
  )
}
