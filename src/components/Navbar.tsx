"use client";
import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`w-full bg-[#0D0D0D] text-white p-3 ${bebas.className} sticky top-0`}
    >
      <nav className="flex w-full items-center justify-between">
        {/* Logo */}
        <div className="text-2xl">
          <span className="text-[#8B0000]">&lt;</span>
          Guilherme
          <span className="text-[#8B0000]">/&gt;</span>
        </div>

        {/* Links grandes (desktop) */}
        <div className="hidden sm:flex text-md gap-6">
          <a
            href="#"
            className="relative px-2 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#8B0000] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Inicio
          </a>
          <a
            href="#sobre"
            className="relative px-2 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#8B0000] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Sobre
          </a>
          <a
            href="#educacao"
            className="relative px-2 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#8B0000] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Educação
          </a>
          <a
            href="#projetos"
            className="relative px-2 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#8B0000] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Projetos
          </a>
        </div>

        {/* Botão hambúrguer (mobile) */}
        <button
          className="sm:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </button>
      </nav>

      {/* Menu mobile animado */}
      <div
        className={`sm:hidden overflow-hidden transition-[max-height] duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        } flex flex-col gap-4 mt-3`}
      >
        <a href="#inicio" className="hover:text-[#8B0000]">
          Inicio
        </a>
        <a href="#sobre" className="hover:text-[#8B0000]">
          Sobre
        </a>
        <a href="#educacao" className="hover:text-[#8B0000]">
          Educação
        </a>
        <a href="#projetos" className="hover:text-[#8B0000]">
          Projetos
        </a>
      </div>
    </header>
  );
}
