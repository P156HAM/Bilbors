function Banner() {
  return (
    <div className="w-screen bg-center bg-cover bg-no-repeat bg-[url('./src/assets/banner.png')] bg-silentSmoke h-[50svh] xl:h-[70svh] 2xl:h-[70svh]">
      <div className="text-center p-4 bg-gradient-to-r from-silentSmoke bg-opacity-50 rounded-lg">
        <h1 className="text-pineNeedle font-sans text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Gör skillnad med varje köp
        </h1>
        <p className="text-primary font-sans text-tiny md:text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl">
          Handla unika fynd till 25% av marknadsvärdet. Bidra till en hållbar
          framtid.
        </p>
      </div>
    </div>
  );
}

export default Banner;
