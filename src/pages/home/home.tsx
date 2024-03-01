import Banner from "../../components/banner/banner";
import CategorySlider from "../../components/categorySlider/categorySlider";
import HomeGallery from "../../components/homeGallery/homeGallery";
import { Photo } from "../../constants/types";
import arrow from "../../assets/icons/arrow_right_fill.svg";
import RotatingSentence from "../../components/rotatingItem/rotatingItem";

const photos: Photo[] = [
  {
    alt: "Bild av en liten flicka",
    title:
      "Handla unika fynd till 25% av marknadsvärdet. Bidra till en hållbar framtid.",
    callToAction: "Upptäck våra produkter",
    imageUrl: "./src/assets/images/gallery_img_2.png",
    ctaButtonText: "Handla nu",
  },
  {
    alt: "Bild av en outlish tygpåse",
    title: "Återanvänd mer, köp smartare.",
    callToAction: "Gå med i rörelsen",
    imageUrl: "./src/assets/images/gallery_img_1.png",
    ctaButtonText: "Läs mer",
  },
];

function Home() {
  return (
    <main>
      <Banner />
      <CategorySlider />
      {/* Photo Gallery */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 
      lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 m-2 h-auto"
      >
        <section className="h-160">
          <HomeGallery photos={photos} />
        </section>
        <section className="h-160 flex flex-col gap-2">
          <article className="h-1/2 flex flex-col gap-5 justify-center  border border-secondary4">
            <h1 className="text-center text-primary2 font-headline text-xl my-2">
              Anslut dig till vår mission att omforma marknaden.
            </h1>
            <p className="text-center text-primary2 font-subHeadline mb-4">
              Fantastiska priser, ännu bättre för planeten.
            </p>
            <span className="border-2 w-1/2 h-1 border-primary2 self-center"></span>
            <button className="w-auto self-center bg-primary2 hover:bg-brand-identity-dark text-secondary4 font-headline font-bold py-2 px-4 rounded">
              Handla nu
            </button>
          </article>

          <article className="h-1/2 flex flex-col gap-5 justify-center  border border-secondary4">
            <h1 className="text-center text-primary2 font-headline text-xl my-2">
              Förnya, Återvinn, Återupplev.
            </h1>
            <p className="text-center text-primary2 font-subHeadline mb-4">
              Gör ett miljöval. Exceptionella varor till otroliga priser.
            </p>
            <span className="border-2 w-1/2 h-1 border-primary2 self-center"></span>
            <button className="w-auto self-center bg-primary2 hover:bg-brand-identity-dark text-secondary4 font-headline font-bold py-2 px-4 rounded">
              Utforska nu
            </button>
          </article>
        </section>
        <section className="md:grid md:grid-cols-4 md:col-span-2">
          <RotatingSentence sentence="Förnya..Återvinn.." />
          <section className="h-160 md:col-span-2">
            <section className="h-160 grid grid-rows-3 border border-secondary4 md:row-span-2">
              <article
                className="flex flex-col justify-end items-center row-span-2 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(./src/assets/images/gallery_img_2.png)`,
                }}
              >
                <button className="flex flex-col items-center justify-center button-rounded w-16 h-16 rounded-full bg-primary2 border-5 border-secondary2 mt-10 absolute -bottom-8">
                  <img
                    className="w-10 justify-center items-center"
                    src={arrow}
                    alt=""
                  />
                </button>
              </article>
              <article className="flex flex-col justify-center items-center bg-secondary2 overflow-hidden">
                <h1 className="text-center text-primary2 font-headline text-xl my-2 w-full flex-wrap">
                  Förnya, Återvinn, Återupplev.
                </h1>
              </article>
            </section>
          </section>
          <RotatingSentence sentence="Återupplev.." />
        </section>
      </div>
    </main>
  );
}

export default Home;
