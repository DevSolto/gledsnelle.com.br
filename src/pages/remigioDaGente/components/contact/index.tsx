import celular from "../../../../assets/celular.svg";
import star from "../../../../assets/Star 1.svg";
export function Contact() {
  return (
    <section className="overflow-hidden bg-blue-300 w-screen flex flex-col justify-end items-center pt-16">
      <div className="max-w-[1024px] px-6 w-screen flex flex-col items-center justify-end gap-0 lg:gap-16 lg:flex-row-reverse">
        <img id="celular" src={celular} alt="Celular" className="z-10 max-w-[450px] w-full" />
        <div className="relative z-[1] ">
          <div className="max-w-[450px] z-10 flex flex-col justify-center lg:items-start items-center gap-5 pb-40">
            <h2 className="text-white font-black text-5xl text-center lg:text-start text-nowrap pt-5">
              Sua opinião <br /> importa!
            </h2>
            <p className="text-white text-sm text-center lg:text-start">
              Queremos ouvir suas ideias, preocupações e sugestões para entender melhor as necessidades da nossa comunidade e criar um plano de governo que atenda a todos.
              <br />
              Junte-se a nós nessa jornada rumo a uma cidade mais justa, próspera e sustentável. Sua participação é essencial para construirmos juntos o futuro que desejamos!

            </p>
            <a href="https://api.whatsapp.com/send?phone=5583996196973&text=Oi,%20vim%20pelo%20site!" target="_blank" className="text-lg rounded-2xl text-pink-300 py-2 px-5 bg-white font-bold shadow-md">
              Fale com Gleds
            </a>
          </div>
          <img
            src={star}
            alt="Star"
            className="absolute top-20  z-[-1] scale-[1.8]  lg:scale-110  lg:top-5 lg:right-40"
          />
        </div>
      </div>
    </section>
  );
}
