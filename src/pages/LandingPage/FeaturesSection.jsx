import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package, TrendingUp, Users, FileText, Clock, BarChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each feature card
      featuresRef.current.forEach((feature, index) => {
        gsap.fromTo(feature,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: feature,
              start: "top bottom-=100",
              end: "top center",
              scrub: false,
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );
      });

      // Animate section title
      gsap.fromTo(".section-title",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time stock updates with automated alerts for low inventory levels",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Sales & Purchases",
      description: "Seamlessly integrate sales orders with purchase management",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Customer & Supplier Ledger",
      description: "Detailed aging reports and accurate balance management",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Built-in dashboards and reports for smarter decision-making",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Live updates across all modules for complete operational visibility",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: BarChart,
      title: "Profit & Loss Analysis",
      description: "Comprehensive financial tracking with automated calculations",
      color: "from-rose-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="section-title">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 font-semibold rounded-full mb-4">
              Powerful Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need in
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                One Platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of tools streamlines every aspect of your distribution business
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featuresRef.current[index] = el}
              className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;