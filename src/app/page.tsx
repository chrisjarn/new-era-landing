import { SiteNavigationBar } from "@/components/SiteNavigationBar";
import { Footer } from "@/components/Footer";
import { Manifesto } from "@/components/Home/Manifesto";

export default function Home() {
  return (
    <>
      <SiteNavigationBar />
      <main className="flex flex-1 flex-col">
        <Manifesto />
      </main>
      <div className="flex-1" />
      <Footer />
    </>
  );
}
