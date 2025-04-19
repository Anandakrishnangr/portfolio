// src/components/ViewerWrapper.tsx
'use client';

import { useState } from 'react';
import PdfModal from './pdfview';

export function ViewerWrapper() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
      >
        Open PDF
      </button>

      <PdfModal
        open={open}
        pdfUrl="/demo.pdf"
        onClose={() => setOpen(false)}
      >
      </PdfModal>
    </>
  );
}
