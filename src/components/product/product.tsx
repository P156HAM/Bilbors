import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import heart from "../../assets/icons/heart_line.svg";
import { CartItem } from "../../constants/types";
import { useNavigate } from "react-router-dom";

export enum ProductStyle {
  GALLERYPRODUCT = "GALLERYPRODUCT",
  CARTPRODUCT = "CARTPRODUCT",
  PRODUCTPAGEITEM = "PRODUCTPAGEITEM",
  PRODUCTSLIDER = "PRODUCTSLIDER",
}
interface ProductProps {
  item: CartItem;
  style: ProductStyle;
  handleAddProduct?: (product: CartItem) => void;
}
function Product({ item, handleAddProduct, style }: ProductProps) {
  const navigate = useNavigate();

  const navigateProduct = (product: CartItem) => {
    const url = `/${product.slug?.category}/product/${product.slug?.name}`;
    navigate(url, { state: product.id });
  };

  const onAddToCart = () => {
    if (handleAddProduct) {
      const cartItem: CartItem = {
        ...item,
        quantity: 1,
      };

      handleAddProduct(cartItem);
    }
  };

  switch (style) {
    case ProductStyle.GALLERYPRODUCT:
      return (
        <div className="relative p-2">
          <div className="z-30 absolute w-9 h-9 top-8 right-2 flex items-center justify-center bg-opacity-60 bg-secondary3 hover:bg-opacity-90 cursor-pointer">
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
            key={item.id}
            isPressable
            onPress={() => navigateProduct(item)}
            className=""
            classNames={{
              body: "w-full p-0",
            }}
          >
            <CardBody className="">
              <Image
                shadow="sm"
                radius="none"
                width="100%"
                height="80%"
                alt={item.name!}
                className="max-h-[366px] min-h-[300px] z-10"
                src={item.image!}
                loading="lazy"
              />
            </CardBody>
            <CardFooter className="flex flex-col items-start p-0 pt-2">
              <div className="flex flex-col w-full">
                <section className="flex flex-row justify-between w-full ">
                  <b className="text-primary3 font-headline sd:text-tiny whitespace-nowrap truncate">
                    {item.name?.toLocaleUpperCase()}
                  </b>
                </section>

                <p className="text-tiny text-start text-primary3 sd:text-sm whitespace-nowrap truncate">
                  {item.description}
                </p>
                <p className="text-secondary2 text-start font-bold font-headline sd:text-sm">
                  {item.price} kr
                </p>
              </div>
            </CardFooter>
          </Card>
          <button
            className="w-full bg-secondary3 text-lg h-10 mt-2 hover:bg-gray-400 hover:text-white"
            onClick={onAddToCart}
          >
            Köp
          </button>
        </div>
      );
    case ProductStyle.CARTPRODUCT:
      return (
        <div className="gallery-product py-4 flex flex-row basis-full w-full h-44">
          <img className="w-15 h-10 " src={item.image!} alt={item.name!} />
          <section className="w-auto pl-2 h-full flex flex-col justify-between grow">
            <div className="flex flex-col w-auto flex-wrap ">
              <span className="font-semibold text-lg leading-3">
                <a href="">Företag?</a>
              </span>
              <span className="font-semibold text-lg">
                <a href="">{item.name}</a>
              </span>
              <span className="pt-1 font-subHeadline text-tiny">
                {" "}
                {item.inventory} kvar i lager{" "}
              </span>
            </div>
            <div className="pt-8">
              <div className="flex flex-col items-start justify-between h-full">
                <div className="flex flex-row gap-1">
                  <button
                    className="flex items-center justify-center w-10 h-10 bg-gray-300 text-primary2 border-2 rounded-none text-lg font-bold"
                    onClick={onAddToCart}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <title>delete</title>
                      <g id="minimize_line" fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
                        />
                      </g>
                    </svg>
                  </button>
                  <span className="w-10 h-10 border-2 rounded-none text-lg text-center p-1 font-bold">
                    {item.quantity}
                  </span>
                  <button
                    className="flex items-center justify-center w-10 h-10 bg-gray-300 text-primary2 border-2 rounded-none text-lg font-bold"
                    onClick={onAddToCart}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <title>add</title>
                      <g id="add_line" fill="none" fillRule="nonzero">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M11 20a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7v7Z"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="w-auto flex flex-col justify-between">
            <span className="font-bold text-lg text-end leading-3">
              {item.price} kr
            </span>
            <div className="pt-8">
              <button
                className="flex items-center justify-center w-10 h-10 bg-gray-300 text-primary2 border-2 rounded-none text-lg font-bold"
                onClick={onAddToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>delete_2_line</title>
                  <g id="delete_2_line" fill="none" fillRule="nonzero">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                    <path
                      fill="#F2402DFF"
                      d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2h4.558Zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929L17.997 7ZM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm.28-6H9.72l-.333 1h5.226l-.334-1Z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
    case ProductStyle.PRODUCTPAGEITEM:
      return (
        <div className="gallery-product">
          <Image src={item.image!} alt={item.name!} />
          <div>{item.name}</div>
          <div>{item.price} kr</div>
          <button onClick={onAddToCart}>Add to Cart</button>
        </div>
      );
    case ProductStyle.PRODUCTSLIDER:
  }
}

export default Product;
