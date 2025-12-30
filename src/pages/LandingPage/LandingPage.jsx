import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';
import CTASection from './CTASection';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Smooth fade-in for entire page
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );

      // Parallax effect for hero section
      gsap.to(".hero-bg", {
        y: 100,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;