import React, { useState, useEffect } from "react";
import { FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaX } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function ComingSoon() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of background images - you can replace these with your actual image paths
  const backgroundImages = [
    '/bg1.webp',
    '/bg2.webp',
    '/bg3.webp',
    '/bg4.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br bg-[#5C0099] px-4">
      {/* Image Slider Background */}
      <div className="absolute inset-0 bg-cover bg-center z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1100 ${
              index === currentImageIndex ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-[#FFD500] scale-110' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Animated circles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-200 rounded-full opacity-20 -translate-x-20 -translate-y-20 md:-translate-x-32 md:-translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 md:w-80 md:h-80 bg-purple-300 rounded-full opacity-15 translate-x-20 translate-y-20 md:translate-x-32 md:translate-y-32"></div>
      </div>
      
      {/* Main content card */}
      <div className="relative bg-gradient-to-br backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col items-center max-w-xl w-full border border-white/20">
        {/* Animated decorative elements */}
        <div className="absolute -top-5 -right-5 w-16 h-16 md:w-24 md:h-24 bg-[#FFD500] rounded-full opacity-80 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute -bottom-6 -left-6 w-14 h-14 md:w-20 md:h-20 bg-white rounded-full opacity-10 animate-pulse"></div>
        
        {/* Logo */}
        <div className="mb-6 md:mb-8 relative">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-[#5C0099] to-white/30 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-18 h-18 md:w-24 md:h-24 bg-gradient-to-br rounded-full flex items-center justify-center shadow-inner">
              {/* logo url */}
              <img 
                src="/AUTOSELL(rounded).png" 
                alt="AutoSell Logo" 
                className="w-18 h-18 md:w-24 md:h-24 object-contain"
              />
            </div>
          </div>
          <div className="absolute -inset-1 md:-inset-2 border-2 border-[#FFD500]/30 rounded-full animate-pulse"></div>
        </div>
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFD500] to-yellow-300">
          COMING SOON
        </h1>
        
        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 text-center leading-relaxed">
          Get ready! Our classified ad platform is almost here. 
          <span className="block mt-2">Stay tuned for something amazing!</span>
        </p>
        
        {/* Social Links */}
        <div className="flex space-x-4 md:space-x-5 mt-6 md:mt-8">
          <a 
            href="https://www.tiktok.com/@autosell.lk?_t=ZS-8ymKYNU0sFR&_r=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FFD500] transition-colors duration-300 p-2"
            aria-label="TikTok"
          >
            <FaTiktok size={20} className="md:w-6 md:h-6" />
          </a>
          <a 
            href="https://x.com/autoselllk?s=21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FFD500] transition-colors duration-300 p-2"
            aria-label="X (Twitter)"
          >
            <FaX size={20} className="md:w-6 md:h-6" />
          </a>
          <a 
            href="https://www.facebook.com/share/1AyNe2Z4ej/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FFD500] transition-colors duration-300 p-2"
            aria-label="Facebook"
          >
            <FaFacebook size={20} className="md:w-6 md:h-6"/>
          </a>
          <a 
            href="https://wa.me/94781739510?text=Hello%20AutoSell,%20I'm%20interested%20in%20your%20services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FFD500] transition-colors duration-300 p-2"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={22} className="md:w-6 md:h-6"/>
          </a>
        </div>
        
        {/* Email address */}
        <div className="flex flex-col items-center gap-2 w-full mt-4 md:mt-6">
          <a 
            href="mailto:autosell.lk@gmail.com" 
            className="text-sm md:text-base text-gray-200 hover:text-[#FFD500] transition-colors duration-300 flex items-center"
          >
            <MdOutlineEmail className="mr-2" size={18} />
            info@autosell.lk
          </a>
        </div>
      </div>
    </div>
  );
}