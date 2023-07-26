import Image from "next/image";
import Logo from "@/assets/Logo.png";

export default function Footer() {
  const linksFirst = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Industria", href: "/industria" },
    { label: "Mobil SHC", href: "/mobil-shc" },
  ];
  const linksSecond = [
    { label: "Automotriz", href: "/automotriz" },
    { label: "Mobil 1", href: "/mobil-1" },
    { label: "Mobil Super", href: "/mobil-super" },
    {
      label: "Transporte y Minería",
      href: "/transporte-y-mineria",
    },
  ];
  const linksThird = [
    {
      label: "Industria/Product Selector",
      href: "https://www.mobil.com.mx/es-mx/lubricantes/industrial",
      target: "_blank",
    },
    {
      label: "Automotriz/Product Selector",
      href: "/Automotriz-Aceites-Product-Selector.pdf",
      target: "_blank",
    },
    { label: "Contacto", href: "/" },
  ];

  return (
    <div className="bg-[#7F7F7F] lg:h-48 p-4 flex flex-col lg:flex-row justify-between lg:items-center">
      <div>
        <p className="font-['Arsenal'] text-white font-bold text-lg pt-2">
          Mapa del sitio
        </p>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="flex flex-col space-y-2 lg:space-y-1">
            {linksFirst.map((link) => {
              return (
                <a
                  href={link.href}
                  className="hover:underline decoration-white"
                >
                  <p className="text-white font-['Arsenal'] text-md lg:text-lg">
                    {link.label}
                  </p>
                </a>
              );
            })}
          </div>
          <div className="flex flex-col space-y-2 lg:space-y-1">
            {linksSecond.map((link) => {
              return (
                <a
                  href={link.href}
                  className="hover:underline decoration-white"
                >
                  <p className="text-white font-['Arsenal'] text-md lg:text-lg">
                    {link.label}
                  </p>
                </a>
              );
            })}
          </div>
          <div className="flex flex-col space-y-2 lg:space-y-1">
            {linksThird.map((link) => {
              return (
                <a
                  href={link.href}
                  target={link.target}
                  className="hover:underline decoration-white"
                >
                  <p className="text-white font-['Arsenal'] text-md lg:text-lg">
                    {link.label}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <a href="tel:000-000-0000" className="hover:underline decoration-white py-2">
        <p className="text-white font-['Arsenal'] text-md lg:text-lg">
          Tel. 000 000 0000
        </p>
      </a>
      <a href="/" className="flex justify-center h-24 w-full lg:w-auto">
        <Image src={Logo} className="h-24 w-auto" alt="Logo" />
      </a>
    </div>
  );
}
