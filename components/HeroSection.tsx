import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex justify-between items-center px-12 py-28 bg-gradient-to-br from-navy to-navy-light text-white">
      <div className="max-w-[50%]">
        <h1 className="text-4xl font-bold mb-5 leading-tight tracking-tight text-balance">
          Tu packaging de lujo, listo cuando lo necesitas
        </h1>
        <p className="text-lg text-text-muted mb-8 leading-relaxed">
          Elegancia y rapidez en cada detalle
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="px-7 py-3 rounded-md no-underline font-semibold text-[0.95rem] tracking-wide bg-orange text-white shadow-[0_4px_14px_rgba(255,107,0,0.35)] transition-all hover:bg-orange-dark hover:shadow-[0_6px_18px_rgba(255,107,0,0.45)] hover:-translate-y-0.5"
          >
            Cotizar Express
          </a>
          <a
            href="#"
            className="px-7 py-3 rounded-md no-underline font-semibold text-[0.95rem] tracking-wide bg-transparent border-2 border-orange text-orange transition-all hover:bg-orange hover:text-white hover:-translate-y-0.5"
          >
            Ver Catalogo
          </a>
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src="/img/box-2.png"
          alt="Caja Premium"
          width={780}
          height={520}
          className="rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          priority
        />
      </div>
    </section>
  );
}
