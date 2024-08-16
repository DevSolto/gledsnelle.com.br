import logo from '../../../../assets/logo-gleds-colorida.webp'
import button from '../../../../assets/BOTÃO-ACESSO-PLANO-DE-GOVERNO.webp'
import { Link } from 'react-router-dom';
export function Banner() {
  return (
    <>
      <section id="inicio" className="bg-main bg-cover bg-top text-[#E31313] w-screen flex flex-col justify-end items-center pt-10 lg:pt-0">
        <div className="max-w-[1024px] h-min  w-screen flex flex-col items-center justify-end gap-5  lg:hidden object-scale-down">
          <div className="flex-1 lg:w-[50%] px-6">
            <img src={logo} alt="" />
          </div>
          <div className="bg-avatar d-flex bg-cover bg-center sm w-full max-w-[550px] lg:w-1/2 h-[350px] lg:h-[800px] ">

          </div>
          <Link href="/plano-de-governo" className='px-5'>
            <img src={button} alt="" />
          </Link>
        </div>
        <div className="max-w-[1024px]  w-screen items-end justify-end gap-5  lg:grid grid-cols-2 hidden  object-scale-down">
          <div className='h-full flex flex-col items-center justify-center gap-5'>
            <div className="px-6">
              <img src={logo} alt="" className=''/>
            </div>
            <a href="/plano-de-governo" className='px-5 flex justify-center'>
              <img src={button} alt="" className='w-2/3' />
            </a>
          </div>
          <div className="bg-avatar-2 d-flex bg-contain bg-no-repeat bg-bottom h-[380px] -mb-5 mt-20 ">

          </div>
        </div>
      </section>
    </>
  );
}
