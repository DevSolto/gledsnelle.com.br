

import coment1 from "../../../../assets/IMG_2819.jpg"
import coment2 from "../../../../assets/IMG_2820.jpg"
import coment3 from "../../../../assets/IMG_2821.jpg"
import coment4 from "../../../../assets/IMG_2822.jpg"
import coment5 from "../../../../assets/IMG_2823.jpg"
import coment6 from "../../../../assets/IMG_2824.jpg"
import coment7 from "../../../../assets/IMG_2825.jpg"
import coment8 from "../../../../assets/IMG_2826.jpg"
import coment9 from "../../../../assets/IMG_2827.jpg"
import coment10 from "../../../../assets/IMG_2828.jpg"
import coment11 from "../../../../assets/IMG_2829.jpg"
import coment12 from "../../../../assets/IMG_2830.jpg"

export function Depositions() {
  return (
    <section
      id="depoimentos"
      className="w-screen flex items-center justify-center py-28 bg-red-300"
    >

      <div className="max-w-[1024px] w-full px-6 flex flex-col gap-5 lg:gap-20 text-white">
      <div className="mb-5 flex flex-col items-center justify-center lg:hidden">
          <h2 className="text-5xl text-center font-bold">Na boca do povo</h2>
          <p>Ouvir é a base do cuidado</p>
        </div>
        
        <div className="w-full flex flex-col gap-5 justify-center items-center lg:grid lg:grid-cols-3 lg:gap-16">
          <img className="w-80 rounded-xl" src={coment2} alt="" />
          <img className="w-80 rounded-xl" src={coment1 } alt="" />
          <img className="w-80 rounded-xl" src={coment3} alt="" />
          <img className="w-80 rounded-xl" src={coment4} alt="" />
          <img className="w-80 rounded-xl" src={coment5} alt="" />
          <img className="w-80 rounded-xl" src={coment6} alt="" />
        </div>

        <div className="mb-5 lg:flex flex-col items-center justify-center hidden">
          <h2 className="text-5xl text-center font-bold">Na boca do povo</h2>
          <p>Ouvir é a base do cuidado</p>
        </div>

        <div className="w-full  gap-5 justify-center items-center lg:grid lg:grid-cols-3 lg:gap-16 hidden">
          <img className="w-80 rounded-xl" src={coment7} alt="" />
          <img className="w-80 rounded-xl" src={coment9} alt="" />
          <img className="w-80 rounded-xl" src={coment8} alt="" />
          <img className="w-80 rounded-xl" src={coment10} alt="" />
          <img className="w-80 rounded-xl" src={coment11} alt="" />
          <img className="w-80 rounded-xl" src={coment12} alt="" />
        </div>
      </div>
    </section>
  );
}
