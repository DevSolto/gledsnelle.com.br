import logoRemigioPodeMais from "../../../../assets/logo_rmg_da_gente.png"
import avatar from "../../../../assets/chio_gleds_simone.png"
export function Banner() {
  return (
    <section id="inicio" className="bg-remigio-da-gente bg-right bg-cover overflow-hidden  w-screen flex flex-col justify-end items-center pt-16">
      <div className="max-w-[1024px] px-6 w-screen flex flex-col items-center justify-center gap-0 lg:gap-16 lg:flex-row">
        <img src={logoRemigioPodeMais} alt="Logo Remígio pode mais" className="w-80 sm:scale-125 lg:translate-x-16 lg:z-10"/>
        <img src={avatar} alt="" className=" w-full max-w-[600px] rounded-lg lg:w-[50%] scale-110 lg:-mt-0 lg:translate-x-0 lg:z-0"/>
      </div>
    </section>
  )
}
