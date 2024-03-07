import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

export function SocialMedia() {
  return (
    <section
      id="contato"
      className=" w-screen flex justify-center items-center py-28"
    >
      <div className="text-green-300 max-w-[1024px] px-6 w-screen flex flex-col items-center justify-center gap-16">
        <div className=" mb-5 flex flex-col items-center justify-center">
          <h2 className=" text-5xl text-center font-bold">
            Redes sociais de Gleds
          </h2>
          <p>Fique por dentro de tudo</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <a className="flex flex-col items-center justify-center">
            <WhatsappLogo
              width={"100px"}
              height={"100px"}
              className=" mb-5"
            />
              <p className="text-xl font-bold">(99) 9 999-9999</p>
              <p>Fale diretamente com Gleds</p>
          </a>
          <a href="https://www.instagram.com/gledsnelle/" className="flex flex-col items-center justify-center">
            <InstagramLogo
              width={"100px"}
              height={"100px"}
              className=" mb-5"
            />
              <p className="text-xl font-bold">@gledsnelle</p>
              <p>Siga as Histórias e Novidades de Gleds</p>
          </a>
          <a href="https://www.facebook.com/mariagledsnelle/" className="flex flex-col items-center justify-center">
            <FacebookLogo
              width={"100px"}
              height={"100px"}
              className=" mb-5"
            />
              <p className="text-xl font-bold">/mariagledsnelles</p>
              <p>Participe da Comunidade de Gleds</p>
          </a>
        </div>
      </div>
    </section>
  );
}
