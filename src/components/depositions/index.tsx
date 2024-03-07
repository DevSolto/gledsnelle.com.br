import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import vinicios from "../../assets/vinicios.jpeg";
import si from "../../assets/si.jpeg";

export function Depositions() {
  return (
    <section
      id="depoimentos"
      className="w-screen flex items-center justify-center py-28 bg-purple-300"
    >
      <div className="max-w-[1024px] w-full px-6 flex flex-col gap-20 text-white">
        <div className="mb-5 flex flex-col items-center justify-center">
          <h2 className="text-5xl text-center font-bold">Na boca do povo</h2>
          <p>Ouvir é a base do cuidado</p>
        </div>
        <div className="h-min lg:hidden">
          <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="h-min"
          >
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col justify-between gap-5 h-full">
                <p className="text-lg">
                  "Gleds é demais! Tem um coração de ouro e ajuda todo mundo. É
                  uma guerreira que faz nossa cidade melhor com sua escola
                  técnica. Graças a ela, muita gente tá aprendendo e conseguindo
                  emprego. Ela é um exemplo pra todos nós. Nossa cidade é melhor
                  por causa dela."
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={si} alt="" className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="font-bold">Si Ferreira</p>
                    <p>Candidato a vereador</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col justify-between gap-5 h-full">
                <p className="text-lg">
                  "Gleds é uma pessoa nascida e criada em Remígio com ótima
                  conexão com as pessoas, simples, disposta a ajudar e a
                  aprender continuamente com foco no coletivo."
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img
                    src={vinicios}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-bold">Vinícios Carneiro</p>
                    <p>Advogado e assessor jurídico</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="h-min hidden lg:flex">
          <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="h-60"
          >
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col justify-between gap-5 h-full">
                <p className="text-lg">
                  "Gleds é demais! Tem um coração de ouro e ajuda todo mundo. É
                  uma guerreira que faz nossa cidade melhor com sua escola
                  técnica. Graças a ela, muita gente tá aprendendo e conseguindo
                  emprego. Ela é um exemplo pra todos nós."
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={si} alt="" className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="font-bold">Si Ferreira</p>
                    <p>Candidato a vereador</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col justify-between gap-5 h-full">
                <p className="text-lg">
                  "Gleds é uma pessoa nascida e criada em Remígio com ótima
                  conexão com as pessoas, simples, disposta a ajudar e a
                  aprender continuamente com foco no coletivo.""
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img
                    src={vinicios}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-bold">Vinícios Carneiro</p>
                    <p>Advogado e assessor jurídico</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
