import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-4 bg-white border-b border-neutral-200 shadow-sm sticky top-0 z-50">
      <div className="font-bold text-xl text-navy">
        <Image
          src="/img/logo-1.png"
          alt="B-LINE STUDIO Logo"
          width={170}
          height={85}
          className="block -mt-4"
          priority
        />
      </div>
      <nav>
        <ul className="flex gap-5 list-none m-0 p-0">
          <li>
            <a
              href="#"
              className="no-underline text-navy font-medium text-[0.95rem] tracking-wide transition-colors hover:text-orange"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="no-underline text-navy font-medium text-[0.95rem] tracking-wide transition-colors hover:text-orange"
            >
              Soluciones
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="no-underline text-navy font-medium text-[0.95rem] tracking-wide transition-colors hover:text-orange"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="no-underline text-navy font-medium text-[0.95rem] tracking-wide transition-colors hover:text-orange"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
