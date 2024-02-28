function Banner() {
  return (
    <div className="flex flex-row w-screen bg-center bg-cover bg-no-repeat  bg-primary3 h-[50svh] xl:h-[70svh] 2xl:h-[70svh]  items-center gap-6 ">
      <div className="bg-center bg-cover bg-no-repeat bg-[url('./src/assets/images/banner.png')] h-[50svh] xl:h-[70svh] 2xl:h-[70svh] w-1/2"></div>
      <div className="from-black w-1/2    flex flex-col items-center gap-6 ">
        <div className="text-start p-4">
          <h1 className="text-primary1 font-headline text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
            Gör skillnad med varje köp
            <span className="border-secondary2  inline-block rounded-full border-8 size-2 ml-2"></span>
          </h1>

          <p className="text-primary2 font-subHeadline text-tiny md:text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl">
            Handla unika fynd till 25% av marknadsvärdet. Bidra till en hållbar
            framtid.
          </p>
        </div>
        <section className="hidden sd:block sm:block md:block mx-10 w-1/2">
          <section className="relative">
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 rounded bg-gray-700 text-white focus:outline-none focus:shadow-outline"
              placeholder="Sök..."
            />
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>search_line</title>
                <g id="search_line" fill="currentColor" fillRule="evenodd">
                  <path
                    fill="currentColor"
                    d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2ZM4 10.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
                  />
                </g>
              </svg>
            </span>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Banner;
