import sobre1 from "../../assets/sobre1.jpg";
import sobre2 from "../../assets/sobre2.jpg";
import sobre3 from "../../assets/sobre3.jpg";
import sobre4 from "../../assets/sobre4.jpg";

export function About() {
  return (
    <section
      id="sobre"
      className="w-screen flex items-center justify-center py-10  pt-28"
    >
      <div className="max-w-[1024px] px-6 lg:flex lg:justify-center lg:items-center lg:gap-20 ">
        <div className="flex flex-col gap-9 lg:w-1/2 flex-1">
          <h2 className="text-5xl font-bold lg:text-5xl text-purple-300">
            Quem é Gleds?
          </h2>
          <p className="text-zinc-800">
            Olá, meus queridos! Aqui é Gleds, mas muitos de vocês me conhecem
            como 'Mainha'. Sou filha de Remígio, apaixonada por nossa terra e
            nossa gente. Sou uma mulher guerreira, mãe, amiga e, acima de tudo,
            uma cidadã que acredita no poder da comunidade. Desde cedo, me
            dediquei a cuidar e educar. Como enfermeira ou professora, sempre
            defendi ativamente a nossa comunidade. Minha jornada é marcada pelo
            desejo de ver nossa cidade crescer e prosperar, com saúde, educação
            e igualdade para todos. Levo no coração os valores da empatia, do
            respeito e da solidariedade, que aprendi em casa e tento passar
            adiante em cada ação minha, pois acredito que assim, junto a você,
            posso fazer muito mais por Remígio. Não sou apenas uma voz, mas um
            ouvido atento às necessidades do nosso povo. Estou aqui para somar,
            para lutar e para transformar a nossa realidade. Quero guiar a
            mudança que tanto sonhamos, e conto com o apoio e a força de cada um
            de vocês nesta caminhada. Juntos, somos mais fortes e levaremos
            Remígio ao futuro que merecemos. Estou aqui para isso, por vocês,
            para vocês e com vocês. Vamos nessa?
          </p>
        </div>
        <div className="flex gap-5 flex-1">
          <div className="flex flex-col gap-5 mb-24">
            <div className="rounded-xl overflow-hidden">
              <img src={sobre1} alt="" className="w-full h-full" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={sobre2} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-24">
            <div className="rounded-xl overflow-hidden">
              <img src={sobre3} alt="" className="w-full h-full" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={sobre4} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
