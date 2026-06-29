import { Sparkles, HeartPulse, Gift } from "lucide-react";

export default function ServicesMenu() {
  return (
    <section className="px-6 py-24 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-extrabold text-spa-text mb-6 tracking-tight">Our Services</h3>
          <p className="text-spa-text/80 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Prices start at just ₱300.00. Avail any of our services and get a <span className="font-bold text-spa-accent">FREE VENTOSA</span>.
          </p>
        </div>

        <div className="space-y-20">
          {/* Category 1 */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8 border-b border-spa-accent/20 pb-4">
              <Sparkles className="text-spa-accent w-7 h-7" />
              <h4 className="text-2xl font-bold text-spa-text">Signature Massages</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard 
                title="Combination of Swedish & Shiatsu"
                desc="Experience the perfect blend of relaxation and healing. Combines soothing strokes with targeted pressure for a deeply refreshing body experience. Relieves stress and eases muscle tension."
              />
              <ServiceCard 
                title="Thai Yoga Massage"
                desc="Feel your body loosen and lengthen with deep stretches and rhythmic movements that improve flexibility, relieve tension, and boost energy flow."
              />
              <ServiceCard 
                title="Hot Stone Massage"
                desc="Experience deep relaxation with warm, soothing stones combined with gentle massage to melt away stress and ease muscle tension."
              />
              <ServiceCard 
                title="Body Massage"
                desc="A therapeutic practice involving the manipulation of soft tissues to promote relaxation, relieve muscle tension, and improve overall well-being."
              />
            </div>
          </div>

          {/* Category 2 */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8 border-b border-spa-accent/20 pb-4">
              <HeartPulse className="text-spa-accent w-7 h-7" />
              <h4 className="text-2xl font-bold text-spa-text">Targeted Therapies & Treatments</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                title="Reflexology (Foot & Hand Reflex)"
                desc="Stimulates pressure points to improve circulation and restore balance."
              />
              <ServiceCard 
                title="Foot & Head Massage"
                desc="Soothing foot massage with reflexology points, relaxing head/scalp massage, and light pressure on temples, neck, and shoulders."
              />
              <ServiceCard 
                title="Body Scrub"
                desc="Exfoliates and nourishes, removes dead skin cells, leaving skin soft, smooth, and glowing."
              />
              <ServiceCard 
                title="Ear Candling"
                desc="Promotes relaxation, helps relieve pressure/sinus discomfort, and provides a calming experience."
              />
              <ServiceCard 
                title="Hot Bag"
                desc="Relieves muscle pain and stiffness, improves blood circulation, and helps reduce inflammation."
              />
              <ServiceCard 
                title="Our Free Ventosa"
                desc="A traditional cupping therapy that relieves muscle tension, improves circulation, and leaves your body feeling lighter and refreshed."
                highlight={true}
              />
            </div>
          </div>
          
          {/* Category 3 */}
          <div>
            <div className="bg-spa-card/60 border border-spa-accent/40 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm group hover:border-spa-accent transition-colors">
              <div className="absolute -top-10 -right-10 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Gift className="w-64 h-64 text-spa-accent" />
              </div>
              <div className="relative z-10">
                <span className="inline-block bg-spa-accent text-white px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm">
                  Special Promo
                </span>
                <h4 className="text-3xl md:text-4xl font-extrabold text-spa-text mb-3">
                  Family Collab Promo
                </h4>
                <p className="text-xl font-serif italic text-spa-accent mb-8">
                  Elle's Massage Spa x Playtown
                </p>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl max-w-2xl border border-white shadow-sm">
                  <p className="text-spa-text/80 italic text-lg mb-4 border-l-4 border-spa-accent pl-4">
                    "Perfect date for the family."
                  </p>
                  <p className="text-spa-text font-medium text-lg leading-relaxed">
                    <strong className="text-2xl text-spa-accent block mb-2">2 Persons for ONLY ₱500</strong>
                    (1-hour whole body massage) <br/>
                    <span className="mt-4 block pt-4 border-t border-gray-100">Plus, get a Gift Voucher for <strong className="text-spa-text">25% OFF at Playtown</strong>.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, highlight = false }: { title: string, desc: string, highlight?: boolean }) {
  return (
    <div className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${highlight ? 'bg-[#FAEDCD] border-spa-accent/50 shadow-sm' : 'bg-white border-gray-100 hover:border-spa-accent/30'}`}>
      <h5 className="text-xl font-bold text-spa-text mb-4 leading-tight">{title}</h5>
      <p className="text-spa-text/75 leading-relaxed">{desc}</p>
    </div>
  )
}
