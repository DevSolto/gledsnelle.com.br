import avatar from "../../assets/default-profile.png";

export function About() {
  return (
    <section id="sobre" className="w-screen flex items-center justify-center py-10  pt-28">
      <div className="max-w-[1024px] px-6 lg:flex lg:gap-20 ">
        <div className="flex flex-col gap-9 mb-10 lg:w-1/2">
          <h2 className="text-5xl font-bold lg:text-5xl text-purple-300">
            Quem é Gleds?
          </h2>
          <p className="text-zinc-800">
            Olá, meus queridos! Aqui é a Gleds, mas muitos de vocês me conhecem
            como 'Mainha'. Sou uma filha de Remígio, apaixonada por nossa terra
            e nossa gente. Desde cedo, me dediquei a cuidar e educar, primeiro
            como enfermeira, depois como professora e sempre como uma defensora
            ativa da nossa comunidade. Minha jornada é marcada pelo desejo de
            ver nossa cidade crescer e prosperar, com saúde, educação e
            igualdade para todos. Levo no coração os valores da empatia, do
            respeito e da solidariedade, que aprendi em casa e que tento passar
            adiante em cada ação minha. Me envolvi na política porque acredito
            que, juntos, podemos fazer muito mais por Remígio. Não sou apenas
            uma voz, mas um ouvido atento às necessidades do nosso povo. Estou
            aqui para somar, para lutar e para transformar. Quero ser a mudança
            que tanto sonhamos, e conto com o apoio e a força de cada um de
            vocês nesta caminhada. Então, quem é Gleds? Sou uma mulher
            guerreira, mãe, amiga e, acima de tudo, uma cidadã que acredita no
            poder da comunidade. Juntos, somos mais fortes, e juntos podemos
            levar Remígio ao futuro que merecemos. Estou aqui para isso, por
            vocês e com vocês. Vamos nessa?
          </p>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 mb-24">
            <div className="rounded-xl overflow-hidden">
              <img src={avatar} alt="" className="w-full h-full" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={avatar} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-24">
            <div className="rounded-xl overflow-hidden">
              <img src={avatar} alt="" className="w-full h-full" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={avatar} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
