
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center hero-gradient hero-pattern">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="heading-xl mb-6">
              Soluções Inovadoras em
              <span className="block text-accent"> EPS Poliestireno</span>
            </h1>
            
            <p className="text-hero mb-8 max-w-2xl mx-auto">
              A flexibilidade e praticidade do poliestireno expandido (EPS) possibilitam 
              projetos cada vez mais inovadores, econômicos e sustentáveis para a construção civil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                asChild
                size="lg"
                className="btn-hero text-lg px-8 py-6"
              >
                <a href="https://wa.me/5519983605710" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#servicos')}
                className="bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary text-lg px-8 py-6"
              >
                Nossos Serviços
              </Button>
            </div>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-white/80">Materiais de alta qualidade e durabilidade</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiência</h3>
              <p className="text-white/80">Anos de experiência no mercado de EPS</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento</h3>
              <p className="text-white/80">Suporte especializado e personalizado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
