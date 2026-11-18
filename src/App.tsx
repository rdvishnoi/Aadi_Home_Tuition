import Header, { FloatingWhatsApp } from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Classes from '@/components/Classes';
import WhyChooseUs from '@/components/WhyChooseUs';
import Methodology from '@/components/Methodology';
import Gallery from '@/components/Gallery';
import StudentDevelopment from '@/components/StudentDevelopment';
import GoogleReviews from '@/components/GoogleReviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import ConnectWithUs from '@/components/ConnectWithUs';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <WhyChooseUs />
        <Methodology />
        <Gallery />
        <StudentDevelopment />
        <GoogleReviews />
        <FAQ />
        <Contact />
        <ConnectWithUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
