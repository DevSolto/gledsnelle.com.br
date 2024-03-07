import { ContactButton } from "../contactButton/Index";
import avatar from "../../assets/avatar.png";
export function Banner() {
  return (
    <section id="inicio" className="bg-pink-300 text-white w-screen flex justify-center items-center py-10 pt-28">
      <div className="max-w-[1024px] px-6 w-screen flex flex-col items-center justify-center gap-16 lg:flex-row">
        <div className="">
          <h1 className="text-4xl font-bold mb-7 lg:text-5xl">Vamos a luta por uma Remígio melhor</h1>
          <p className="text-base mb-7">
            Vamos juntos fazer de Remígio um lugar de progresso e felicidade
            para nossas famílias. A jornada é desafiadora, mas com fé, união e
            determinação, chegaremos lá. Porque Remígio merece mais!
          </p>
          <ContactButton color="#0D68AF" />
        </div>
        <img src={avatar} alt="" className="w-full rounded-lg"/>
      </div>
    </section>
  );
}
