import {useNavigate} from "react-router-dom";


function GenericLink({text, onClick} : { text: string, onClick: () => void }) {
    return(
        <span
            className="navlink"
            onClick={onClick}
        >{text}</span>
    )
}

function DropDown({list}:{list: {
        callback: () => void;
        title: string;
    }[];}){

    return(
        <div className="navDropdown">
            <span className="navDropdownBtn">Projects</span>

            <ul className="navDropdownMenu">
                {list.map((item)=> {
                    return (
                        <li className="navDropdownItem" onClick={item.callback}>
                            {item.title}
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