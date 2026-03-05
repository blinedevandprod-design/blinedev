"use client";

import { useRef, useEffect } from "react";

const beneficios = [
  {
    icon: "fa-solid fa-shield-halved",
    text: "Protege la pintura original del vehiculo",
  },
  {
    icon: "fa-solid fa-rotate-left",
    text: "Totalmente reversible cuando quieras",
  },
  {
    icon: "fa-solid fa-palette",
    text: "Infinidad de colores y acabados",
  },
  {
    icon: "fa-solid fa-medal",
    text: "Mayor durabilidad que una pintura convencional",
  },
  {
    icon: "fa-solid fa-star",
    text: "Aumenta el valor estetico del vehiculo",
  },
];

export default function CarWrapping() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <section id="carwrapping" className="cw-section">
      <div className="shrink-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-[550px] h-[550px] m-[90px] object-cover rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] block"
        >
          <source src="/img/future.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex-none w-[480px] pl-0">
        <h2 className="font-serif text-6xl tracking-widest text-white leading-none mb-4">
          {"Servicio de "}
          <span className="text-orange">Car Wrapping</span>
        </h2>
        <p className="text-base text-text-muted leading-loose mb-6">
          En B-LINE STUDIO, elevamos la estetica de tu vehiculo al siguiente
          nivel. Especialistas en car wrapping de alta gama, ofrecemos una
          solucion innovadora para quienes buscan personalizar su auto sin
          comprometer la pintura original.
        </p>
        <h3 className="text-xl mb-3 text-orange font-semibold">Beneficios</h3>
        <ul className="list-none p-0 flex flex-col gap-2.5">
          {beneficios.map((b) => (
            <li key={b.text} className="cw-benefit">
              <i className={b.icon} />
              {b.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
