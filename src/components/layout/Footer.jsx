import React, { useState } from "react";

// Replace this with actual Link from react-router-dom in your app
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>{children}</a>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Pure geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20h20v20H20V20zm0-20h20v20H20V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Hero Newsletter Section */}
      <div className="relative border-b border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.02em] mb-6">
                Stay Connected
              </h2>
              <div className="w-16 h-px bg-white mx-auto mb-8"></div>
              <p className="text-lg sm:text-xl text-white font-light leading-relaxed opacity-80">
                Join our exclusive community for early access to collections,<br className="hidden sm:block" />
                styling tips, and behind-the-scenes content.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-0 border-b-2 border-white py-4 text-lg text-center placeholder-white placeholder-opacity-60 focus:outline-none focus:border-white transition-all duration-300 text-white"
                />
                <button
                  type="submit"
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 mt-8 px-8 py-3 bg-white text-black text-sm font-medium uppercase tracking-[0.2em] hover:bg-black hover:text-white border-2 border-white transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {isSubscribed ? "✓ Subscribed" : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          
          {/* Brand Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-extralight uppercase tracking-[0.3em] mb-4">
              AxisWardrobe
            </h1>
            <p className="text-white text-sm uppercase tracking-[0.15em] opacity-70">
              Modern • Minimal • Timeless
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-16 mb-16">
            
            {/* Shop */}
            <div className="group">
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] mb-8 pb-3 border-b border-white group-hover:border-opacity-100 transition-all border-opacity-50">
                Collections
              </h3>
              <ul className="space-y-4">
                {[
                  "Women's Essentials",
                  "Men's Capsule", 
                  "Unisex Pieces",
                  "Accessories",
                  "Footwear",
                  "Archive Sale",
                  "New Arrivals",
                  "Limited Edition"
                ].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(/['\s]+/g, "-")}`}
                      className="text-sm text-white opacity-70 hover:opacity-100 transition-all duration-300 hover:translate-x-1 hover:tracking-[0.05em] block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="group">
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] mb-8 pb-3 border-b border-white group-hover:border-opacity-100 transition-all border-opacity-50">
                Support
              </h3>
              <ul className="space-y-4">
                {[
                  "Size & Fit Guide",
                  "Shipping Info",
                  "Returns & Exchanges", 
                  "Care Instructions",
                  "Product Support",
                  "FAQ",
                  "Contact Us",
                  "Live Chat"
                ].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(/[&\s]+/g, "-")}`}
                      className="text-sm text-white opacity-70 hover:opacity-100 transition-all duration-300 hover:translate-x-1 hover:tracking-[0.05em] block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div className="group">
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] mb-8 pb-3 border-b border-white group-hover:border-opacity-100 transition-all border-opacity-50">
                Experience
              </h3>
              <ul className="space-y-4">
                {[
                  "Store Locator",
                  "Personal Styling",
                  "Virtual Appointments",
                  "Membership Program",
                  "Style Community",
                  "Events & Workshops",
                  "Brand Collaborations"
                ].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(/[&\s]+/g, "-")}`}
                      className="text-sm text-white opacity-70 hover:opacity-100 transition-all duration-300 hover:translate-x-1 hover:tracking-[0.05em] block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="group">
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] mb-8 pb-3 border-b border-white group-hover:border-opacity-100 transition-all border-opacity-50">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  "Our Story",
                  "Sustainability",
                  "Ethical Production", 
                  "Careers",
                  "Press & Media",
                  "Investor Relations",
                  "Brand Partners"
                ].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(/[&\s]+/g, "-")}`}
                      className="text-sm text-white opacity-70 hover:opacity-100 transition-all duration-300 hover:translate-x-1 hover:tracking-[0.05em] block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="group">
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] mb-8 pb-3 border-b border-white group-hover:border-opacity-100 transition-all border-opacity-50">
                Connect
              </h3>
              <div className="space-y-6">
                {[
                  ["Instagram", "45.2K followers"],
                  ["Pinterest", "12.8K pins"],
                  ["YouTube", "Style guides"],
                  ["TikTok", "Behind scenes"],
                  ["LinkedIn", "Company updates"]
                ].map(([platform, description]) => (
                  <a
                    href="#"
                    key={platform}
                    className="group/social block"
                  >
                    <div className="text-sm text-white opacity-70 group-hover/social:opacity-100 transition-all duration-300 group-hover/social:tracking-[0.05em]">
                      {platform}
                    </div>
                    <div className="text-xs text-white opacity-40 mt-1 group-hover/social:opacity-60 transition-all">
                      {description}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-1 mb-12">
            {[
              {
                title: "Collections",
                items: ["Women's Essentials", "Men's Capsule", "Unisex Pieces", "Accessories", "Footwear", "Archive Sale"]
              },
              {
                title: "Support", 
                items: ["Size & Fit Guide", "Shipping Info", "Returns & Exchanges", "Care Instructions", "FAQ", "Contact Us"]
              },
              {
                title: "Experience",
                items: ["Store Locator", "Personal Styling", "Virtual Appointments", "Membership Program", "Style Community"]
              },
              {
                title: "Company",
                items: ["Our Story", "Sustainability", "Careers", "Press & Media", "Brand Partners"]
              }
            ].map((section, index) => (
              <div key={section.title} className="border-b border-white border-opacity-30">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center py-4 text-left hover:bg-white hover:bg-opacity-5 transition-all duration-200"
                >
                  <span className="text-sm font-medium uppercase tracking-[0.15em]">
                    {section.title}
                  </span>
                  <span className={`text-lg transition-transform duration-300 ${
                    expandedSection === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedSection === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}>
                  <ul className="space-y-3 ml-4">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link 
                          to={`/${item.toLowerCase().replace(/[&'\s]+/g, "-")}`}
                          className="text-sm text-white opacity-70 hover:opacity-100 transition-all block hover:tracking-[0.05em]"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links Mobile */}
          <div className="lg:hidden mb-12">
            <h3 className="text-sm font-medium uppercase tracking-[0.15em] mb-6 text-center">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-8">
              {["Instagram", "Pinterest", "YouTube", "TikTok", "LinkedIn"].map((platform) => (
                <a
                  href="#"
                  key={platform}
                  className="text-sm text-white opacity-70 hover:opacity-100 transition-all hover:tracking-[0.05em]"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Region & Language */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-8 border-b border-white border-opacity-30">
            <div className="mb-4 sm:mb-0">
              <button className="flex items-center space-x-2 text-sm text-white opacity-70 hover:opacity-100 transition-all group hover:bg-white hover:bg-opacity-10 px-3 py-2">
                <span className="text-base">🌍</span>
                <span className="uppercase tracking-[0.1em] group-hover:tracking-[0.12em] transition-all">
                  India • English • INR
                </span>
                <span className="text-xs opacity-50">▼</span>
              </button>
            </div>
            <div className="text-xs text-white opacity-50 text-center sm:text-right">
              Shipping worldwide • Free delivery over ₹2,999
            </div>
          </div>

          {/* Legal & Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-white opacity-60">
              {[
                "Privacy Policy",
                "Terms of Service", 
                "Cookie Policy",
                "Accessibility",
                "Modern Slavery Statement",
                "Tax Strategy"
              ].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:opacity-100 transition-all uppercase tracking-[0.1em] hover:tracking-[0.12em] hover:bg-white hover:bg-opacity-10 px-2 py-1"
                >
                  {item}
                </Link>
              ))}
            </div>
            
            <div className="text-xs text-white opacity-50 flex items-center space-x-4">
              <span>© {new Date().getFullYear()} AxisWardrobe</span>
              <span className="w-px h-4 bg-white opacity-30"></span>
              <span className="uppercase tracking-[0.1em]">All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}