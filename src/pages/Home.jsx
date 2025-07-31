import { useState, useEffect } from "react";
import { ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";
import BrandStory from "../components/BrandStory";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const navigate = useNavigate();

  const heroSlides = [
    {
      title: "NEW IN",
      subtitle: "Contemporary essentials for modern living",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=1080&fit=crop&crop=center",
      cta: "EXPLORE",
      badge: "Just Dropped",
      link: "/products?category=new"
    },
    {
      title: "ESSENTIALS",
      subtitle: "Wardrobe staples that never go out of style", 
      image:  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=1600&fit=crop&crop=faces",
      cta: "Shop Essentials",
      badge: "Best Sellers",
      link: "/products?category=essentials"
    },
    {
      title: "SPRING COLLECTION",
      subtitle:  "Light layers and effortless pieces",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop&crop=center",
      cta: "VIEW ALL",
      badge:"New Season",
      link: "/products?category=spring"
    }
  ];

  const categories = [
    {
      name: "women",
      displayName: "WOMEN",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
      subtitle: "Dresses, tops & more"
    },
    {
      name: "men",
      displayName: "MEN",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop",
      subtitle: "Shirts, pants & jackets"
    },
    {
      name: "accessories",
      displayName: "ACCESSORIES",
      image: "https://plus.unsplash.com/premium_photo-1661645417454-fabe3698fe4a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
      subtitle: "Bags, jewelry & more"
    },
    {
      name: "shoes",
      displayName: "SHOES",
      image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subtitle: "Sneakers, boots & heels"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Oversized Blazer",
      price: "$89.99",
      originalPrice: "$129.99",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      badge: "SALE",
      colors: ["Black", "Beige", "Navy"]
    },
    {
      id: 2,
      name: "Ribbed Knit Top",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1618354691229-88fbfb2b5b33?w=400&h=500&fit=crop",
      badge: "NEW",
      colors: ["White", "Black", "Cream"]
    },
    {
      id: 3,
      name: "Wide-leg Trousers",
      price: "$65.99",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      colors: ["Black", "Grey", "Brown"]
    },
    {
      id: 4,
      name: "Denim Jacket",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1618354691229-88fbfb2b5b33?w=400&h=500&fit=crop",
      badge: "TRENDING",
      colors: ["Blue", "Light Blue", "Black"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
   <main className="bg-white min-h-screen">
      {/* Hero Section  */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

         {/*  Badge - Top Right */}
        <div className="absolute top-8 right-8 z-30">
          <span className="text-white/60 text-xs font-light tracking-[0.3em] font-mono">
            {heroSlides[currentSlide].badge}
          </span>
        </div>

{/* Content - Center Left Aligned */}
        <div className="relative z-20 h-full flex items-center px-8 lg:px-16 xl:px-24">
          <div className="max-w-2xl">
            <h1 className={`text-white text-5xl lg:text-6xl xl:text-7xl font-light uppercase tracking-[0.25em] leading-none mb-8 transform transition-all duration-2000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              {heroSlides[currentSlide].title}
            </h1>
            
            <p className={`text-white/80 text-lg lg:text-xl font-light tracking-wide leading-relaxed mb-12 max-w-lg transform transition-all duration-2000 ease-out delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              {heroSlides[currentSlide].subtitle}
            </p>
            
            <button
              onClick={() => navigate(heroSlides[currentSlide].link)}
              className={`group relative overflow-hidden bg-transparent border border-white/40 text-white px-12 py-4 text-sm font-light uppercase tracking-[0.2em] hover:border-white transition-all duration-700 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              } delay-1000`}
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-700">
                {heroSlides[currentSlide].cta}
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </button>
          </div>
        </div>



        {/* Slide Indicators - Enhanced */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-6 sm:w-8 h-0.5 transition-all duration-300 hover:bg-white/80 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      
      </section>

      {/* Categories Section - Enhanced Responsive */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black mb-4">
              Shop by Category
            </h2>
            <div className="w-12 sm:w-16 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => navigate(`/products?category=${category.name}`)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 mb-3 sm:mb-4" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={category.image}
                    alt={category.displayName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Hover overlay text */}
                  <div className="absolute inset-0 flex items-end justify-center pb-6 sm:pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-white text-xs sm:text-sm font-medium uppercase tracking-wider">
                      Shop Now
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm lg:text-base font-medium uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-1 sm:mb-2 group-hover:text-gray-600 transition-colors duration-300">
                    {category.displayName}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-500 tracking-wide">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts featuredProducts={featuredProducts} />
      <BrandStory />
      
    </main>
  );
}