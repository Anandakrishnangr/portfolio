// components/Card.tsx
'use client';
import { motion } from 'framer-motion';

interface CardProps {
    icon: React.ReactNode;
    label: string;
    style?: React.CSSProperties;
    zIndex?: number;
    index?: number;
    isTop?: boolean;
    ActiveIndex?: number | null;
    handleActiveIndex?: (index: number ) => null
}

export default function Card({ icon, label, style, zIndex = 0, isTop = false, ActiveIndex, handleActiveIndex=()=>null,index=0 }: CardProps) {
    console.log(ActiveIndex)
    return (
        <motion.div
        onClick={()=>handleActiveIndex(index)}
            onHoverStart={()=>handleActiveIndex(index)}
            onHoverEnd={()=>handleActiveIndex(-1)}
            style={{ ...style, zIndex }}
            className={
                `absolute w-48 h-64 rounded-xl shadow-xl bg-white overflow-hidden border border-gray-300 transition-transform duration-500 
        ${isTop ? 'hover:scale-105' : ''}`}
        >
            <div className="flex items-center justify-between bg-sky-900 text-white text-sm px-3 py-2">
                <span className="truncate w-full">{label}</span>
                <span>{icon}</span>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-2 text-sky-900">
                <div className="text-5xl">{icon}</div>
                <div className="text-lg font-semibold">{label}</div>
            </div>
        </motion.div>
    );
}
