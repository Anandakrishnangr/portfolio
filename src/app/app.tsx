"use client";

import { Suspense } from "react";


export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<div className="h-10 bg-gray-800" >Loading</div>}>
        <main>{children}</main>
      </Suspense>
    </>
  );
}
