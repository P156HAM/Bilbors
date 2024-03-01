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
    iconPath: "./src/assets/icons/t_shirt_line.svg",
    label: "kläder",
  },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Hem" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Mat" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Hygien & apotek" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Elektronik" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Accessoarer" },
  { iconPath: "./src/assets/icons/heart_line.svg", label: "Hobby & Fritid" },
  { iconPath: "./src/assets/icons/hard-hat-line.svg", label: "Bygg" },
  { iconPath: "./src/assets/icons/car_3_line.svg", label: "Fordon" },
  { iconPath: "./src/assets/icons/auction_line.svg", label: "Auktioner" },
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
        className=" px-9 pl-10 items-center "
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
                className="h-11 w-11"
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
