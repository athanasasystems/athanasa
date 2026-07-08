"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-start justify-between">
      <Header />
      <main className="flex flex-col items-start justify-start flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
