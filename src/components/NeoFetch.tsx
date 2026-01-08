import * as React from "react";
import defaultart from "../assets/java.txt?raw";
import "./neofetch.css"

const personal_info = [
    {key: "Name", value: "Mark Rensen"},
    {key: "Role", value: "Backend developer | Docent"},
    {key: "Shell", value: "Bash | PowerShell"},
    {key: "Uptime", value: "∞"},
    {key: "Editor", value: "IntelliJ | Webstorm | Pycharm"},
    {key: "Languages", value: "Java | JavaScript | Kotlin | Python"},
    {key: "Frameworks", value: "SpringBoot | React | FastApi | Ktor"},
    {key: "Security", value: "Security-first | Oath | Spring security | Keycloak"},
    {key: "Github", value: <a href="https://github.com/MRensen">github.com/MRensen</a>},
    {key: "LinkedIn", value: <a href="https://www.linkedin.com/in/mark-rensen/">linkedin.com/mark-rensen</a>},
    {key: "E-mail", value: <a href="mailto:markrensen@hotmail.com">markrensen@hotmail.com</a>},
]

type KV = {
    key: string;
    value: React.ReactNode; // kan tekst zijn of een <a> etc.
};

type NeofetchProps = {
    art?: string;
    items?: KV[];
}

export function Neofetch({art = defaultart, items = personal_info}: NeofetchProps){
    const lines = art.split(/\r?\n/);


    return(
        <span className="line out neoRow">
        <NeofetchArt lines={lines}/>
        <NeofetchInfo items={items}/>
    </span>
    )
}

function NeofetchArt({lines}: {lines:string[]}) {

    return(
        <span className="neoArt" aria-hidden="true">
            {lines.map((line, i) => (
                <span key={i} className="neoArtLine">{line || "\u00A0"}</span>)
            )}
</span>
    )
}

function NeofetchInfo({items}:{items: KV[]}){
    return(
        <span className="neoInfo">
              <span className="neoInfoLine prompt">----------------------</span>
            {items.map(({ key, value }, i) => (
                <span className="neoInfoLine" key={`${key}-${i}`}>
                    <span className="prompt">{key}:</span> {value}
                </span>
            ))}
            <NeofetchPallette/>

                        </span>
    )
}



function NeofetchPallette(){
    return(
        <span className="neoPalette" aria-hidden="true">
        <span className="neoSw neoSw--green"></span>
        <span className="neoSw neoSw--cyan"></span>
        <span className="neoSw neoSw--blue"></span>
        <span className="neoSw neoSw--yellow"></span>
        <span className="neoSw neoSw--red"></span>
        <span className="neoSw neoSw--muted"></span>
    </span>
    )
}