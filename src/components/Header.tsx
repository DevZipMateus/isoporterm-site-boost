
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs sm:text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="text-primary-foreground whitespace-nowrap">(19) 98360-5710</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="text-primary-foreground truncate max-w-[180px] sm:max-w-none">isoportermvendas@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="text-primary-foreground whitespace-nowrap text-xs sm:text-sm">Seg-Sex: 07:00 às 17:00</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-border/50'
            : 'bg-black/20 backdrop-blur-md'
        }`}
        style={{ top: isScrolled ? '0' : '40px' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/lovable-uploads/e4886997-f303-4511-9bbc-fbde8a8bd927.png" 
                alt="ISOPORTERM Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain flex-shrink-0"
              />
              <div className="min-w-0">
                <h1 className={`text-lg sm:text-xl font-bold transition-colors duration-300 truncate ${
                  isScrolled ? 'text-primary' : 'text-white drop-shadow-lg'
                }`}>
                  ISOPORTERM
                </h1>
                <p className={`text-xs sm:text-sm transition-colors duration-300 truncate ${
                  isScrolled ? 'text-foreground/70' : 'text-white/90 drop-shadow'
                }`}>
                  Soluções em EPS
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors duration-300 whitespace-nowrap ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-white/80 drop-shadow-lg'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Button
                asChild
                size="sm"
                className={`text-xs sm:text-sm px-3 sm:px-4 py-2 min-h-[36px] sm:min-h-[40px] whitespace-nowrap ${
                  isScrolled 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300'
                    : 'bg-white/20 text-white border-2 border-white/60 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-lg'
                }`}
              >
                <a href="https://wa.me/5519983605710" target="_blank" rel="noopener noreferrer">
                  <span className="hidden lg:inline">Orçamento</span>
                  <span className="lg:hidden">Contato</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden lg:hidden bg-white/98 backdrop-blur-md border-t border-border/50">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                asChild 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 w-full mt-4 min-h-[44px] text-sm"
              >
                <a href="https://wa.me/5519983605710" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
