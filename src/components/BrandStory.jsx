import React from "react";

const BrandStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="order-2 lg:order-1 pt-8">
            <div className="max-w-lg">
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-light uppercase tracking-[0.25em] text-black mb-4 leading-tight">
                  Our Story
                </h2>
                <div className="w-16 h-px bg-black"></div>
              </div>
              
              <div className="space-y-6 mb-10">
                <p className="text-gray-700 leading-relaxed text-base tracking-wide font-light">
                  AxisWardrobe was born from a simple belief: fashion should be effortless, 
                  sustainable, and accessible. We curate pieces that transcend trends, 
                  focusing on quality, comfort, and timeless design.
                </p>
                <p className="text-gray-700 leading-relaxed text-base tracking-wide font-light">
                  Every item in our collection is carefully selected to ensure it meets 
                  our standards of excellence, from the finest materials to ethical 
                  manufacturing practices.
                </p>
                <p className="text-gray-700 leading-relaxed text-base tracking-wide font-light">
                  We believe in creating a wardrobe that works as hard as you do, 
                  with pieces that seamlessly transition from day to night, season to season.
                </p>
              </div>
              
              <button className="group inline-flex items-center text-black text-sm font-medium uppercase tracking-[0.15em] border-b border-black hover:border-gray-400 transition-all duration-300 pb-1">
                Discover Our Journey
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664874602757-051b14a4b1d4?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Our Story - Modern Fashion"
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Overlay text */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm font-light uppercase tracking-[0.2em] text-black">
                    Crafted for Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;