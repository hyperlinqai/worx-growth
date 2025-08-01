import { useState, useEffect } from "react";
import { ContactFormDialog } from "@/components/ContactFormDialog";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-hero)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold hero-text">WorX Media</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#industries" className="text-muted-foreground hover:text-foreground transition-colors">Industries</a>
            <a href="#framework" className="text-muted-foreground hover:text-foreground transition-colors">Process</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <button 
            onClick={() => setShowContactForm(true)}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform glow-effect"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              We are the <span className="hero-text">Best</span><br />
              <span className="hero-text">Performance Marketing</span><br />
              Agency
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's Grow Your Revenue Through Performance Marketing
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Struggling with low-quality leads or wasted ad spend?
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 hero-text">
              Scale Smarter. Get Quality Leads That Actually Convert.
            </h2>
          </div>
          
          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              WorX Media is a global performance marketing agency helping <span className="text-primary font-semibold">real estate businesses</span>, <span className="text-primary font-semibold">online coaches</span>, and <span className="text-primary font-semibold">clinics</span> drive predictable revenue using PPC Ads, CRO, Email Systems, and AI-powered creatives.
            </p>
          </div>

          {/* Lead Capture Form */}
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto mb-8">
            <p className="text-xl font-semibold mb-4 text-foreground">
              Enter your website or landing page URL
            </p>
            <p className="text-muted-foreground mb-8">
              We'll review it and send a free growth plan to your inbox, tailored for your business.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 w-full">
                <input 
                  type="url" 
                  placeholder="🔗 https://yourwebsite.com"
                  className="w-full px-6 py-4 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground text-lg backdrop-blur"
                />
              </div>
              <button 
                onClick={() => {
                  const input = document.querySelector('input[type="url"]') as HTMLInputElement;
                  setWebsiteUrl(input?.value || "");
                  setShowContactForm(true);
                }}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform glow-effect whitespace-nowrap"
              >
                👉 Get Your Free 3-Step Growth Plan
              </button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Join <span className="text-primary font-semibold">300+ global founders</span>, coaches, and clinics who've optimized their ad funnels with WorX Media.
          </p>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-xs text-muted-foreground">Award Winning</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <p className="text-xs text-muted-foreground">Global Reach</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-xs text-muted-foreground">Proven Results</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <p className="text-xs text-muted-foreground">AI-Powered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 px-6 relative overflow-hidden" id="social-proof">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Top Brands Choose <span className="hero-text">WorX Media</span>
            </h2>
            <p className="text-xl text-muted-foreground">Performance-first. ROI-obsessed. Built to Scale Globally.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🚀", stat: "2x–4x", desc: "ROAS on Meta & Google Ads", detail: "Average return on ad spend across all campaigns" },
              { icon: "⚙️", stat: "Custom", desc: "Funnel Automation built to convert", detail: "Tailored automation systems for each client" },
              { icon: "🎯", stat: "AI-driven", desc: "Ad Creatives that stop the scroll", detail: "Psychology-backed creative that converts" },
              { icon: "🌍", stat: "10+", desc: "Countries served globally", detail: "International expertise across markets" }
            ].map((item, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="text-5xl mb-4 floating" style={{ animationDelay: `${index * 0.5}s` }}>{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2 hero-text">{item.stat}</h3>
                <p className="text-foreground font-semibold mb-2">{item.desc}</p>
                <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-32 px-6" id="industries">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Help <span className="hero-text">Growth-Obsessed</span> Businesses<br />
              Across Key Industries
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real Estate Brands",
                icon: "🏠",
                description: "Drive qualified buyer and seller leads using targeted local PPC and lead funnel automation.",
                features: ["Local PPC Campaigns", "Lead Funnel Automation", "Qualified Lead Generation", "ROI Tracking"]
              },
              {
                title: "Online Coaches & Consultants", 
                icon: "💼",
                description: "Convert cold traffic into high-ticket clients with powerful ad creatives, webinar funnels, and retention systems.",
                features: ["High-Ticket Funnels", "Webinar Automation", "Cold Traffic Conversion", "Retention Systems"]
              },
              {
                title: "Clinics & Healthcare Brands",
                icon: "🏥", 
                description: "Book more appointments with strategic Google Ads, local SEO, and automated follow-up workflows.",
                features: ["Appointment Booking", "Local SEO", "Google Ads", "Automated Follow-ups"]
              }
            ].map((industry, index) => (
              <div key={index} className="gradient-border group hover:scale-105 transition-all duration-300">
                <div className="glass-card p-8 rounded-2xl h-full">
                  <div className="text-4xl mb-6">{industry.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">✅ {industry.title}</h3>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 relative" id="services" style={{ background: 'var(--gradient-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We <span className="hero-text">Do</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "PPC Advertising",
                subtitle: "(Meta, Instagram, TikTok & Google Ads)",
                icon: "🔹",
                description: "Get laser-targeted leads with paid campaigns optimized for cost per result, not just impressions. We specialize in real estate ads, healthcare lead gen, and funnel-driven coaching funnels."
              },
              {
                title: "Conversion Rate Optimization",
                subtitle: "(CRO)",
                icon: "🔹", 
                description: "We design and optimize high-converting funnels with persuasive copywriting, A/B testing, and psychological triggers that turn visitors into customers."
              },
              {
                title: "Email Marketing & Retention",
                subtitle: "Systems",
                icon: "🔹",
                description: "Build automated email flows, retargeting sequences, and lifecycle campaigns that drive engagement and repeat revenue — all while you sleep."
              },
              {
                title: "Analytics & Attribution",
                subtitle: "",
                icon: "🔹",
                description: "Stop guessing. Get crystal-clear visibility into what's working with advanced funnel tracking, GA4, UTM strategies, and cross-channel attribution."
              },
              {
                title: "AI-Powered Ad Creatives",
                subtitle: "",
                icon: "🔹",
                description: "We blend human psychology with AI tools to produce thumb-stopping ad creatives — crafted for conversions, not just likes."
              }
            ].map((service, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
                <div className="text-2xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                {service.subtitle && <p className="text-sm text-primary font-medium mb-4">{service.subtitle}</p>}
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-primary font-semibold text-sm hover:text-accent transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Framework Section */}
      <section className="py-32 px-6" id="framework">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Proven <span className="hero-text">4-Step Performance</span><br />
              Growth Framework
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Audit",
                description: "We analyze your current marketing systems, funnels, and ad data to identify opportunities and gaps."
              },
              {
                step: "2", 
                title: "Strategy",
                description: "Custom campaigns built to fit your goals, industry, and audience with clear KPIs and targeting."
              },
              {
                step: "3",
                title: "Launch", 
                description: "Execute PPC campaigns, email flows, funnels, and AI creative testing with precise implementation."
              },
              {
                step: "4",
                title: "Scale",
                description: "Continuous optimization with real-time attribution and CRO to maximize your ROI and growth."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto glow-effect group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <footer className="py-32 px-6 relative overflow-hidden" id="contact" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to <span className="hero-text">Scale Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Stop wasting money on ads that don't convert. Get your free growth plan and start seeing real results.
          </p>
          
          <div className="glass-card p-8 rounded-2xl mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <input 
                type="url" 
                placeholder="🔗 Enter your website URL"
                className="flex-1 px-6 py-4 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground text-lg backdrop-blur"
              />
              <button 
                onClick={() => {
                  const footerInput = document.querySelectorAll('input[type="url"]')[1] as HTMLInputElement;
                  setWebsiteUrl(footerInput?.value || "");
                  setShowContactForm(true);
                }}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform glow-effect whitespace-nowrap"
              >
                Get Your Free 3-Step Growth Plan
              </button>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Join <span className="text-primary font-semibold">300+ global founders</span>, coaches, and clinics who've optimized their ad funnels with WorX Media.
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
      
      <ContactFormDialog 
        open={showContactForm} 
        onOpenChange={setShowContactForm}
        initialWebsite={websiteUrl}
      />
    </div>
  );
};

export default Index;