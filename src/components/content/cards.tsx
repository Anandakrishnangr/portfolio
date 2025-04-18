'use client';
import { useState } from 'react';
import Card from './card';

const cards = [
    { label: 'research', icon: <h1>H</h1> },
    { label: 'delivery', icon: <h1>H</h1> },
    { label: 'telecom', icon: <h1>H</h1> },
    { label: 'fintech', icon: <h1>H</h1> },
    { label: 'airlines', icon: <h1>H</h1> },
];

export default function CardStack() {
    const [hovered, setHovered] = useState(false);
    const [ActiveIndex, setActiveIndex] = useState<number>(-1);
    const handleActiveIndex = (index: number) => {
        setActiveIndex(index)
        return null
    }

    return (
        <div
            className="relative w-[360px] h-[300px] mx-auto mt-20"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {cards.map((card, index) => {
                const baseRotate = (5 * index)
                let offsetX = (index * 40)
                let rotate = -10 + baseRotate;
                const zIndex = hovered ? index + 10 : index;
                if (ActiveIndex != -1) {
                    if (ActiveIndex === index && index !==0) {
                        offsetX += 10
                    }
                    else if (ActiveIndex > index) {
                        rotate -= 10
                        offsetX -= 5
                    }
                    else if (ActiveIndex < index) {
                        rotate += 15
                        offsetX += 120
                    }
                }
                return (
                    <Card
                        key={card.label}
                        icon={card.icon}
                        label={card.label}
                        zIndex={zIndex}
                        index={index}
                        ActiveIndex={ActiveIndex}
                        handleActiveIndex={handleActiveIndex}
                        style={{
                            transform: `rotate(${rotate}deg) translateX(${offsetX}px)`,
                        }}
                        isTop={hovered && index === cards.length - 1}
                    />
                );
            })}
        </div>
    );
}
