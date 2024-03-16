import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { FreeMode, Grid } from "swiper/modules";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";
import { getAllCategories } from "../../hooks/hooks";

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
  { iconPath: "./src/assets/icons/heart_line.svg", label: "ovrigt" },
  { iconPath: "./src/assets/icons/hard-hat-line.svg", label: "Bygg" },
  { iconPath: "./src/assets/icons/car_3_line.svg", label: "Fordon" },
  { iconPath: "./src/assets/icons/auction_line.svg", label: "Auktioner" },
];

function CategorySlider() {
  const { data, loading, error } = getAllCategories();
  if (loading) console.log("loading..");
  if (error) console.log("Error: ", error.message);

  // DATA FROM DYNAMODB
  console.log("data response getAllCategories: ", data?.getAllCategories);
  return (
    <div className="relative flex justify-center">
      <Swiper
        modules={[Grid, FreeMode]}
        grid={{ rows: 1 }}
        slidesPerView={"auto"}
        spaceBetween={82.5}
        freeMode={{ enabled: true, momentumBounceRatio: 3 }}
        className="px-9 pl-10 items-center"
      >
        {data?.getAllCategories?.map((category, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center p-2 w-12 h-56"
          >
            <Link to={`/${category?.name}`}>
              <div className="h-24 w-24 bg-secondary3 flex items-center justify-center mb-2 focus:shadow-outline hover:border-1 hover:border-primary2">
                <img
                  src={categories[0].iconPath} //! HÅRD KODAD
                  alt={category.name}
                  className="h-11 w-11"
                />
              </div>
              <p className="text-xs text-center h-12">{category.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySlider;
