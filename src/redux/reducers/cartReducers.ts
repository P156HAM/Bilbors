import { CartItem } from "../../constants/types";

interface CartState {
  productList: CartItem[];
}

const initialState: CartState = {
  productList: [],
};

interface Action {
  type: string;
  payload?: {
    item: CartItem;
  };
}

export default function cartReducer(
  state: CartState = initialState,
  action: Action
): CartState {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload) {
        const { item } = action.payload;
        // Find if the item already exists in the cart
        const existingItemIndex = state.productList.findIndex(
          (i) => i.id === item.id
        );

        if (existingItemIndex !== -1) {
          // Item exists, update its quantity
          const updatedItems = state.productList.map((cartItem, index) =>
            index === existingItemIndex
              ? { ...cartItem, quantity: (cartItem.quantity ?? 0) + 1 }
              : cartItem
          );
          return {
            ...state,
            productList: updatedItems,
          };
        } else {
          // Item doesn't exist, add to the cart with quantity 1
          return {
            ...state,
            productList: [...state.productList, { ...item, quantity: 1 }],
          };
        }
      }
      return state;

    case "INCREASE":
      if (action.payload) {
        const { item } = action.payload;
        const existingItemIndex = state.productList.findIndex(
          (i) => i.id === item.id
        );

        if (existingItemIndex !== -1) {
          const updatedItems = state.productList.map((cartItem, index) =>
            index === existingItemIndex
              ? { ...cartItem, quantity: (cartItem.quantity ?? 0) + 1 }
              : cartItem
          );
          return {
            ...state,
            productList: updatedItems,
          };
        }
      }
      return state;

    case "DECREASE":
      if (action.payload) {
        const { item } = action.payload;
        const existingItemIndex = state.productList.findIndex(
          (i) => i.id === item.id
        );

        if (existingItemIndex !== -1) {
          const itemToUpdate = state.productList[existingItemIndex];
          if (itemToUpdate.quantity && itemToUpdate.quantity > 1) {
            // Decrease the quantity
            const updatedItems = state.productList.map((cartItem, idx) =>
              idx === existingItemIndex
                ? { ...cartItem, quantity: (cartItem.quantity ?? 0) - 1 }
                : cartItem
            );
            return {
              ...state,
              productList: updatedItems,
            };
          } else {
            // Remove the item as its quantity will become 0
            const updatedItems = [
              ...state.productList.slice(0, existingItemIndex),
              ...state.productList.slice(existingItemIndex + 1),
            ];
            return {
              ...state,
              productList: updatedItems,
            };
          }
        }
      }
      return state;

    case "DELETE_PRODUCT":
      if (action.payload) {
        const { item } = action.payload;
        const updatedProductList = state.productList.filter(
          (i) => i.id !== item.id
        );
        return {
          ...state,
          productList: updatedProductList,
        };
      }
      return state;

    default:
      return state;
  }
}
