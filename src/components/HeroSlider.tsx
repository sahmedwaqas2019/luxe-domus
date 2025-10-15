import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Luxury Living Redefined",
    subtitle: "Discover Your Dream Property",
  },
  {
    image: hero2,
    title: "Elegant Urban Residences",
    subtitle: "Where Sophistication Meets Comfort",
  },
  {
    image: hero3,
    title: "Coastal Paradise Awaits",
    subtitle: "Experience Beachfront Excellence",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-accent",
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80"></div>
              </div>
              
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl animate-fade-in">
                  <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                      View Properties
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-primary-foreground/70" />
      </div>
    </div>
  );
};

export default HeroSlider;
