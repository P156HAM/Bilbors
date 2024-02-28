import React from "react";
import Banner from "../../components/banner/banner";
import CategorySlider from "../../components/categorySlider/categorySlider";
import img from "../../assets/images/gallery_img_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  return (
    <main>
      <Banner />
      <CategorySlider />
      {/* Photo Gallery */}
      <section className="container mx-auto mt-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={img} alt="img-1" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} alt="img-1" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} alt="img-1" className="rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Ticker Slider */}
      <section className="mt-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </section>

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
          {/* Add more product cards as needed */}
        </div>
      </section>

      {/* Brand Values Slider */}
      <section className="mt-10 px-5 py-10 bg-ChildOfLight">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <h3 className="text-xl font-bold text-Primary-2">
              Gör en skillnad med varje köp
            </h3>
            <p className="text-md text-Secondary-3 mt-2">
              Handla unika fynd till 25% av marknadsvärdet. Bidra till en
              hållbar framtid.
            </p>
            <button className="mt-4 px-4 py-2 bg-Primary-1 text-white rounded hover:bg-Primary-2 transition-colors">
              Upptäck våra produkter
            </button>
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </section>
    </main>
  );
}

export default Home;
