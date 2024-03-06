import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { ProductItem } from "../../constants/types";
import heart from "../../assets/icons/heart_line.svg";

interface ProductProps {
  item: ProductItem;
}
function Product({ item }: ProductProps) {
  return (
    <div className="relative">
      <div className="z-30 absolute w-9 h-9 top-5 right-2 flex items-center justify-center bg-opacity-50 bg-secondary4 hover:bg-opacity-90 cursor-pointer">
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
        shadow="sm"
        fullWidth={true}
        radius="none"
        key={item.id}
        isPressable
        onPress={() => console.log("item pressed")}
        className=" bg-secondary4 p-2"
      >
        <CardBody className=" h-2/3 relative overflow-visible p-0">
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            height="80%"
            alt={item.name}
            className="w-full object-cover h-2/3"
            src={item.image}
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start p-1 pt-2">
          <section className="flex flex-row justify-between w-full ">
            <b className="text-primary3 font-headline sd:text-tiny">
              {item.name.toLocaleUpperCase()}
            </b>
            <p className="text-secondary2 font-bold font-headline sd:text-sm">
              {item.price} kr
            </p>
          </section>

          <p className="text-tiny text-start sd:text-sm">{item.description}</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Product;
