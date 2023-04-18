import ThemeToggle from "./ThemeToggle"
import logo from "./logo.png"

export default function Header () {
    return (
        <>
            <div className="appName">
                <img src={logo} alt="logo" width="80"/>
            </div>
            <ThemeToggle />
        </>
    )
}