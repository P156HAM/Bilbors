// ProductGallery.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "./photoCard/photoCard";
import { Photo } from "../../constants/types";

interface HomeGalleryProps {
  photos: Photo[];
}

function HomeGallery({ photos }: HomeGalleryProps) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="mySwiper h-full"
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.alt}>
          <ProductCard photo={photo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeGallery;
