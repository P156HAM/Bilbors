import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { FreeMode, Grid } from "swiper/modules";

type CategoryItem = {
  iconPath: string;
  label: string;
};

// Sample data for categories **comes from backend
const categories: CategoryItem[] = [
  {
    iconPath: "./src/assets/icons/heart_line.svg",
    label: "Dagens Deals & sales",
  },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Film" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
];

function CategorySlider() {
  return (
    <div className="relative flex justify-center ">
      <Swiper
        modules={[Grid, FreeMode]}
        grid={{ rows: 1 }}
        slidesPerView={"auto"}
        spaceBetween={82.5}
        freeMode={{ enabled: true, momentumBounceRatio: 3 }}
        className="w-full  mx-9 pl-10 justify-center "
      >
        {categories.map((category, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center p-2 w-12 h-56"
          >
            <div className="h-24 w-24 bg-gray-200 flex items-center justify-center mb-2 focus:shadow-outline hover:border-1 hover:border-primary2">
              <img
                src={category.iconPath}
                alt={category.label}
                className="h-8 w-8"
              />
            </div>
            <p className="text-xs text-center h-12">{category.label}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySlider;
