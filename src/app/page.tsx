import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { MenuPage } from "./components/Menu/MenuPage";
import { Services } from "./components/Services";
import { Statistics } from "./components/Statistics";
import { Videos } from "./components/Videos";
import { WhyUGC } from "./components/WhyUGC";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Header />

      <section id="hero" className="snap-start h-screen">
        <Hero />
      </section>

      <section id="menu" className="snap-start h-screen">
        <MenuPage />
      </section>

      <section id="why-ugc" className="snap-start h-screen">
        <WhyUGC />
      </section>

      <section id="videos" className="snap-start h-screen">
        <Videos />
      </section>

      <section id="statistics" className="snap-start h-screen">
        <Statistics />
      </section>

      <section id="about" className="snap-start h-screen">
        <About />
      </section>

      <section id="services" className="snap-start h-screen">
        <Services />
      </section>

      <section id="contact" className="snap-start h-screen">
        <Contact />
      </section>
    </main>
  );
}