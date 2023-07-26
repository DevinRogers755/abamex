"use client";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import List from "@/assets/List.svg";
import Close from "@/assets/Close.svg";
import Dropdown from "@/assets/Dropdown.svg";
import ContactButton from "@/components/ContactButton";
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const links = [
    { label: "Inicio", href: "/", expandable: false },
    { label: "Nosotros", href: "/nosotros", expandable: false },
    {
      label: "Industria",
      expandable: true,
      dropdownID: 0,
      options: [
        { label: "Inicio", href: "/industria" },
        { label: "Mobil SHC", href: "/mobil-shc" },
        {
          label: "Product Selector",
          href: "https://www.mobil.com.mx/es-mx/lubricantes/industrial",
          target: "_black",
        },
      ],
    },
    {
      label: "Automotriz",
      expandable: true,
      dropdownID: 1,
      options: [
        { label: "Inicio", href: "/automotriz" },
        { label: "Mobil 1", href: "/mobil-1" },
        { label: "Mobil Super", href: "/mobil-super" },
        {
          label: "Product Selector",
          href: "/Automotriz-Aceites-Product-Selector.pdf",
          target: "_black",
        },
      ],
    },
    {
      label: "Transporte y Minería",
      href: "/transporte-y-mineria",
      expandable: false,
    },
  ];

  return (
    <>
      {/* Horizontal */}
      <nav className="hidden lg:flex w-full h-20 bg-[#7F7F7F] drop-shadow-xl px-8 items-center justify-between">
        <a href="/" className="h-full w-auto">
          <Image src={Logo} className="h-full w-auto" alt="Logo" />
        </a>
        <div className="space-x-10 flex items-center grow px-12">
          {links.map((link) => {
            return link.expandable ? (
              <div
                key={link.label}
                href={link.href}
                className="cursor-pointer"
                onMouseEnter={() => setActiveDropdown(link.dropdownID)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center space-x-2">
                  <p className="text-white font-['Arsenal'] text-xl">
                    {link.label}
                  </p>
                  <Image src={Dropdown} alt="Dropdown" />
                </div>
                {link.dropdownID == activeDropdown ? (
                  <ul className="absolute flex flex-col bg-[#7F7F7F] py-2 rounded-[5px] border border-black/50">
                    {link.options.map((option) => {
                      return (
                        <a
                          key={option.label}
                          href={option.href}
                          target={option.target}
                          className="text-white font-['Arsenal'] text-md hover:bg-white hover:text-[#7F7F7F] px-2"
                        >
                          {option.label}
                        </a>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            ) : (
              <a key={link.label} href={link.href}>
                <p className="text-white font-['Arsenal'] text-xl hover:underline decoration-white">
                  {link.label}
                </p>
              </a>
            );
          })}
        </div>
        <ContactButton />
      </nav>

      {/* Vertical */}
      <nav className="lg:hidden">
        <div className="relative flex w-full h-16 bg-[#7F7F7F] drop-shadow-xl p-2 items-center justify-center">
          <Image
            src={List}
            className="h-10 w-10 w-auto absolute left-2"
            onClick={() => setNavbarOpen(true)}
            alt="List"
          />
          <Image
            src={Logo}
            className="h-full w-auto"
            onClick={() => setNavbarOpen(true)}
            alt="Logo"
          />
        </div>
        {navbarOpen ? (
          <div className="bg-[#7F7F7F] h-screen animate-navbar-slider fixed top-0 rounded-r-lg border border-white/50 flex flex-col justify-center items-center drop-shadow-xl">
            <Image
              src={Close}
              className="absolute right-4 top-4 w-6 h-6"
              alt="Close"
              onClick={() => setNavbarOpen(false)}
            />
            <div className="w-full space-y-6 flex flex-col items-center justify-center">
              <Image src={Logo} className="h-24 w-auto" alt="Logo" />
              {links.map((link) => {
                return link.expandable ? (
                  <div
                    key={link.label}
                    href={link.href}
                    className="cursor-pointer"
                  >
                    <div
                      className="flex items-center space-x-2 justify-center"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown == link.dropdownID
                            ? null
                            : link.dropdownID
                        )
                      }
                    >
                      <p className="text-white font-['Arsenal'] text-xl">
                        {link.label}
                      </p>
                      <Image src={Dropdown} alt="Dropdown" />
                    </div>
                    {link.dropdownID == activeDropdown ? (
                      <div className="flex flex-col bg-[#7F7F7F] items-center space-y-2 py-2">
                        {link.options.map((option) => {
                          return (
                            <a
                              key={option.label}
                              href={option.href}
                              target={option.target}
                              className="text-white font-['Arsenal'] text-lg px-2 hover:underline decoration-white"
                            >
                              {option.label}
                            </a>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <a key={link.label} href={link.href}>
                    <p className="text-white font-['Arsenal'] text-xl hover:underline decoration-white">
                      {link.label}
                    </p>
                  </a>
                );
              })}
              <ContactButton />
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
}
