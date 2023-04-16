import ThemeToggle from "./ThemeToggle"

export default function Header () {
    return (
        <>
            <ThemeToggle />
            <div className="appName">
                <h3>NoteUP</h3>
            </div>
        </>
    )
}