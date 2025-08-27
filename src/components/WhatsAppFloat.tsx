
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        asChild
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
      >
        <a 
          href="https://wa.me/5519983605710" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
        >
          <img 
            src="/lovable-uploads/2a5f8023-86fc-4e30-ae37-dd1a02189419.png" 
            alt="WhatsApp" 
            className="h-8 w-8"
          />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
