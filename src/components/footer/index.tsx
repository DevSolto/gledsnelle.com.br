import { ArrowUp } from "@phosphor-icons/react";

export function Footer() {
  return (
    <section
      id="contato"
      className="bg-blue-300 w-screen flex justify-center items-center py-5"
    >
      <div className="text-white px-6 w-screen flex items-center justify-around gap-16">
        <p className="w-2/3 text-sm">XX. XXX. XXX/0001-XX - Aque vai ficar o endereço</p>
        <a href="#inicio"className="w-12 h-12 flex items-center justify-center bg-white text-blue-300 rounded-full">
          <ArrowUp weight="bold"/>
        </a>
      </div>
    </section>
  );
}
