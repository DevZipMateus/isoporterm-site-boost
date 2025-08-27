
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
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/0d86829c-b0a1-49bf-8dcf-cff66127af92.png')`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="heading-xl mb-6 text-white drop-shadow-2xl">
              Soluções Inovadoras em
              <span className="block text-white drop-shadow-2xl"> EPS Poliestireno</span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto text-white drop-shadow-lg">
              A flexibilidade e praticidade do poliestireno expandido (EPS) possibilitam 
              projetos cada vez mais inovadores, econômicos e sustentáveis para a construção civil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                asChild
                size="lg"
                className="bg-white/20 text-white border-2 border-white/80 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-lg text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 min-h-[48px] sm:min-h-[52px] lg:min-h-[56px]"
              >
                <a href="https://wa.me/5519983605710" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center whitespace-nowrap">
                  <span className="truncate">Solicitar Orçamento</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#servicos')}
                className="bg-white/20 text-white border-2 border-white/80 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-lg text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 min-h-[48px] sm:min-h-[52px] lg:min-h-[56px]"
              >
                <span className="whitespace-nowrap">Nossos Serviços</span>
              </Button>
            </div>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 border border-white/30">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">Qualidade Garantida</h3>
              <p className="text-white drop-shadow-lg">Materiais de alta qualidade e durabilidade</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 border border-white/30">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">Experiência</h3>
              <p className="text-white drop-shadow-lg">Anos de experiência no mercado de EPS</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 border border-white/30">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">Atendimento</h3>
              <p className="text-white drop-shadow-lg">Suporte especializado e personalizado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
