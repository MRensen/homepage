import "./terminal.css"
import "./help.css"

export default function Help(){
    return(
        <div className="help-line">
            <span className="dim">GNU bash, version 5.2.37(1)-release (x86_64-pc-msys)</span>
            <span className="dim">These shell commands are defined internally</span>
            <span className="dim">Type 'help' to see this list.</span>
            <span className="dim">Type 'neofetch' to see my personal info</span>
            <span className="dim">Type 'home' or 'clear' to clear screen</span>



            {/*<span className="dim"></span>*/}

        </div>
    )
}