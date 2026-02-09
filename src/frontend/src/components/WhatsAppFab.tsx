import { MessageCircle } from 'lucide-react';

export function WhatsAppFab() {
  // Phone number from footer: +91 81124 38846
  // Format for wa.me: remove spaces and special chars, keep country code
  const phoneNumber = '918112438846';
  const message = encodeURIComponent('Hi Solar Sparkle, I want to know more about solar solutions.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 group"
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
    </a>
  );
}
