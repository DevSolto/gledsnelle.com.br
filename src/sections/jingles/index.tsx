import { Button } from "@/components/ui/button";
import { Container } from "../container";
import button from '../../../public/botao_jingles.webp'
import elas from '../../../public/elas.webp'
import Image from "next/image";

export function Jingles() {
  return (
    <section
      id="jingles"
      className="bg-[url(/bg_jingles.webp)] bg-cover   w-screen flex items-center justify-center pt-10 bg-red-300 z-0 border-none"
    >
      <Container>

        <div className="px-6 lg:px-0 min-w-full lg:flex-row flex flex-col-reverse lg:justify-center lg:items-center space-y-5">
          <div className="relative flex-1 flex items-center flex-col lg:flex-row justify-end ">
            <a href="https://www.suamusica.com.br/Gleds18/jingles-gleds-e-simone" className="lg:absolute  left-0">
              <Image alt="Foto de Gleds e Simone" src={button} className="w-96" priority/>
            </a>
            <Image alt="Foto de Gleds e Simone" src={elas} className="max-w-[500px] w-full"/>
          </div>
          <div className="flex flex-col gap-5 lg:w-60">
            <p className="text-slate-50 w-full">
              Quer entrar no clima da nossa campanha? Aqui você pode baixar os jingles oficiais e sair cantando por aí! Bora fazer barulho juntos e mostrar que a mudança já começou! Compartilhe com os amigos, toque nas festas e ajude a espalhar essa energia positiva por toda a cidade. Vem com a gente nessa!
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}