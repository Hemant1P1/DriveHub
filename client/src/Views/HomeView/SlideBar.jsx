import React, { useState } from 'react';

const SequentialHeroSlider = () => {
  // Track current active slide index (0 to 3)
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = [
    {
      id: "slide1",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      accentColor: "bg-orange-600 hover:bg-orange-700",
      image: "https://i.pinimg.com/736x/a3/a5/e4/a3a5e4b828a701fb8cad15164a974eb6.jpg",
      title: "Get Quick Rides",
      subtitle: "We Are Here",
      tagline: "तो किस बात का Fear",
      btnText: "Connect With Us",
      hasIcon: true
    },
    {
      id: "slide2",
      bgColor: "bg-red-50/30",
      textColor: "text-red-600",
      accentColor: "bg-red-600 hover:bg-red-700",
      image: "https://i.pinimg.com/1200x/c9/97/5c/c9975c39831c9fb3cfe19647c53003df.jpg",
      title: "Emergency Services",
      subtitle: "Available 24/7",
      tagline: "Fast & Reliable Support",
      btnText: "Book Ambulance Now",
      hasIcon: false
    },
    {
      id: "slide3",
      bgColor: "bg-blue-50/20",
      textColor: "text-blue-700",
      accentColor: "bg-blue-600 hover:bg-blue-700",
      image: "https://i.pinimg.com/736x/3c/c1/3d/3cc13ddb255d0404a0ebf395d5cfe136.jpg",
      title: "Group Travel Mini Bus",
      subtitle: "Comfort & Convenience",
      tagline: "Ideal for Events & Picnics",
      btnText: "Explore Outstation Buses",
      hasIcon: false
    },
    {
      id: "slide4",
      bgColor: "bg-emerald-50/20",
      textColor: "text-emerald-700",
      accentColor: "bg-emerald-600 hover:bg-emerald-700",
      image: "https://i.pinimg.com/1200x/8e/e7/83/8ee783ed14f27c3cdd978ce47efada5c.jpg",
      title: "Agriculture Vehicles",
      subtitle: "Powering Your Farm",
      tagline: "Tractors & Heavy Machinery",
      btnText: "Search Agri Vehicles",
      hasIcon: false
    }
  ];

  // Logic to advance strictly to the NEXT slide item
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  // Logic to return strictly to the PREVIOUS slide item
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  return (
    <div className="w-full bg-white font-sans">
      
      {/* ==================== SLIDER WRAPPER ==================== */}
      <div className="relative w-full min-h-[460px] overflow-hidden border-b border-gray-100 flex items-center">
        
        {/* Track Slider Container with Smooth CSS Transformations */}
        <div 
          className="w-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slidesData.map((slide) => (
            <div 
              key={slide.id} 
              className={`w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-12 gap-8 ${slide.bgColor}`}
            >
              {/* Left Side Slide Graphic */}
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className={`max-h-[320px] object-contain ${slide.id === 'slide4' ? 'hue-rotate-[60deg]' : ''}`}
                />
              </div>

              {/* Right Side Slide Texts */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center">
                <h1 className={`text-4xl md:text-5xl font-black tracking-tight ${slide.textColor}`}>
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                  {slide.subtitle}
                </h2>
                <p className="text-xl md:text-2xl font-extrabold text-gray-950 mt-2 tracking-wide">
                  {slide.tagline}
                </p>
                
                <button className={`mt-6 flex items-center gap-2 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all active:scale-95 text-sm ${slide.accentColor}`}>
                  {slide.hasIcon && <span className="text-[10px]">▶</span>} {slide.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== SEQUENTIAL ARROW CONTROLS ==================== */}
        <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between pointer-events-none z-10">
          <button 
            onClick={handlePrev} 
            className="btn btn-circle btn-ghost text-gray-400 hover:text-gray-900 pointer-events-auto text-xl bg-white/60 hover:bg-white shadow-sm"
          >
            ❮
          </button>
          <button 
            onClick={handleNext} 
            className="btn btn-circle btn-ghost text-gray-400 hover:text-gray-900 pointer-events-auto text-xl bg-white/60 hover:bg-white shadow-sm"
          >
            ❯
          </button>
        </div>

      </div>

      

    </div>
  );
};

export default SequentialHeroSlider;