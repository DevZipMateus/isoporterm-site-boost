
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marianne',
      text: 'Qualidade no EPS só tenho a agradecer pela rapidez na entrega',
      rating: 5
    },
    {
      name: 'João',
      text: 'Atendimento ótimo e material de qualidade',
      rating: 5
    },
    {
      name: 'Cris',
      text: 'Super indico essa empresa qualidade e entrega boa',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-lg text-primary mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              A satisfação dos nossos clientes é nossa maior recompensa. 
              Veja o que eles têm a dizer sobre nossos produtos e serviços.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card rounded-2xl p-6 relative animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="bg-primary rounded-full p-3">
                    <Quote className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted text-center mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Cliente ISOPORTERM
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                <div className="text-sm text-muted-foreground">Avaliação Média</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Tempo de Resposta</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">+1000</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
