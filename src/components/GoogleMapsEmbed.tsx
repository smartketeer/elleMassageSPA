export default function GoogleMapsEmbed() {
  return (
    <div className="w-full h-[400px] bg-spa-card/50 rounded-2xl border border-spa-accent/20 flex flex-col overflow-hidden">
      <iframe
        src="https://maps.google.com/maps?q=6.750162207224987,125.34485631534224&t=&z=17&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Elle's Massage Spa Location"
      ></iframe>
    </div>
  );
}
