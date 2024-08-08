import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import MainContent from "@/components/mainContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <Navbar />
        <MainContent/>
    </>
  );
}
