import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Clock, Shield, TrendingUp, Database, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const benefitsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered animation for benefits
      gsap.fromTo(benefitsRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center"
          }
        }
      );

      // Animate dashboard preview
      gsap.fromTo(".dashboard-preview",
        { x: 100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
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

  const benefits = [
    {
      icon: Target,
      title: "Reduce Manual Work",
      description: "Automate repetitive tasks and minimize human errors",
      color: "text-cyan-600"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Complete operations in minutes instead of hours",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Role-based access control with detailed audit trails",
      color: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      description: "Real-time insights for better decision making",
      color: "text-purple-600"
    },
    {
      icon: Database,
      title: "Centralized Data",
      description: "Single source of truth for all business operations",
      color: "text-pink-600"
    },
    {
      icon: Zap,
      title: "Scalable Platform",
      description: "Grow your business without system limitations",
      color: "text-rose-600"
    }
  ];

  return (
    <section ref={sectionRef} id="benefits" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits List */}
          <div>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 font-semibold rounded-full mb-4">
              Key Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Operate Smarter,
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Faster & With Confidence
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Built-in dashboards and reports provide actionable insights for smarter decision-making. 
              Supplier and customer balances are managed accurately with detailed ledgers and aging reports.
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  ref={el => benefitsRef.current[index] = el}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl group-hover:shadow-md transition-shadow duration-300">
                      <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            <div className="dashboard-preview bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white">Dashboard Overview</h3>
                  <p className="text-gray-400">Real-time business insights</p>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
                  <span className="text-white font-semibold">Live</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Total Revenue", value: "$128,450", change: "+12%" },
                  { label: "Active Orders", value: "47", change: "+8%" },
                  { label: "Stock Value", value: "$89,230", change: "+5%" },
                  { label: "Profit Margin", value: "24.5%", change: "+3%" }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-white text-2xl font-bold mb-1">{stat.value}</p>
                    <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl"></div>
                <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="text-white font-semibold">Sales Performance</h4>
                      <p className="text-gray-400 text-sm">Last 30 days</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    </div>
                  </div>
                  {/* Simple chart bars */}
                  <div className="flex items-end justify-between h-32">
                    {[30, 60, 45, 80, 65, 90, 75, 50].map((height, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="w-6 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg transition-all duration-500 hover:opacity-80"
                          style={{ height: `${height}%` }}
                        ></div>
                        <div className="text-gray-400 text-xs mt-2">Day {index + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;