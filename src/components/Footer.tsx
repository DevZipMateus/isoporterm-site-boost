
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/e4886997-f303-4511-9bbc-fbde8a8bd927.png" 
                alt="ISOPORTERM Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">ISOPORTERM</h3>
                <p className="text-primary-foreground/80 text-sm">Soluções em EPS</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Especializada em soluções inovadoras em EPS (poliestireno expandido) 
              para construção civil, oferecendo qualidade e tecnologia de ponta.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/isoporterm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">(19) 98360-5710</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">isoportermvendas@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Rua André Bertoldi, 73<br />
                  Pq Via Norte - Campinas/SP
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Funcionamento</h4>
            <div className="space-y-4">
              <div>
                <p className="text-primary-foreground/80">Segunda a Sexta</p>
                <p className="text-primary-foreground font-medium">07:00 às 17:00</p>
              </div>
              <div className="mt-6">
                <h5 className="font-medium mb-2">CNPJ</h5>
                <p className="text-primary-foreground/80 text-sm">07.778.157/0001-91</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} ISOPORTERM COMÉRCIO DE ISOPOR. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#inicio" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-300">
                Início
              </a>
              <a href="#sobre" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-300">
                Sobre
              </a>
              <a href="#servicos" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-300">
                Serviços
              </a>
              <a href="#contato" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-300">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
