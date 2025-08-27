
import { 
  Building, 
  Layers, 
  Shield, 
  Package, 
  Thermometer, 
  FileText, 
  Zap, 
  Home,
  Waves
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Lajota Unidirecional',
      description: 'Estruturas de laje com excelente resistência e leveza para construções eficientes.'
    },
    {
      icon: Layers,
      title: 'Lajota Bidirecional',
      description: 'Soluções avançadas para lajes com distribuição de cargas em duas direções.'
    },
    {
      icon: Shield,
      title: 'Placas de Junta de Dilatação',
      description: 'Proteção e flexibilidade para estruturas sujeitas a movimentações térmicas.'
    },
    {
      icon: Package,
      title: 'Colchão (Estrutura de Isopor)',
      description: 'Base estrutural em EPS para diversas aplicações na construção civil.'
    },
    {
      icon: Thermometer,
      title: 'Isolamento Termoacústico',
      description: 'Placas especializadas para controle térmico e acústico em edificações.'
    },
    {
      icon: FileText,
      title: 'Placas de Papelaria',
      description: 'Materiais versáteis para acabamentos e aplicações decorativas.'
    },
    {
      icon: Zap,
      title: 'Flocos de Isopor (Triturado)',
      description: 'Material triturado para enchimentos e aplicações especiais.'
    },
    {
      icon: Home,
      title: 'Placas de Enchimento de Piso',
      description: 'Nivelamento e isolamento para pisos com máxima eficiência.'
    },
    {
      icon: Waves,
      title: 'Telha Termoacústica',
      description: 'Cobertura com isolamento térmico e acústico integrado.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-lg text-primary mb-6">
              Nossos Serviços e Produtos
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma linha completa de produtos em EPS para atender 
              todas as necessidades da construção civil moderna.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="service-card rounded-2xl p-6 group hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white">
            <h3 className="heading-md mb-4">
              Precisa de um Orçamento Personalizado?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe especializada está pronta para desenvolver a solução 
              ideal para seu projeto. Entre em contato e receba um orçamento sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto">
              <Button 
                asChild
                size="lg"
                className="bg-white/20 text-white border-2 border-white/80 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-lg text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 min-h-[48px] sm:min-h-[52px] flex-1 sm:flex-none"
              >
                <a href="https://wa.me/5519983605710" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <span className="truncate">WhatsApp: (19) 98360-5710</span>
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-white/20 text-white border-2 border-white/80 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-lg text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 min-h-[48px] sm:min-h-[52px] flex-1 sm:flex-none"
              >
                <a href="mailto:isoportermvendas@gmail.com" className="flex items-center justify-center">
                  <span className="truncate">Email: isoportermvendas@gmail.com</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
