import {useNavigate} from "react-router-dom";
import {useState} from "react";


function GenericLink({text, onClick} : { text: string, onClick: () => void }) {
    return(
        <button
            type="button"
            className="navlink"
            onClick={onClick}
        >{text}</button>
    )
}

function DropDown({list}:{list: {
        callback: () => void;
        title: string;
    }[];}){
    const [open, setOpen] = useState(false);

    return(
        <div className="navDropdown">
            <button
                type="button"
                className="navDropdownBtn"
                aria-expanded={open}
                aria-controls="projects-menu"
                onClick={() => setOpen((current) => !current)}
            >
                Projects
            </button>

            <ul id="projects-menu" className={`navDropdownMenu${open ? " is-open" : ""}`}>
                {list.map((item)=> {
                    return (
                        <li key={item.title}>
                            <button
                                type="button"
                                className="navDropdownItem"
                                onClick={() => {
                                    item.callback();
                                    setOpen(false);
                                }}
                            >
                                {item.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default function NavHeader() {
    const navigate = useNavigate();
    const projecten = [
        {callback:() => navigate("/projects/feedbacktool"), title:"feedbacktool"},
        {callback:() => navigate("/projects/dockerize"), title:"dockerize"},
    ]

    return (
        <header className="navheader">
            <GenericLink text={"Home"} onClick={()=> navigate("/")}/>
            <DropDown list={projecten}/>
        </header>
    )
}
