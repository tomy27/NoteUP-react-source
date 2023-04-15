import { useEffect, useState } from "react"

export default function ThemeToggle () {

    const [theme,setTheme] = useState(()=> {
      const localTheme = localStorage.getItem("THEME")
      if(localTheme == null) return "light"
      return localTheme
    })
    
    useEffect(()=>{
      localStorage.setItem("THEME", theme)
    }, [theme])

    useEffect(()=> {
      if(theme === "light") {
        document.documentElement.style.setProperty("--background", "whitesmoke")
        document.documentElement.style.setProperty("--text", "#555555")
      } else {
        document.documentElement.style.setProperty("--background", "#333")
        document.documentElement.style.setProperty("--text", "hsl(200, 100%, 50%)")
      }
    })
      

    function toggleTheme (theme) {
      if(theme === "light") {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }
    
    return (
        <button className="btn-theme" onClick={() => toggleTheme(theme)}>
          {theme === "light" ? <i className="bi bi-moon"></i> : <i className="bi bi-brightness-high"></i>}
        </button>
    )
}