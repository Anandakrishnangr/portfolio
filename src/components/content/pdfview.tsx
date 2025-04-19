'use client';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Modal from './modal';
import { Button } from '../form';

interface PdfModalProps {
    pdfUrl: string;
    open: boolean;
    onClose: () => void;
}

export default function PdfModal({ pdfUrl, open, onClose }: PdfModalProps) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex flex-col h-[90vh] w-full p-4 bg-white rounded-2xl shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">View PDF</h2>
                    <div className="flex gap-2">
                        <Button onClick={onClose}>Close</Button>
                    </div>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 overflow-hidden rounded-lg border">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer
                            fileUrl={pdfUrl}
                            plugins={[defaultLayoutPluginInstance]}
                        />
                    </Worker>
                </div>
            </div>
        </Modal>
    );
}
