
import sobre1 from "../../../../assets/sobre1.webp";
import sobre2 from "../../../../assets/sobre2.webp";
import sobre3 from "../../../../assets/sobre3.webp";
import sobre4 from "../../../../assets/sobre4.webp";

export function Jingles() {
    return (
        <section
            id="sobre"
            className="w-screen flex items-center justify-center mt-5 py-10 bg-red-300 z-50"
        >
            <div className="max-w-[1024px] px-6 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:gap-20">
                <div className="flex flex-col gap-5 lg:w-1/2 flex-1">
                    <h2 className="text-5xl font-extrabold lg:text-5xl text-white">
                        Solta o Som da Mudança!
                    </h2>
                    <p className="text-slate-50">
                        Quer entrar no clima da nossa campanha? Aqui você pode baixar os jingles oficiais e sair cantando por aí! Bora fazer barulho juntos e mostrar que a mudança já começou! Compartilhe com os amigos, toque nas festas e ajude a espalhar essa energia positiva por toda a cidade. Vem com a gente nessa!
                    </p>
                    <div>
                        <a href="#" target="_blank" className="text-red-300 rounded-[20px]  py-2 px-5 bg-white">
                            Baixe nossos jingles!
                        </a>
                    </div>
                </div>
                <div className="flex gap-5 flex-1 mt-10">
                    <div className="flex flex-col gap-5 mt-24">
                        <div className="rounded-xl overflow-hidden">
                            <img src={sobre3} alt="" className="w-full h-full" />
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img src={sobre4} alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mb-24">
                        <div className="rounded-xl overflow-hidden">
                            <img src={sobre1} alt="" className="w-full h-full" />
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img src={sobre2} alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}