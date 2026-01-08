import * as React from "react";
import "./terminal.css"
import {type RefObject, useEffect, useRef, useState} from "react";
import {Neofetch} from "./NeoFetch.tsx";
import Help from "./Help.tsx";


type TerminalProps = {
    title?: string;
    user?: string;
    host?: string;
    bodyItems?: React.ReactNode[];
}

type PromptProps = {
    user? : string;
    host? : string;
    cmd?: string;
    empty?: boolean;
}

export function TerminalPrompt({user="mark", host="homepage", cmd="echo", empty=false}: PromptProps){

    return (
            <span className="line">
                    <>

                        <span className="user">{user}</span>
                        <span className="prompt">@</span>
                        <span className="host">{host}</span>
                        <span className="prompt">:</span>
                        <span className="path">~</span>
                        <span className="prompt">$</span>
                        {!empty &&
                        <span className="cmd"> {cmd}</span>
                        }

                    </>
            </span>
        )

}

function TerminalPromptInput({user="mark", host="homepage", onSubmit, inputRef}:{user:string, host:string, onSubmit:(command: string) => void, inputRef:RefObject<HTMLInputElement|null>} ){
    const [value, setValue] = useState("");


    return(
        <div>
            <span className="user">{user}</span>
            <span className="prompt">@</span>
            <span className="host">{host}</span>
            <span className="prompt">:</span>
            <span className="path">~</span>
            <span className="prompt">$</span>
            <span> </span>
            {/* interactive area */}
            <span
                className="cmdArea"

            >
                                        {/* mirror tekst bepaalt cursorpositie */}
                <span className="cmdMirror" aria-hidden="true">
                                            {value}
                    {/* zorgt dat er altijd "iets" is om breedte te hebben */}
                    <span className="cmdMirrorSpacer"> </span></span>

                {/* echte input (onzichtbaar, maar ontvangt input) */}
                <input
                    ref={inputRef}
                    className="cmdInput"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            const command = value;
                            setValue("");
                            onSubmit?.(command);
                        }
                    }}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    autoFocus={true}
                    spellCheck={false}
                />

                {/* jouw cursor-blokje direct na mirror */}
                <span className="cursor" aria-hidden="true" /></span>

    </div>
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

const NeofetchList = [
    <TerminalPrompt cmd="neofetch" />,
    <Neofetch />
];

const HelpList = [
    <TerminalPrompt cmd="help" />,
    <Help/>
]

export function Terminal({title = "Terminal", user = "mark", host = "homepage", bodyItems} : TerminalProps) {
    const [bodyList, setBodyList] = useState(bodyItems);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const switchBoard = (input:string) => {
        console.log(input);
        if (input === "help") {
            setBodyList(HelpList)
        }
        if (input === "neofetch") {
            setBodyList(NeofetchList)
        }
        if (input === "clear" || input === "home") {
            setBodyList([])
        }
    }
    return(
        <>
            <div className="term" role="region" aria-label="Linux terminal"  onMouseDown={(e) => {
                // klik ergens in de area => focus input (en voorkom tekstselectie)
                e.preventDefault();
                inputRef.current?.focus();
            }}>
                <TerminalHeader title={title} user={user} host={host}/>

                <div className="term__body" aria-label="Terminal output">
                    {bodyList}
                    <TerminalPromptInput user={user} host={host} onSubmit={switchBoard} inputRef={inputRef}/>
                </div>
            </div>
        </>
    )
}
