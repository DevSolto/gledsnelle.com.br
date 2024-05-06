import avatar from "../../../../assets/avatar2.png";
import coracao from "../../../../assets/coracao1.svg";
export function About() {
  return (
    <section className="overflow-hidden bg-pink-300 w-screen flex flex-col justify-end items-center pt-16">
      <div className="max-w-[1024px] px-6 w-screen flex flex-col items-center justify-end gap-0 lg:gap-16 lg:flex-row-reverse">
        <div className="z-10">
          <h2 className="text-white text-3xl font-bold">
            Olá, meu nome é <br />{" "}
            <span className="font-black text-4xl">Gleds!</span>
          </h2>
          <p className="text-white text-sm pt-5 ">
            Queremos construir um futuro melhor para a nossa cidade, e
            acreditamos que a voz de cada cidadão é fundamental nesse processo.
            Por isso, estamos lançando esta ferramenta de coleta de sugestões de
            necessidades para a montagem de um plano de governo inclusivo e
            representativo.
          </p>
        </div>
        <div className="relative z-[1] ">
          <img src={avatar} alt="Imagem de Gleds falando" className="z-10" />
          <img
            src={coracao}
            alt="Coração"
            className="absolute top-20  z-[-1] scale-150 sm:scale-110 md:left-20 md:scale-125 md:top-28 lg:top-5"
          />
        </div>
      </div>
    </section>
  );
}
