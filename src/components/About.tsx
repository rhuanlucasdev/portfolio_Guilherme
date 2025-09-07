import { Bebas_Neue, Roboto_Mono } from "next/font/google";
import LinkedinIcon from "./ui/linkedin";
import GitHubIcon from "./ui/github";
import InstagramIcon from "./ui/instagram";
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <section
      id="sobre"
      className="w-full h-full bg-[#E10600] text-[#f5f5f5] pl-30 pt-20 pb-20"
    >
      <div className="text-left ">
        <p className={` ${bebas.className} text-[1.5rem] sm:text-[4rem]`}>
          Sobre mim
        </p>
      </div>
      <div className="flex flex-1 gap-15">
        <div className="flex bg-[#8B0000] justify-start p-10 rounded-2xl items-center gap-10">
          <div className="rounded-2xl overflow-hidden object-cover">
            <img
              className="h-[440px] w-[362px] object-cover"
              src="/comooque.png"
              alt="guizin"
            />
          </div>
          <p className={`${roboto.className}`}>
            Olá! Sou Guilherme,tenho 25 <br /> anos e estou embarcando em uma
            <br />
            jornada para me tornar um
            <br /> desenvolvedor. Minha paixão
            <br /> pela tecnologia e meu desejo de
            <br /> criar soluções inovadoras me
            <br /> levaram a mergulhar no mundo da
            <br /> programação, e estou ansioso
            <br />
            para aplicar minhas habilidades
            <br /> em projetos desafiadores.
          </p>
        </div>
        <div className="flex flex-col justify-end items-start text-center gap-10">
          <p className={`${bebas.className} text-5xl text-center`}>
            entre em contato
            <br /> comigo
          </p>
          <div className="flex flex-col gap-5 w-full">
            <a
              className="flex flex-row flex-nowrap justify-start items-center bg-[#8b0000]  px-5 py-5 rounded-[6px] gap-5 cursor-pointer"
              href="https://www.linkedin.com/in/guilherme-inácio-758525176"
              target="_blank"
            >
              <div className="w-[45px] h-[45px] bg-[#E10600] rounded-full flex justify-center items-center">
                <LinkedinIcon />
              </div>
              <div className={`${bebas.className}`}>
                <p className="text-[1.5rem]">Linkedin</p>
                <p>/gui-inacio-758525176</p>
              </div>
            </a>
            <a
              className="flex flex-row flex-nowrap justify-start items-center bg-[#8b0000]  px-5 py-5 rounded-[6px] gap-5 cursor-pointer"
              href="https://github.com/Gui-Inacio"
              target="_blank"
            >
              <div className="w-[45px] h-[45px] bg-[#E10600] rounded-full flex justify-center items-center">
                <GitHubIcon />
              </div>
              <div className={`${bebas.className}`}>
                <p className="text-[1.5rem]">GitHub</p>
                <p>/gui-inacio</p>
              </div>
            </a>
            <a
              className="flex flex-row flex-nowrap justify-start items-center bg-[#8b0000]  px-5 py-5 rounded-[6px] gap-5 cursor-pointer"
              href="https://www.linkedin.com/in/guilherme-inácio-758525176"
              target="_blank"
            >
              <div className="w-[45px] h-[45px] bg-[#E10600] rounded-full flex justify-center items-center">
                <InstagramIcon />
              </div>
              <div className={`${bebas.className}`}>
                <p className="text-[1.5rem]">Instagram</p>
                <p>/gui-inacio-758525176</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
