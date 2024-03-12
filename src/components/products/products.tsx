import { useDispatch } from "react-redux";
import { productList } from "../../../testData";
import { addItem } from "../../redux/actions/actions";
import { CartItem } from "../../redux/reducers/cartReducers";
import Product, { ProductStyle } from "../product/product";
import { ProductItem } from "../../constants/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { FreeMode, Grid } from "swiper/modules";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import heart from "../../assets/icons/heart_line.svg";
import { useNavigate } from "react-router-dom";
import photo from "../../assets/images/gallery_img_1.png";
import "./products.css";

export enum ProductsStyle {
  GALLERYPRODUCTS = "GALLERYPRODUCTS",
  PRODUCTRECSLIDER = "PRODUCTRECSLIDER",
}
interface ProductsProps {
  products?: ProductItem[];
  style?: ProductsStyle;
}

function Products({ products, style }: ProductsProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createSlug = (productName: string) => {
    return productName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const navigateProduct = (product: ProductItem) => {
    const category = product.category;
    const productSlug = createSlug(product.name);
    const url = `/${category}/product/${productSlug}`;
    navigate(url);
  };

  const handleAddProduct = (product: CartItem) => {
    dispatch(addItem(product));
  };

  switch (style) {
    case ProductsStyle.GALLERYPRODUCTS:
      return (
        <div className="px-5 gap-2 grid grid-cols-4 sd:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 p-1">
          {productList.map((product) => (
            <Product
              item={product}
              key={product.id}
              style={ProductStyle.GALLERYPRODUCT}
              handleAddProduct={handleAddProduct}
            />
          ))}
        </div>
      );
    case ProductsStyle.PRODUCTRECSLIDER:
      return (
        <div className="flex justify-center max-w-[90svw]">
          <Swiper
            modules={[Grid, FreeMode]}
            grid={{ rows: 1 }}
            slidesPerView={3}
            spaceBetween={1.5}
            freeMode={{ enabled: true, momentumBounceRatio: 3 }}
            className=""
          >
            {products &&
              products.map((product, index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center justify-center ml-4 w-300 h-300"
                >
                  <div className="relative p-2 w-full">
                    <div className="z-30 absolute w-9 h-9 top-8 right-5 flex items-center justify-center bg-opacity-60 bg-secondary3 hover:bg-opacity-90 cursor-pointer">
                      <Image
                        radius="none"
                        className=""
                        width="24px"
                        height="24px"
                        src={heart}
                        onClick={() => {}}
                      />
                    </div>

                    <Card
                      shadow="none"
                      fullWidth={true}
                      radius="none"
                      key={product.id}
                      isPressable
                      onPress={() => navigateProduct(product)}
                      className=""
                      classNames={{
                        body: "w-full object-cover h-2/3 bg-secondary3 bg-center bg-contain bg-origin-content",
                      }}
                    >
                      <CardBody className="">
                        <Image
                          shadow="sm"
                          radius="none"
                          width="100%"
                          height="80%"
                          alt={product.name}
                          className=""
                          src={photo}
                        />
                      </CardBody>
                      <CardFooter className="flex flex-col items-start p-0 pt-2">
                        <div className="flex flex-col w-full">
                          <section className="flex flex-row justify-between w-full ">
                            <b className="text-primary3 font-headline sd:text-tiny">
                              {product.name.toLocaleUpperCase()}
                            </b>
                            <p className="text-secondary2 font-bold font-headline sd:text-sm">
                              {product.price} kr
                            </p>
                          </section>

                          <p className="text-tiny text-start text-primary3 sd:text-sm">
                            {product.description}
                          </p>
                        </div>
                      </CardFooter>
                    </Card>
                    <button
                      className="w-full bg-secondary3 text-lg h-10 mt-2 hover:bg-gray-400 hover:text-white"
                      onClick={() => {}}
                    >
                      Köp
                    </button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      );
  }
}

export default Products;
