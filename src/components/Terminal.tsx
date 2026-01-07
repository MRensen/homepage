import defaultart from "../assets/java.txt?raw";
import * as React from "react";
import "./terminal.css"


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

type TerminalProps = {
    title?: string;
    user?: string;
    host?: string;

}

type PromptProps = {
    user? : string;
    host? : string;
    cmd?: string;
    empty?: boolean;
}

type KV = {
    key: string;
    value: React.ReactNode; // kan tekst zijn of een <a> etc.
};

type NeofetchProps = {
    art?: string;
    items?: KV[];
}

export function TerminalPrompt({user="mark", host="homepage", cmd="echo", empty=false}: PromptProps){

    return (
            <span className="line">
                {!empty &&
                    <>

                        <span className="user">{user}</span>
                        <span className="prompt">@</span>
                        <span className="host">{host}</span>
                        <span className="prompt">:</span>
                        <span className="path">~</span>
                        <span className="prompt">$</span>
                        {cmd == "blinking" ?
                            (<>
                                <span className="cmd"> </span>
                                <span className="cursor" aria-hidden="true"></span>
                            </>) :
                            (<span className="cmd"> {cmd}</span>)
                        }
                    </>
                }
            </span>
        )

}

function TerminalHeader(props: { title: string | undefined, user: string | undefined, host: string | undefined }) {
    return <div className="term__titlebar">
        <div className="term__left">
            <div className="term__appicon" aria-hidden="true"></div>
            <span className="term__title">{props.title}</span>
        </div>

        <div className="term__title">{props.user}@{props.host}: ~/project</div>

        <div className="term__winbtns" aria-hidden="true">
            <div className="btn" title="Minimize">–</div>
            <div className="btn" title="Maximize">□</div>
            <div className="btn btn--close" title="Close">×</div>
        </div>
    </div>;
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






export function Terminal({title = "Terminal", user = "mark", host = "homepage"} : TerminalProps) {
    return(
        <>
            <div className="term" role="region" aria-label="Linux terminal">
                <TerminalHeader title={title} user={user} host={host}/>

                <div className="term__body" aria-label="Terminal output">
                    {/*<TerminalPrompt user={user} host={host} cmd="neofetch" typing={step == 1} />*/}
                    {/*<TerminalPrompt empty={true}/>*/}
                    {/*<Neofetch/>*/}
                    {/*<TerminalPrompt empty={true}/>*/}
                    {/*<TerminalPrompt user={user} host={host} cmd="blinking"/>*/}
                    <TerminalPrompt
                        user={user}
                        host={host}
                        cmd="neofetch"
                    />
                    <TerminalPrompt empty={true}/>
                    <Neofetch/>
                    <TerminalPrompt empty={true}/>
                    <TerminalPrompt cmd="blinking"/>
                </div>
            </div>
        </>
    )
}
