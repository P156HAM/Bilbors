import Banner from "../../components/banner/banner";
import CategorySlider from "../../components/categorySlider/categorySlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HomeGallery from "../../components/homeGallery/homeGallery";
import { Photo } from "../../constants/types";

const photos: Photo[] = [
  {
    alt: "A beautiful landscape",
    title:
      "Handla unika fynd till 25% av marknadsvärdet. Bidra till en hållbar framtid.",
    callToAction: "Upptäck våra produkter",
    imageUrl: "./src/assets/images/gallery_img_2.png",
    ctaButtonText: "Handla nu",
  },
  {
    alt: "Modern architecture",
    title: "Återanvänd mer, köp smartare.",
    callToAction: "Gå med i rörelsen",
    imageUrl: "./src/assets/images/gallery_img_1.png",
    ctaButtonText: "Läs mer",
  },
  {
    alt: "A night cityscape",
    title:
      "Förnya, Återvinn, Återupplev. Gör ett miljöval. Exceptionella varor till otroliga priser.",
    callToAction: "The city that never sleeps",
    imageUrl: "https://via.placeholder.com/850",
    ctaButtonText: "Explore Now",
  },
];

function Home() {
  return (
    <main>
      <Banner />
      <CategorySlider />
      {/* Photo Gallery */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 m-2"
      >
        <section className="h-160">
          <HomeGallery photos={photos} />
        </section>
        <section className="flex flex-col gap-2">
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
      </div>

      {/* Product Recommendations */}
      <section className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold text-Primary-2 mb-5">
          Recommended Products
        </h2>
        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Replace with actual product cards */}
          <div className="bg-ChildOfLight p-4 rounded-lg shadow">
            <img src="path/to/product1.jpg" alt="Product Name" />
            <h3 className="font-bold text-Secondary-3">Product Name</h3>
            <p className="text-Secondary-1">Product Description</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
