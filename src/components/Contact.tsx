
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-lg text-primary mb-6">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atender você e desenvolver a melhor solução 
              para seu projeto. Fale conosco através dos canais abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-up">
              <h3 className="heading-md text-foreground mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(19) 98360-5710</p>
                    <Button 
                      asChild
                      className="bg-primary/10 text-primary border-2 border-primary/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 mt-2"
                    >
                      <a href="https://wa.me/5519983605710" target="_blank" rel="noopener noreferrer">
                        Conversar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">isoportermvendas@gmail.com</p>
                    <Button 
                      asChild
                      variant="outline"
                      className="bg-primary/10 text-primary border-2 border-primary/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 mt-2"
                    >
                      <a href="mailto:isoportermvendas@gmail.com">
                        Enviar Email
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua André Bertoldi, 73<br />
                      Pq Via Norte - Campinas/SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 07:00 às 17:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Instagram</h4>
                    <p className="text-muted-foreground">@isoporterm</p>
                    <Button 
                      asChild
                      variant="outline"
                      className="bg-primary/10 text-primary border-2 border-primary/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 mt-2"
                    >
                      <a href="https://www.instagram.com/isoporterm/" target="_blank" rel="noopener noreferrer">
                        Seguir no Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="heading-md mb-6">
                  Solicite seu Orçamento
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Precisando de soluções em EPS para seu projeto? Nossa equipe 
                  especializada está pronta para desenvolver a solução ideal para 
                  suas necessidades específicas.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-white/20 text-white border-2 border-white/80 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-lg w-full text-lg"
                  >
                    <a href="https://wa.me/5519983605710" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-5 w-5" />
                      WhatsApp: (19) 98360-5710
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white/20 text-white border-2 border-white/80 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-lg w-full text-lg"
                  >
                    <a href="mailto:isoportermvendas@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      isoportermvendas@gmail.com
                    </a>
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">CNPJ</h4>
                  <p className="text-white/90">07.778.157/0001-91</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
