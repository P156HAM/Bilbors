function Banner() {
  return (
    <div className="flex flex-row w-full bg-center bg-cover bg-no-repeat  bg-primary3 h-[50svh] xl:h-[70svh] 2xl:h-[70svh]  items-center ">
      <div className="bg-center bg-cover bg-no-repeat bg-center bg-[url('./src/assets/images/banner.jpg')] h-[50svh] xl:h-[70svh] 2xl:h-[70svh] w-1/2"></div>
      <div className="from-black w-1/2    flex flex-col items-center ">
        <div className="text-start p-4">
          <h1 className="text-primary1 font-headline text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
            Gör skillnad med varje köp
            <span className="bg-secondary2 inline-block rounded-full min-h-2 max-h-8 min-w-2 max-w-8 ml-1"></span>
          </h1>

          <p className="text-primary2 font-subHeadline text-tiny md:text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl">
            Handla unika fynd till 25% av marknadsvärdet. Bidra till en hållbar
            framtid.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
