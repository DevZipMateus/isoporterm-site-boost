
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
    if (isDialogOpen) {
      plugin.current.stop();
    } else {
      plugin.current.play();
    }
  }, [isDialogOpen]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Produtos EPS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossa linha completa de produtos em poliestireno expandido (EPS) 
            para construção civil e isolamento térmico.
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          setApi={setApi}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => {
            if (!isDialogOpen) {
              plugin.current.play();
            }
          }}
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
