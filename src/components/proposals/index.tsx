import { BookOpen,  Handshake, Heart, Plant, ShieldCheck, Tree } from "@phosphor-icons/react";

export function Proposals() {
  return (
    <section
      id="propostas"
      className="w-screen flex items-center justify-center py-10  pt-28 bg-green-300"
    >
      <div className="max-w-[1024px] px-6  text-white">
        <div className="mb-16 ">
          <h2 className="text-5xl font-bold mb-5">De mãos dadas com Gleds</h2>
          <p className="max-w-md">
            A nossa Remígio merece crescer com dignidade, justiça e
            oportunidades para todos. Aqui estão nossas principais propostas:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="bg-pink-300 flex justify-center items-center rounded-full h-9 min-w-9">
                <Heart weight="fill" color="#fff" className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Saúde para Todos</h3>
            </div>
            <div>
              <p>
                Priorizamos uma saúde acessível e de qualidade para todos. Nosso
                compromisso é expandir serviços e garantir atendimento ágil e
                humano.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="bg-pink-300 flex justify-center items-center rounded-full h-9 min-w-9">
                <BookOpen weight="fill" color="#fff" className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Educação de Qualidade</h3>
            </div>
            <div>
              <p>
                Investiremos em educação, melhorando infraestruturas e
                valorizando professores, para formar cidadãos preparados e
                conscientes.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="bg-pink-300 flex justify-center items-center rounded-full h-9 min-w-9">
                <ShieldCheck weight="fill" color="#fff" className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Segurança Comunitária</h3>
            </div>
            <div>
              <p>
                Vamos fortalecer a segurança, promovendo ações integradas e
                preventivas, criando um ambiente seguro para todos.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="bg-pink-300 flex justify-center items-center rounded-full h-9 min-w-9">
                <Plant weight="fill" color="#fff" className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Apoio ao Agricultor Local</h3>
            </div>
            <div>
              <p>
                Defendemos o fortalecimento da agricultura, com mais apoio e
                recursos para os nossos agricultores, promovendo uma economia
                local forte.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="bg-pink-300 flex justify-center items-center rounded-full h-9 min-w-9">
                <Tree weight="fill" color="#fff" className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold">
                Desenvolvimento Sustentável
              </h3>
            </div>
            <div>
              <p>
                Compromisso com o crescimento econômico, respeitando nosso meio
                ambiente e promovendo práticas sustentáveis.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="bg-pink-300 flex justify-center items-center rounded-full h-9 min-w-9">
                <Handshake weight="fill" color="#fff" className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Inclusão Social</h3>
            </div>
            <div>
              <p>
                Trabalharemos pela igualdade, assegurando que todos tenham
                acesso a oportunidades e serviços, sem exclusão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
