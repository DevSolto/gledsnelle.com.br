export function PhotoGallery() {
  return (
    <section
      id="sobre"
      className="w-screen flex items-center justify-center py-28"
    >
      <div className="max-w-[1024px] w-full px-6 lg:flex lg:flex-col lg:gap-20 text-blue-300">
        <div className="mb-5">
          <h2 className="text-5xl font-bold">Momentos com Gleds</h2>
          <p>Capturas da nossa jornada de mudança</p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-rows-3 gap-y-5 gap-x-5 md:grid-cols-2 lg:grid-cols-3">
          <div className=" bg-1 bg-center bg-cover h-80 lg:h-full lg:row-span-2"></div>
          <div className=" bg-2 bg-center bg-cover h-80 lg:h-60 "></div>
          <div className=" bg-3 bg-center bg-cover h-80 lg:h-60 "></div>
          <div className=" bg-4 bg-center bg-cover h-80 lg:h-60 "></div>
          <div className=" bg-5 bg-center bg-cover h-80 lg:h-full lg:row-span-2"></div>
          <div className=" bg-6 bg-center bg-cover h-80 lg:h-60"></div>
          <div className=" bg-7 bg-center bg-cover h-80 lg:h-60"></div>
        </div>
      </div>
    </section>
  );
}
