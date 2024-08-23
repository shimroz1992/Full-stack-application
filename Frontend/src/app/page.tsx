import Image from "next/image";
import ListProjects from "./components/ListProjects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
    <ListProjects/>
    
    </main>
  );
}
