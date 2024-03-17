import {FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

export function SocialMedia() {
  return (
    <section
      id="contato"
      className=" w-screen flex justify-center items-center py-28 bg-green-300"
    >
      <div className="text-white  max-w-[1024px] px-6 w-screen flex flex-col items-center justify-center gap-16">
        <div className=" mb-5 flex flex-col items-center justify-center">
          <h2 className=" text-5xl text-center font-bold">
            Minhas redes sociais
          </h2>
          <p>Fique por dentro de tudo</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <a href="https://api.whatsapp.com/send?phone=5583999647875&text=Oi,%20vim%20pelo%20site!" target="_blank" className="flex flex-col items-center justify-center">
            <WhatsappLogo
              width={"100px"}
              weight="fill"
              height={"100px"}
              className=" mb-5"
            />
              <p className="text-xl font-bold"> (83) 9 9964-7875</p>
              <p>Fale diretamente comigo</p>
          </a>
          <a href="https://www.instagram.com/gledsnelle/" target="_blank" className="flex flex-col items-center justify-center">
            <InstagramLogo
              width={"100px"}
              weight="fill"
              height={"100px"}
              className=" mb-5"
            />
              <p className="text-xl font-bold">@gledsnelle</p>
              <p>Acompanhe as histórias e novidades</p>
          </a>
          <a href="https://www.facebook.com/mariagledsnelle/" target="_blank" className="flex flex-col items-center justify-center">
            <FacebookLogo
              width={"100px"}
              weight="fill"
              height={"100px"}
              className=" mb-5"
            />
              <p className="text-xl font-bold">/mariagledsnelles</p>
              <p>Participe da minha comunidade</p>
          </a>
        </div>
      </div>
    </section>
  );
}
