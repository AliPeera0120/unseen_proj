import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 pt-[76px]">
      <div className="max-w-2xl text-center">
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="page-title mt-5">Nothing to see here—yet.</h1>
        <p className="mx-auto mt-6 max-w-lg leading-7 text-muted-foreground">The page may have moved or the address may be incomplete.</p>
        <Link to="/" className="brand-button mt-9"><ArrowLeft className="h-4 w-4" /> Return home</Link>
      </div>
    </main>
  );
}
