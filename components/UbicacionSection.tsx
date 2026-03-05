export default function UbicacionSection() {
  return (
    <section className="ubicacion-section">
      <a
        href="https://maps.google.com/?q=TU_DIRECCION"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 no-underline"
      >
        <div className="ubicacion-img">
          <div className="ubicacion-overlay">
            <i className="fa-solid fa-magnifying-glass" />
            <span>Ver en Maps</span>
          </div>
        </div>
      </a>

      <div className="flex-1 flex flex-col gap-4">
        <div className="w-14 h-14 bg-orange rounded-full flex items-center justify-center text-white text-xl shadow-[0_4px_14px_rgba(255,107,0,0.4)]">
          <i className="fa-solid fa-location-dot" />
        </div>
        <h2 className="text-3xl text-navy m-0 tracking-tight">
          {"Donde estamos?"}
        </h2>
        <p className="text-base text-text-dark m-0 leading-relaxed">
          Av. Tu Direccion 123, Ciudad, Pais
        </p>
        <p className="text-[0.95rem] text-text-body m-0 flex items-center gap-2">
          <i className="fa-solid fa-clock text-orange" />
          Lun - Sab: 9:00am - 7:00pm
        </p>
        <a
          href="https://maps.google.com/?q=TU_DIRECCION"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-orange text-white px-7 py-3.5 rounded-lg no-underline font-semibold text-[0.95rem] mt-2 transition-all shadow-[0_4px_14px_rgba(255,107,0,0.35)] hover:bg-orange-dark hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,107,0,0.45)] w-fit"
        >
          <i className="fa-solid fa-map-location-dot" />
          Abrir en Google Maps
        </a>
      </div>
    </section>
  );
}
