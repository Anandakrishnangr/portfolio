'use client';
import { ReactNode } from "react";

const Section = ({ children, className, id }: { children: ReactNode, className?: string, id?: string }) => {
    return <div id={id} className={"session-height min-h-[100dvh] snap-start " + className}>
        {children}
    </div>
}

export default Section;
