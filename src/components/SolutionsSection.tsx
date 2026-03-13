"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import solutionsPackaging from "@/assets/solutions-packaging.jpg";
import solutionsBranding from "@/assets/solutions-branding.jpg";
import solucionescar from "@/assets/soluciones-car.png";
import solucionescolores from "@/assets/soluciones-colores.jpeg";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Premium packaging solutions",
    description:
      "Custom luxury packaging designed to elevate your brand presentation. From product boxes to gift packaging, we craft every detail with precision.",
    image: solutionsPackaging,
    alt: "Premium custom packaging boxes",
  },
  {
    title: "Corporate branding solutions",
    description:
      "Packaging and branding materials for product launches, corporate events, and brand identity. Make every touchpoint memorable.",
    image: solutionsBranding,
    alt: "Corporate branded packaging and bags",
  },
  {
    title: "Servicio de Car Wrapping",
    description:
      "Elevamos la estética de tu vehículo al siguiente nivel. Especialistas en car wrapping de alta gama — totalmente reversible, infinidad de colores y acabados, protege la pintura original.",
    image: solucionescar,
    alt: "Servicio de car wrapping premium",
  },
  {
    title: "Diseño Personalizado",
    description:
      "Creamos el diseño perfecto para tu producto o vehículo. Desde el concepto hasta la producción final, nuestro equipo da vida a tu visión con materiales y acabados premium.",
    image: solucionescolores,
    alt: "Diseño personalizado y branding premium",
  },
];

const SolutionsSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((sol, index) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false }}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sol.image.src}
                  alt={sol.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{sol.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{sol.description}</p>
                <Button variant="cta" onClick={() => scrollTo("#quote")}>
                  Request a quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
