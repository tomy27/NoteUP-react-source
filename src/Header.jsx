import ThemeToggle from "./ThemeToggle"

export default function Header () {
    return (
        <>
            <ThemeToggle />
            <div className="container-fluid text-center">
                <h3>NoteUP</h3>
            </div>
        </>
    )
}