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
        <div className="line out neoRow">
        <NeofetchArt lines={lines}/>
        <NeofetchInfo items={items}/>
    </div>
    )
}

function NeofetchArt({lines}: {lines:string[]}) {

    return(
        <div className="neoArt" aria-hidden="true">
            {lines.map((line, i) => (
                <p key={i} className="neoArtLine">{line || "\u00A0"}</p>)
            )}
</div>
    )
}

function NeofetchInfo({items}:{items: KV[]}){
    return(
        <div className="neoInfo">
              <p className="neoInfoLine prompt">----------------------</p>
            {items.map(({ key, value }, i) => (
                <p className="neoInfoLine" key={`${key}-${i}`}>
                    <span className="prompt">{key}:</span> {value}
                </p>
            ))}
            <NeofetchPallette/>

                        </div>
    )
}



function NeofetchPallette(){
    return(
        <div className="neoPalette" aria-hidden="true">
        <p className="neoSw neoSw--green"></p>
        <p className="neoSw neoSw--cyan"></p>
        <p className="neoSw neoSw--blue"></p>
        <p className="neoSw neoSw--yellow"></p>
        <p className="neoSw neoSw--red"></p>
        <p className="neoSw neoSw--muted"></p>
    </div>
    )
}