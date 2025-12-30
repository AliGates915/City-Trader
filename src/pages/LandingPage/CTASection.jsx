import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, CheckCircle, Shield, Users, Zap } from 'lucide-react';

const CTASection = () => {
  const ctaRef = useRef(null);
  const formRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pulse animation for CTA
      gsap.to(".cta-pulse", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Form animation
      gsap.fromTo(formRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
      );

      // Features animation
      gsap.fromTo(featuresRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.8,
          ease: "power3.out"
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} id="cta" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30">
              <Zap className="h-5 w-5 text-cyan-400" />
              <span className="text-cyan-300 font-semibold">Limited Time Offer</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Distribution Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join 500+ successful distribution businesses that trust our platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Features */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-8">
                Everything Included in Your Free Trial
              </h3>
              {[
                { icon: CheckCircle, text: "Full access to all features for 14 days", color: "text-green-400" },
                { icon: Users, text: "Up to 5 team members", color: "text-cyan-400" },
                { icon: Shield, text: "Enterprise-grade security", color: "text-blue-400" },
                { icon: ArrowRight, text: "Priority onboarding support", color: "text-indigo-400" },
                { icon: Zap, text: "Real-time data migration assistance", color: "text-purple-400" },
              ].map((feature, index) => (
                <div
                  key={index}
                  ref={el => featuresRef.current[index] = el}
                  className="flex items-center space-x-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl group-hover:shadow-lg transition-all duration-300">
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                  </div>
                  <span className="text-xl text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column - Form */}
            <div ref={formRef} className="cta-pulse bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-2">Start Your Free Trial</h3>
              <p className="text-gray-400 mb-8">No credit card required • Cancel anytime</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Business Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@yourbusiness.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Distribution Co."
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Monthly Transaction Volume</label>
                  <select className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300">
                    <option value="">Select volume range</option>
                    <option value="small">Less than $50,000</option>
                    <option value="medium">$50,000 - $500,000</option>
                    <option value="large">$500,000 - $5M</option>
                    <option value="enterprise">$5M+</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                >
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="h-5 w-5" />
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;