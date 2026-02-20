import * as React from "react";
import "./terminal.css"
import terminal_svg from "../../assets/terminal-icon.svg"
import {type ReactNode, type RefObject, useEffect, useRef, useState} from "react";
import {Neofetch} from "./NeoFetch.tsx";
import {Help, Ls} from "./Commandos.tsx";
import type { JSX } from "react/jsx-runtime";


type TerminalProps = {
    title?: string;
    user?: string;
    host?: string;
    bodyItems: React.ReactNode[];
}

type PromptProps = {
    user?: string;
    host?: string;
    cmd?: string;
    empty?: boolean;
}

export function TerminalPrompt({user = "mark", host = "homepage", cmd = "echo", empty = false}: PromptProps) {

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

function TerminalPromptInput({user = "mark", host = "homepage", onSubmit, inputRef}: {
    user: string,
    host: string,
    onSubmit: (command: string) => void,
    inputRef: RefObject<HTMLInputElement | null>
}) {
    const [value, setValue] = useState("");


    return (
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
                <span className="cursor" aria-hidden="true"/></span>

        </div>
    )
}

function TerminalHeader(props: { title: string | undefined, user: string | undefined, host: string | undefined, smallTerminal: boolean, toggleSmallTerminal: React.Dispatch<React.SetStateAction<boolean>>, terminal: boolean, toggleTerminal: React.Dispatch<React.SetStateAction<boolean>>, setTerminalBody: React.Dispatch<React.SetStateAction<ReactNode[]>>}) {
    return <div className="term__titlebar">
        <div className="term__left">
            <div className="term__appicon" aria-hidden="true"></div>
            <span className="term__title">{props.title}</span>
        </div>

        <div className="term__title">{props.user}@{props.host}: ~/project</div>

        <div className="term__winbtns" aria-hidden="true">
            <div className="btn" title="Minimize" onClick={()=>props.toggleTerminal(!props.terminal)}>–</div>
            <div className="btn" title="Maximize" onClick={()=>{
                props.toggleSmallTerminal(!props.smallTerminal);

            }}>{props.smallTerminal?"□":"⧉"}</div>
            <div className="btn btn--close" title="Close" onClick={()=>{props.toggleTerminal(!props.terminal); props.setTerminalBody([])}}>×</div>
        </div>
    </div>;
}

function CommandNotFound({input}: {input: string}){
    return(
        <div>
        <TerminalPrompt cmd={input} />
            <div className="line">
                <p className="dim">Command '{input}' not found...</p>
                <p className="dim">Type 'help' for available commands</p>
            </div>
        </div>
    )

}

export function Terminal({title = "Terminal", user = "mark", host = "homepage", bodyItems=[]}: TerminalProps) {
    const [bodyList, setBodyList] = useState(bodyItems);
    const [smallTerminal, toggleSmallTerminal] = useState(true);
    const [terminal, toggleTerminal] = useState(true);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const bodyRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);


    function addBodyList(input: JSX.Element[]){
        setBodyList([...bodyList, input]);
    }

    function xdgSwitchboard(command_parameter: string, input: string) {
        switch (command_parameter) {
            case "feedbacktool.md": {
                addBodyList([<TerminalPrompt cmd={input}/>])
                window.open(`${window.location.origin}/projects/feedbacktool`, "_blank",);
                break
            }
            case "dockerize.md": {
                addBodyList([<TerminalPrompt cmd={input}/>])
                window.open(`${window.location.origin}/projects/dockerize`, "_blank",);
                break
            }
            default: {
                addBodyList([
                    <TerminalPrompt cmd={input}/>,
                    <div className="line">
                        <p className="dim">File '{command_parameter}' not found...</p>
                    </div>
                ])
            }
        }
    }

    const switchBoard = (input:string) => {
        const input_list = input.split(" ")
        const command = input_list[0]
        const command_parameter = input_list[1]
        switch (command) {
            case "help":
                addBodyList([
                    <TerminalPrompt cmd="help"/>,
                    <Help/>
                ])
                break
            case "neofetch":
                addBodyList([
                    <TerminalPrompt cmd="neofetch"/>,
                    <Neofetch/>
                ])
                break
            case "clear":
            case "home":
                setBodyList([]);
                break
            case "ls":
                addBodyList([
                    <TerminalPrompt cmd="ls"/>,
                    <Ls/>
                ])
                break
            case "open":
            case "xdg-open":
                if(input_list.length > 1) {
                    xdgSwitchboard(command_parameter, input);
                    break
                } else {
                    addBodyList([
                        <TerminalPrompt cmd={input} />,
                        <div className="line">
                            <p className="dim">Usage: {command} [File | URL]</p>
                            {/*<p className="dim">Type 'help' for available commands</p>*/}
                        </div>
                    ])
                    break
                }
            default:
                addBodyList([<CommandNotFound input={input}/>])
        }
        requestAnimationFrame(() => {
            bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
        });
    }

    return(
        terminal?
            <div className={smallTerminal?"term term_small":"term term_full"} role="region" aria-label="Linux terminal"  onMouseDown={(e) => {
                e.preventDefault();
                inputRef.current?.focus();
            }}>
                <TerminalHeader title={title} user={user} host={host} smallTerminal={smallTerminal} toggleSmallTerminal={toggleSmallTerminal} terminal={terminal} toggleTerminal={toggleTerminal} setTerminalBody={setBodyList}/>
                <div ref={bodyRef} className="term__body" aria-label="Terminal output">
                    {bodyList}
                    <TerminalPromptInput user={user} host={host} onSubmit={switchBoard} inputRef={inputRef}/>
                </div>
            </div>
            :
            <div className="desktop-icon">
                <img src={terminal_svg} onClick={()=>toggleTerminal(!terminal)} alt="terminal icon"/>
                <p>Click me</p>
            </div>

    )
}
