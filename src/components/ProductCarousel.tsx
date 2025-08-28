import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const ProductCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const images = [
    {
      src: "/lovable-uploads/2890abe2-a9be-4252-a1dc-7328755d7fb0.png",
      alt: "Blocos de EPS empilhados"
    },
    {
      src: "/lovable-uploads/fcee6b17-a379-45c5-a288-96dffa533171.png",
      alt: "Isoporterm com de Isopor - Aplicação em construção"
    },
    {
      src: "/lovable-uploads/22ae31e8-52e1-46ac-b5b7-d915c2b69b23.png",
      alt: "Caminhão Isoporterm - Transporte especializado"
    },
    {
      src: "/lovable-uploads/2b4546dc-c411-4ef3-a91b-1a475fb5c99a.png",
      alt: "EPS triturado para isolamento térmico"
    },
    {
      src: "/lovable-uploads/73654c22-cbcc-49e9-ad7f-3418ad47c2b1.png",
      alt: "Blocos de EPS de alta qualidade"
    },
    {
      src: "/lovable-uploads/f7059dba-eafa-440d-bc64-3afbec1bfa39.png",
      alt: "Blocos de EPS para construção"
    },
    {
      src: "/lovable-uploads/2333ed12-a734-4b49-8492-6bebd67a49ef.png",
      alt: "Estoque de blocos EPS organizados"
    },
    {
      src: "/lovable-uploads/752dfbcc-27fb-4f70-91f3-cb75d69a5478.png",
      alt: "EPS triturado em embalagem"
    },
    {
      src: "/lovable-uploads/9f97c018-1489-4116-8e52-983f8d927928.png",
      alt: "Placas de EPS empilhadas"
    },
    {
      src: "/lovable-uploads/4f1cb37b-4516-40cc-8009-0e04f2dadadd.png",
      alt: "Cilindros de EPS - Peças técnicas especializadas"
    },
    {
      src: "/lovable-uploads/5c254c55-affb-4cca-943b-f7736ffa02fa.png",
      alt: "Placas de EPS em degraus - Componentes estruturais"
    },
    {
      src: "/lovable-uploads/d23aac45-c228-41a5-b8dd-3e9c7734b105.png",
      alt: "Canaleta de EPS - Perfil técnico especial"
    },
    {
      src: "/lovable-uploads/562ddf26-c5fb-4bd3-83b8-b918dd677a07.png",
      alt: "Discos de EPS em vários diâmetros - 15cm, 20cm, 25cm, 30cm"
    },
    {
      src: "/lovable-uploads/4b740dfd-d5f1-4d7d-b132-a224e4074432.png",
      alt: "Placa ondulada de EPS - Isolamento térmico especializado"
    },
    {
      src: "/lovable-uploads/5797a592-6cfe-48ff-a846-d31806910212.png",
      alt: "Blocos de EPS com medidas técnicas - 4000mm x 1200mm x 1000mm"
    },
    {
      src: "/lovable-uploads/275c4779-4ae2-4276-b671-d415e3ef3e53.png",
      alt: "Moldura decorativa de EPS - Acabamento arquitetônico"
    },
    {
      src: "/lovable-uploads/a761524d-2e3f-43a6-9fd2-3028e9e1741e.png",
      alt: "Moldura de canto em EPS - Detalhes arquitetônicos"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Controla o autoplay baseado no estado do dialog
  React.useEffect(() => {
    if (!api) return;

    // Wait for the next tick to ensure the plugin is properly initialized
    const timer = setTimeout(() => {
      if (isDialogOpen) {
        try {
          plugin.current?.stop?.();
        } catch (error) {
          console.log("Error stopping autoplay:", error);
        }
      } else {
        try {
          plugin.current?.reset?.();
        } catch (error) {
          console.log("Error resetting autoplay:", error);
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [isDialogOpen, api]);

  const handleMouseEnter = () => {
    if (api) {
      try {
        plugin.current?.stop?.();
      } catch (error) {
        console.log("Error stopping autoplay on hover:", error);
      }
    }
  };

  const handleMouseLeave = () => {
    if (api && !isDialogOpen) {
      try {
        plugin.current?.reset?.();
      } catch (error) {
        console.log("Error resetting autoplay on leave:", error);
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Produtos EPS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossa linha completa de produtos em poliestireno expandido (EPS) 
            para construção civil, isolamento térmico e peças técnicas especializadas.
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          setApi={setApi}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Dialog onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <CardContent className="p-0">
                          <div className="aspect-square overflow-hidden rounded-lg">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto max-h-[80vh] object-contain"
                        />
                        <div className="p-4 bg-white">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {image.alt}
                          </h3>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
