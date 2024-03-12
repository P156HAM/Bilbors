import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import photo from "../../assets/images/gallery_img_1.png";
import "./productPage.css";
import BreadcrumbComponent from "../../components/breadCrumbs/breadCrumbs";
import Products, { ProductsStyle } from "../../components/products/products";
import { productList } from "../../../testData";

function ProductPage() {
  return (
    <div className="flex flex-col items-center py-10 mx-auto space-y-8 px-16 sd:px-0 sm:px-0 md:px-0 max-w-full">
      <div className="flex flex-start w-full px-4">
        <BreadcrumbComponent />
      </div>
      <section className="grid grid-rows-[400px_minmax(100px,_1fr_1fr)] grid-cols-2 w-full">
        <div className="flex justify-center items-center col-span-2 bg-secondary3 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
          <img
            src={photo}
            alt="Blue Sound Speaker "
            className="bg-clip-content bg-origin-content bg-auto bg-no-repeat bg-center max-h-[25rem]"
          />
        </div>

        <section className="flex flex-col gap-2 items-start px-4 col-span-3 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
          <div className="flex flex-col justify-between w-full">
            <h1 className="text-2xl font-bold text-gray-800">
              Blue Sound Speaker
            </h1>
            <h1 className="text-xl font-bold text-gray-800">lager? ...</h1>
            <div className="flex flex-row justify-between w-full">
              <div className=" w-[100%]">
                <h1 className="text-xl font-bold text-gray-800">Pris ...</h1>
              </div>

              <button
                className="w-full bg-secondary3 text-lg h-10 hover:bg-gray-400 hover:text-white w-[50%]"
                onClick={() => {}}
              >
                Köp
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full mt-8">
            <div className="flex flex-row justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g id="store_line" fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                  <path
                    fill="#09244BFF"
                    d="M17.5 3a2 2 0 0 1 1.6.8l2.688 3.584a.995.995 0 0 1 .204.616H22v1c0 1.014-.378 1.94-1 2.646V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.354A3.985 3.985 0 0 1 2 9V8h.008a.995.995 0 0 1 .204-.616L4.9 3.8A2 2 0 0 1 6.5 3h11ZM15 11.646A3.99 3.99 0 0 1 12 13a3.99 3.99 0 0 1-3-1.354 3.99 3.99 0 0 1-3.757 1.282L5 12.874V19h14v-6.126l-.243.054A3.99 3.99 0 0 1 15 11.645ZM20 9h-4a2 2 0 0 0 3.995.15L20 9Zm-6 0h-4a2 2 0 0 0 3.995.15L14 9ZM8 9H4a2 2 0 0 0 3.995.15L8 9Zm9.5-4h-11L5 7h14l-1.5-2Z"
                  />
                </g>
              </svg>
              <h2 className="">
                Säljs av{" "}
                <span>
                  <a href="">Företag?</a>
                </span>
              </h2>
            </div>
            <h2 className="ml-8">
              Se information om
              <span>
                <a href=""> köpvillkor och säljaren?</a>
              </span>
            </h2>
            <Divider className="my-2" />
            <div className="flex flex-row justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g id="truck_line" fill="none" fillRule="nonzero">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                  <path
                    fill="#09244BFF"
                    d="M15 4a2 2 0 0 1 2 2v1h1.52a2 2 0 0 1 1.561.75l1.48 1.851a2 2 0 0 1 .439 1.25V15a2 2 0 0 1-2 2 3 3 0 1 1-6 0h-4a3 3 0 1 1-6 0 2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11ZM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM15 6H4v9h.764c.55-.614 1.348-1 2.236-1 .82 0 1.563.33 2.105.862l.131.138h5.528l.115-.121.121-.115V6Zm3.52 3H17v5c.82 0 1.563.33 2.105.862l.131.138H20v-4.15L18.52 9Z"
                  />
                </g>
              </svg>
              <h2>Frakt (frakt pris)</h2>
            </div>
            <Divider className="my-2" />
            <div className="flex flex-row justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>wallet_5_line</title>
                <g id="wallet_5_line" fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                  <path
                    fill="#09244BFF"
                    d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm15 4.17V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1.17c.313-.11.65-.17 1-.17h14c.35 0 .687.06 1 .17M4 11v1h5c.028 0 .056.001.084.004a1 1 0 0 1 1.03.663 2.001 2.001 0 0 0 3.772 0 1 1 0 0 1 1.03-.663C14.943 12 14.972 12 15 12h5v-1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m11.465 3A3.998 3.998 0 0 1 12 16a3.998 3.998 0 0 1-3.465-2H4v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3z"
                  />
                </g>
              </svg>
              <h2 className="">Betalnings alternative</h2>
            </div>
            <Divider className="my-2" />
          </div>
        </section>
        <section className="flex flex-col items-start col-span-3 mt-4">
          <Accordion
            variant="light"
            className="accordion-wrapper bg-secondary3 px-4"
          >
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Produkt information"
            >
              xxx
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Specifikationer"
            >
              xxx
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Information om företaget"
            >
              xxxx
            </AccordionItem>
          </Accordion>
        </section>
        <section className="flex flex-col items-start col-span-3 mt-8 max-w-[100svw]">
          <h1 className="text-3xl px-4 font-headline">Liknande produkter</h1>
          <Products
            style={ProductsStyle.PRODUCTRECSLIDER}
            products={productList}
          />
        </section>
        <section className="flex flex-col items-start col-span-3 mt-8 max-w-[100svw]">
          <h1 className="text-3xl font-headline px-4">Andra har även köpt</h1>
          <Products
            style={ProductsStyle.PRODUCTRECSLIDER}
            products={productList}
          />
        </section>
      </section>
    </div>
  );
}

export default ProductPage;
