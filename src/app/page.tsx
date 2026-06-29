import LoyaltyCard from "@/components/LoyaltyCard";
import GoogleMapsEmbed from "@/components/GoogleMapsEmbed";
import ServicesMenu from "@/components/ServicesMenu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Star, Clock, Phone, MapPin, HeartPulse, Sparkles, MessageCircleHeart } from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen selection:bg-spa-accent selection:text-white pb-20">
      
      {/* NAVIGATION */}
      <Navbar />

      {/* HERO SECTION */}
      <section 
        id="home"
        className="min-h-[80vh] md:min-h-screen flex items-center relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900/60 z-0"></div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="max-w-2xl text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-sm mb-6 border border-white/20">
              Welcome to Relaxation
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Professional Massage Therapy <br className="hidden md:block" />
              <span className="text-[#8b9b8b] font-serif italic">in Digos City</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
              Experience ultimate tranquility and rejuvenation with our expert therapists. 
              Escape the stress of daily life in a calm, elegant environment.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                type="button"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#8b9b8b] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 hover:-translate-y-1 transition-all shadow-lg cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Call to Book: 0951 273 3635
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES MENU */}
      <div id="services" className="scroll-mt-24">
        <ServicesMenu />
      </div>

      {/* HIGHLIGHTS / BENTO GRID */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-spa-text mb-4">Why Choose Us</h3>
            <p className="text-spa-text/70">Premium services tailored for your well-being.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* 24 Hours Card */}
            <div className="md:col-span-1 bg-spa-card rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group border border-spa-accent/10 hover:border-spa-accent/40 transition-colors">
              <div className="absolute top-6 right-6 bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-spa-accent" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-spa-text mb-2">Open 24 Hours</h4>
                <p className="text-spa-text/80 font-medium">
                  We are here whenever you need a moment of peace. Day or night.
                </p>
              </div>
            </div>

            {/* Ventosa Highlight */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group shadow-sm border border-gray-100">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <HeartPulse className="w-64 h-64 text-spa-accent" />
              </div>
              <div className="z-10 max-w-md">
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-bold text-xs uppercase tracking-wider mb-4">
                  Signature Offer
                </span>
                <h4 className="text-3xl font-extrabold text-spa-text mb-4 leading-tight">
                  Free Ventosa <br/> Inclusion
                </h4>
                <p className="text-spa-text/70 text-lg">
                  Enjoy complimentary traditional cupping therapy (Ventosa) with our signature massage packages. Relieve deep muscle tension and improve circulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOYALTY CARD SECTION */}
      <section className="px-6 py-16 bg-white/50 border-y border-spa-accent/10">
        <LoyaltyCard />
      </section>

      {/* GALLERY SECTION */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-spa-text mb-4">A Glimpse of Relaxation</h3>
            <p className="text-spa-text/70">Step into a tranquil space designed for your comfort and peace.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 md:col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-sm group">
              <Image src="/photos/SPA5.jpg" alt="Spa facility large" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-sm group">
              <Image src="/photos/SPA1.jpg" alt="Spa ambiance 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-sm group">
              <Image src="/photos/SPA2.jpg" alt="Spa ambiance 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-sm group">
              <Image src="/photos/SPA3.jpg" alt="Spa ambiance 3" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-sm group">
              <Image src="/photos/SPA4.jpg" alt="Spa ambiance 4" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="px-6 py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <MessageCircleHeart className="w-12 h-12 text-spa-accent mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-spa-text mb-4">Loved by our clients</h3>
          <div className="flex items-center justify-center gap-2 text-spa-text font-medium text-lg">
            Proudly rated <span className="font-bold flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full"><Star className="w-5 h-5 fill-yellow-500 text-yellow-500"/> 4.8/5</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
            <div className="flex text-yellow-400 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-spa-text text-lg italic mb-6">
              "Its a worth sharing experience! Good massage indeed!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-spa-muted rounded-full flex items-center justify-center font-bold text-spa-text">
                LE
              </div>
              <span className="font-bold text-spa-text">Lizamay E.</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
            <div className="flex text-yellow-400 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-spa-text text-lg italic mb-6">
              "Free ventosa... Is legit❤"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-spa-muted rounded-full flex items-center justify-center font-bold text-spa-text">
                AC
              </div>
              <span className="font-bold text-spa-text">Adelfa C.</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}
      <section id="location" className="px-6 py-16 bg-spa-card/30 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-spa-text mb-6">Visit Us</h3>
            <p className="text-spa-text/80 mb-8 text-lg">
              We are conveniently located in Digos City. Drop by for a session or call us to reserve your spot.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <MapPin className="w-6 h-6 text-spa-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-spa-text">Address</h4>
                  <p className="text-spa-text/70 mt-1">
                    Roxas Extension, Digos City<br />
                    in front of Social Security System (SSS)<br />
                    De Leon Espacio Bldg., Second floor beside Van's Barbershop
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Phone className="w-6 h-6 text-spa-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-spa-text">Contact</h4>
                  <p className="text-spa-text/70 mt-1 text-lg">
                    <a href="tel:09512733635" className="hover:text-spa-accent font-medium transition-colors">
                      0951 273 3635
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Clock className="w-6 h-6 text-spa-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-spa-text">Hours</h4>
                  <p className="text-spa-text/70 mt-1 font-medium text-green-700 bg-green-100 inline-block px-2 py-1 rounded-md">
                    Open 24 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full">
            <GoogleMapsEmbed />
          </div>
        </div>
      </section>

    </main>
  );
}
