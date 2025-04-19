'use client';

import { ReactNode, useEffect, useLayoutEffect } from 'react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (open) {
            document.addEventListener('keydown', handleEsc);
        } else {
            document.removeEventListener('keydown', handleEsc);
        }

        return () => document.removeEventListener('keydown', handleEsc);
    }, [open, onClose]);

    useLayoutEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow;

        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = originalOverflow;
        }

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [open]);
    

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div
                className="relative dark:bg-black rounded-2xl shadow-2xl p-4 w-full max-w-5xl mx-4 animate-fade-in"
            >
                {/* Close Button (optional corner close) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-black hover:text-gray-600"
                >
                    ✕cccc
                </button>

                {/* Modal Content */}
                {children}
            </div>
        </div>
    );
}
