import React, { useEffect, useState, FunctionComponent } from "react";

interface Props {
    text: string;
    interval: number;
    reTypeAllowed: boolean;
}

const TypedList:FunctionComponent<Props> = (props) => {
    const text =props.text;
    const interval = props.interval;
    const reTypeAllowed = props.reTypeAllowed;
    const [delayedStr, setDelayedStr] = useState("");
    const typeWriter = (text:string, setter: (value: string) => void, interval:number) => {
        let charIndex = 0;
        let localTyping = "";
        if (text) {
            let printer = setInterval(() => {
                if (charIndex < text.length) {
                    setter((localTyping += text[charIndex]));
                    charIndex += 1;
                } else {
                    charIndex = 0;
                    localTyping = "";
                    clearInterval(printer);
                }
            }, interval);
            
        }
    }
    useEffect(() => {
        typeWriter(text, setDelayedStr, interval);
    }, [text, interval]);
    return <div onMouseEnter={()=>delayedStr===text&&reTypeAllowed?typeWriter(text, setDelayedStr, interval): <p></p>} className="App-link">{delayedStr}</div>
}

export default TypedList;