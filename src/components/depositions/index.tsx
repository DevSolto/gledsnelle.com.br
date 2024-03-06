import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import avatar from "../../assets/default.png";

export function Depositions() {
  return (
    <section
      id="depoimentos"
      className="w-screen flex items-center justify-center py-28 bg-purple-300"
    >
      <div className="max-w-[1024px] w-full px-6 flex flex-col gap-20 text-white">
        <div className="mb-5 flex flex-col items-center justify-center">
          <h2 className="text-5xl text-center font-bold">
            O que estão falando de Gleds
          </h2>
          <p>Ouvir é a base do cuidado</p>
        </div>
        <div className=" lg:hidden">
          <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden lg:flex">
          <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10 px-5 py-2 bg-white text-zinc-600 rounded-lg flex flex-col gap-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  perferendis vel, sapiente ex voluptates nulla possimus
                  explicabo hi
                </p>
                <div className="flex gap-5 text-purple-300">
                  <img src={avatar} alt="" className="w-16 rounded-full"/>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p>Quem é essa pessoa</p>
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
