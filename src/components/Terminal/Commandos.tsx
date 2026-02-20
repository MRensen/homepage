import "./terminal.css"
import "./commandos.css"

export function Help(){
    return(
        <div className="help-line">
            <p className="dim">GNU mash, version 5.2.37(1)-release (x86_64-pc-msys)</p>
            <p className="dim">These shell commands are defined internally</p>
            <p className="dim">Type 'help' to see this list.</p>
            <p className="dim">Type 'neofetch' to see my personal info</p>
            <p className="dim">Type 'home' or 'clear' to clear screen</p>
            <p className="dim">Type 'ls' to list documents</p>
            <p className="dim">Type 'open' or 'xdg-open' to open a document</p>
        </div>
    )
}

const files = [
    // date and time, length, name
    {mode: "-r--r--r--", datetime:"6-1-2026     20:41", length:"744", name:"feedbacktool.md"},
    {mode: "-r--r--r--", datetime:"17-2-2026     14:54", length:"523", name:"dockerize.md"},
]

//    4 17 13 9 6 1 4
export function Ls(){
    return(
        <div className="help-line">
            <p className="dim">Mode                 LastWriteTime         Length Name</p>
            <p className="dim">----                 -------------         ------ ----</p>
            {files.map(file=>
                <p className="dim">{file.mode}{" ".repeat(34-file.mode.length-file.datetime.length)}{file.datetime}{" ".repeat(15-file.length.length)}{file.length} {file.name}</p>
            )}

        </div>
    )
}
