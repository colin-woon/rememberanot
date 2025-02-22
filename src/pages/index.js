import Image from "next/image";
import NoteBook from "@/components/notebook";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2" 
      style={{fontFamily: "var(--font-geist-sans)"}}
    >
      <main className="w-full max-w-lg">
          <NoteBook/>
      </main>
      <footer className="flex flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
