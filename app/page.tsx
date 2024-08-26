import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "../components/Grid";
import { navItems } from "@/components/data";
import Skills from "@/components/Skills";
import Experience from "@/components/Experince";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <Skills />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
