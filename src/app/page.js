import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoIntro from '@/components/VideoIntro';
import About from '@/components/About';
import Portofolio from '@/components/Portofolio';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a1128] min-h-screen text-white pt-16">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="intro">
        <VideoIntro />
      </div>
      <About />
      <Portofolio />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}