import { useState } from "react"


export const DarkModeToggle = () => {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h1>{darkMode ? "Oscuro" : "Claro"}</h1>
      <button className="btn btn-primary mt-3" onClick={() => setDarkMode(!darkMode)}>Cambiar Modo</button>

    </div>
  )
}


{/* <div style={{ background: darkMode ? "#333" : "#fff", color: darkMode ? "#fff" : "#000", padding: "20px" }}>
</div> */}

