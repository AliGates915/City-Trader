import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, BarChart3, ShieldCheck, Zap, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
const navigate = useNavigate();
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered animation for hero content
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" }
      );

      gsap.fromTo(ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" }
      );

      gsap.fromTo(statsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" }
      );

      // Floating animation for icons
      gsap.to(".float-icon", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="hero-bg absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full border border-cyan-100">
            <ShieldCheck className="h-4 w-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">
              Trusted by 500+ Distribution Businesses
            </span>
          </div>

          <h1  ref={titleRef} className="text-5xl  md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-900">Streamline Your</span>
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Distribution Operations
            </span>
          </h1>

          <p ref={subtitleRef} className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            A powerful, centralized platform designed to simplify and automate day-to-day operations 
            for distribution and trading businesses. Seamlessly integrate sales, purchases, inventory, 
            accounts, and reporting into one unified system.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={()=> navigate('/login')} className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Book a Demo</span>
              <div className="p-2 bg-cyan-100 rounded-full">
                <ChevronRight className="h-4 w-4 text-cyan-600" />
              </div>
            </button>
          </div>

          {/* Stats Section */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "98%", label: "Operational Efficiency", icon: Zap },
              { value: "24/7", label: "Real-time Tracking", icon: BarChart3 },
              { value: "99.9%", label: "System Uptime", icon: ShieldCheck },
              { value: "50%", label: "Cost Reduction", icon: ArrowRight },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-card hover:shadow-xl transition-shadow duration-300">
                <div className="float-icon mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                    <stat.icon className="h-6 w-6 text-cyan-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;