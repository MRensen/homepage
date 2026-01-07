import { useEffect, useState } from "react";

export default function useTypewriter(text: string, speedMs = 30, enabled = true, onDone?: () => void) {
    const [out, setOut] = useState("");

    useEffect(() => {
        if (!enabled) {
            setOut(text);
            onDone?.();
            return;
        }

        setOut("");
        let i = 0;

        const id = window.setInterval(() => {
            i += 1;
            setOut(text.slice(0, i));
            if (i >= text.length) {
                window.clearInterval(id);
                onDone?.();
            }
        }, speedMs);

        return () => window.clearInterval(id);
    }, [text, speedMs, enabled, onDone]);

    return out;
}