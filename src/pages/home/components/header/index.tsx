import img from "../../../../assets/LOGO-GLEDS-BRANCA.webp"
import { Menu } from "@headlessui/react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center bg-red-300 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-[1024px] w-full flex items-center justify-between lg:flex-row-reverse">

        <nav className="hidden lg:flex items-center gap-10 text-white">
          <a href="/#inicio">
            Inicio
          </a>
          <a href="/#sobre">
            Sobre
          </a>
          <a href="/#galeria">
            Galeria
          </a>
          <a href="/#depoimentos">
            Depoimentos
          </a>
          <a href="/#dicionario">
            Dicionário
          </a>
        </nav>
        <a href="/">
          <img src={img} alt="Logo de Gleds" className="w-40 z-50" />
        </a>
        <div className="lg:hidden">
          <Menu>
            <Menu.Button className="text-base text-white">Menu</Menu.Button>
            <Menu.Items className="bg-[#E31313] text-white fixed w-screen top-14 left-0 transition-all border-none px-8 py-4 flex flex-col items-end gap-4">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/#inicio"
                  >
                    Inicio
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/#sobre"
                  >
                    Sobre
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/#galeria"
                  >
                    Galeria
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/#depoimentos"
                  >
                    Depoimentos
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/#dicionario"
                  >
                    Dicionário
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

        </div>
      </div>
    </header>
  );
}
