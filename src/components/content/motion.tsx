'use client';
import { ReactNode } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Motion = ({ children, className, id }: { children: ReactNode, className?: string, id?: string }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return <motion.div
        id={id}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className={"h-full " + className}
    >
        {children}
    </motion.div>
}

export default Motion;
