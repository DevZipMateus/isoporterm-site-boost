
import { Building2, Lightbulb, Recycle, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Building2,
      title: 'Construção Civil',
      description: 'Soluções completas para estrutura e acabamentos em obras de todos os portes'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Tecnologia de ponta e projetos inovadores com materiais sustentáveis'
    },
    {
      icon: Recycle,
      title: 'Sustentabilidade',
      description: 'Produtos ecológicos que contribuem para construções mais sustentáveis'
    },
    {
      icon: TrendingUp,
      title: 'Economia',
      description: 'Otimização de custos e métodos construtivos mais eficientes'
    }
  ];

  return (
    <section id="sobre" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-lg text-primary mb-6">
              Sobre a ISOPORTERM
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                A ISOPORTERM é uma empresa voltada para soluções em EPS, 
                tecnologia de ponta para várias áreas. Especializada em 
                poliestireno expandido para construção civil.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                As inovações do EPS Isopor® na construção civil vêm substituindo 
                muitos materiais e otimizando os métodos construtivos no mundo todo. 
                Destacamos inúmeros benefícios para arquitetura, engenharia e construção.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Company Info */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="heading-md text-primary mb-4">
                  Nossa Missão
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Fornecer soluções inovadoras em EPS que atendam às necessidades 
                  específicas de cada projeto, priorizando qualidade, sustentabilidade 
                  e eficiência econômica.
                </p>
                <p className="text-foreground leading-relaxed">
                  Comprometidos com a excelência no atendimento e na entrega de 
                  produtos que superem as expectativas dos nossos clientes.
                </p>
              </div>
              <div className="bg-primary/5 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-foreground/70">Qualidade</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">24h</div>
                    <div className="text-sm text-foreground/70">Resposta</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">+1000</div>
                    <div className="text-sm text-foreground/70">Projetos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">5★</div>
                    <div className="text-sm text-foreground/70">Avaliação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
