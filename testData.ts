// categories.ts
import { Categories, ProductItem } from "./src/constants/types";

export const categories: Categories = {
  klader: {
    label: "Kläder",
    subcategories: {
      herr: {
        label: "Herr",
        subcategories: {
          overdelar: { label: "Överdelar" },
          underdelar: { label: "Underdelar" },
          accessoarer: { label: "Accessoarer" },
          skor: { label: "Skor" },
        },
      },
      dam: {
        label: "Dam",
        subcategories: {
          overdelar: { label: "Överdelar" },
          underdelar: { label: "Underdelar" },
          accessoarer: { label: "Accessoarer" },
          skor: { label: "Skor" },
        },
      },
      barn: {
        label: "Barn",
        subcategories: {
          overdelar: { label: "Överdelar" },
          underdelar: { label: "Underdelar" },
          accessoarer: { label: "Accessoarer" },
          skor: { label: "Skor" },
        },
      },
      baby: {
        label: "Baby",
        subcategories: {
          overdelar: { label: "Överdelar" },
          underdelar: { label: "Underdelar" },
          accessoarer: { label: "Accessoarer" },
          skor: { label: "Skor" },
        },
      },
    },
  },
  hem: {
    label: "Hem",
    subcategories: {
      mobler: {
        label: "Möbler",
      },
      inredning: {
        label: "Inredning",
      },
      stad: {
        label: "Städ",
      },
      koksredskap: {
        label: "Köksredskap",
      },
    },
  },
  mat: {
    label: "Mat",
    subcategories: {
      skafferi: {
        label: "Skafferi ",
      },
      snacks: {
        label: "Snacks & godis",
      },
      drycker: {
        label: "Drycker ",
      },
      kosttillskott: {
        label: "Kosttillskott ",
      },
    },
  },
  hygien: {
    label: "Hygien & apotek",
    subcategories: {
      smink: {
        label: "Smink  ",
      },
      hudvard: {
        label: "Hudvård",
      },
      kroppsvard: {
        label: "Kroppsvård  ",
      },
      har: {
        label: "Hår  ",
      },
      parfym: {
        label: "Parfym   ",
      },
    },
  },
  elektronik: {
    label: "Elektronik",
    subcategories: {
      leksaker: {
        label: "Leksaker  ",
      },
    },
  },
  bygg: {
    label: "Bygg",
    subcategories: {
      leksaker: {
        label: "Leksaker  ",
      },
    },
  },
  fordon: {
    label: "Fordon",
    subcategories: {
      leksaker: {
        label: "Leksaker  ",
      },
    },
  },
  auktioner: {
    label: "Auktioner",
    subcategories: {
      leksaker: {
        label: "Leksaker  ",
      },
    },
  },
  ovrigt: {
    label: "ovrigt",
    subcategories: {
      leksaker: {
        label: "Leksaker  ",
      },
      pyssel: {
        label: "Pyssel",
      },
      traningsredskap: {
        label: "Träningsredskap ",
      },
      kosttillskott: {
        label: "Kosttillskott ",
      },
    },
  },
};

export const productList: ProductItem[] = [
  {
    id: 1,
    category: "klader",
    description: "Lorem ipsum fuck robin",
    price: 20,
    name: "Orange",
    inventory: 20,
    image: "./src/assets/images/gallery_img_1.png",
  },
  {
    id: 2,
    category: "klader",
    description: "Lorem ipsum fuck robin",
    price: 20,
    name: "Orange",
    inventory: 20,
    image: "./src/assets/images/gallery_img_2.png",
  },
  {
    id: 3,
    category: "klader",
    description: "Lorem ipsum fuck robin",
    price: 20,
    name: "Orange",
    inventory: 20,
    image: "./src/assets/images/gallery_img_1.png",
  },
  {
    id: 4,
    category: "klader",
    description: "Lorem ipsum fuck robin",
    price: 20,
    name: "Orange",
    inventory: 20,
    image: "./src/assets/images/gallery_img_2.png",
  },
  {
    id: 5,
    category: "klader",
    description: "Lorem ipsum fuck robin",
    price: 20,
    name: "Orange",
    inventory: 20,
    image: "./src/assets/images/gallery_img_1.png",
  },
  {
    id: 6,
    category: "klader",
    description: "Lorem ipsum fuck robin",
    price: 20,
    name: "Orange",
    inventory: 20,
    image: "./src/assets/images/gallery_img_2.png",
  },
  {
    id: 7,
    category: "klader",
    description: "Lorem ipsum fuck robin",
    price: 20,
    name: "Orange",
    inventory: 20,
    image: "./src/assets/images/gallery_img_2.png",
  },
  {
    id: 8,
    category: "klader",
    description: "Lorem ipsum fuck robin",
    price: 20,
    name: "Orange",
    inventory: 20,
    image: "./src/assets/images/gallery_img_2.png",
  },
];
