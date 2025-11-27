import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/254710208435', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-gold text-royal-navy p-4 rounded-full shadow-lg shadow-gold/40 hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/50 hover:scale-110 transition-all duration-300 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-royal-navy text-warm-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md shadow-royal-navy/40">
        Chat with us
      </span>
    </button>
  );
}
