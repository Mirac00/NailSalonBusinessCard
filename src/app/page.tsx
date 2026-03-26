import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
