"use client";

import { useState, useCallback } from "react";

const thumbnails = [
  { src: "/img/coffe.jpg", alt: "Coffee packaging" },
  { src: "/img/car-war.png", alt: "Car wrapping" },
  { src: "/img/toamtos.png", alt: "Tomato packaging" },
  { src: "/img/cajas-box.png", alt: "Box packaging" },
  { src: "/img/box-blac.png", alt: "Black box" },
  { src: "/img/color-orange.jpg", alt: "Orange packaging" },
];

const servicios = [
  {
    icon: "fa-solid fa-box-open",
    title: "Packaging Premium",
    desc: "Cajas de lujo personalizadas para tu marca",
  },
  {
    icon: "fa-solid fa-car",
    title: "CAR WRAPPING",
    desc: "Elevamos la estetica de tu vehiculo al siguiente nivel.",
    href: "#carwrapping",
  },
  {
    icon: "fa-solid fa-pen-ruler",
    title: "Diseno Personalizado",
    desc: "Creamos el diseno perfecto para tu producto",
  },
  {
    icon: "fa-solid fa-truck-fast",
    title: "Entrega Express",
    desc: "Envios rapidos a todo el pais",
  },
  {
    icon: "fa-solid fa-leaf",
    title: "Materiales Eco",
    desc: "Packaging sostenible y responsable",
  },
];

export default function Vitrina() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleThumbnailClick = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setOpacity(0);
      setTimeout(() => {
        setActiveIndex(index);
        setOpacity(1);
      }, 300);
    },
    [activeIndex]
  );

  return (
    <section id="servicios" className="vitrina">
      {/* LEFT: Photos */}
      <div className="flex-1 flex flex-col gap-4">
        <div
          className="foto-principal"
          style={{
            backgroundImage: `url('${thumbnails[activeIndex].src}')`,
            opacity,
          }}
          role="img"
          aria-label={thumbnails[activeIndex].alt}
        />
        <div className="flex gap-2.5 flex-wrap">
          {thumbnails.map((thumb, i) => (
            <div
              key={thumb.src}
              className={`miniatura ${i === activeIndex ? "activa" : ""}`}
              style={{ backgroundImage: `url('${thumb.src}')` }}
              onClick={() => handleThumbnailClick(i)}
              role="button"
              tabIndex={0}
              aria-label={`Ver ${thumb.alt}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleThumbnailClick(i);
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: Services */}
      <div className="flex-1 flex flex-col gap-5 justify-center">
        <h2 className="text-3xl text-navy m-0 mb-2.5 tracking-tight">
          Nuestros Servicios
        </h2>
        {servicios.map((s) => {
          const content = (
            <>
              <span className="servicio-icon">
                <i className={s.icon} />
              </span>
              <div>
                <h3 className="m-0 mb-1 text-base text-navy font-semibold">
                  {s.title}
                </h3>
                <p className="m-0 text-sm text-text-body leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </>
          );

          return s.href ? (
            <a
              key={s.title}
              href={s.href}
              className="servicio no-underline cursor-pointer"
            >
              {content}
            </a>
          ) : (
            <div key={s.title} className="servicio">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
