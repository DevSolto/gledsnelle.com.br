import logoRemigioPodeMais from "../../../../assets/logoRemigioPodeMais.svg"
import avatar from "../../../../assets/avatar.webp"
export function Banner() {
  return (
    <section className="overflow-hidden bg-purple-300 w-screen flex flex-col justify-end items-center pt-16">
      <div className="max-w-[1024px] px-6 w-screen flex flex-col items-center justify-end gap-0 lg:gap-16 lg:flex-row">
        <img src={logoRemigioPodeMais} alt="Logo Remígio pode mais" className="lg:translate-x-60 lg:z-10"/>
        <img src={avatar} alt="" className=" rounded-lg flex-1 lg:w-[50%] -mt-24 lg:-mt-0 lg:translate-x-0 translate-x-8 lg:z-0"/>
      </div>
        
    </section>
  )
}
