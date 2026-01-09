import "./terminal.css"
import "./help.css"

export default function Help(){
    return(
        <div className="help-line">
            <p className="dim">GNU bash, version 5.2.37(1)-release (x86_64-pc-msys)</p>
            <p className="dim">These shell commands are defined internally</p>
            <p className="dim">Type 'help' to see this list.</p>
            <p className="dim">Type 'neofetch' to see my personal info</p>
            <p className="dim">Type 'home' or 'clear' to clear screen</p>



            {/*<span className="dim"></span>*/}

        </div>
    )
}