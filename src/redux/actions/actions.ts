import { CartItem, FilterState, SortType } from "../../constants/types";

export const addItem = (item: CartItem) => ({
  type: "ADD_TO_CART",
  payload: { item },
});

export const decreaseItem = (item: CartItem) => ({
  type: "DECREASE",
  payload: { item },
});

export const increaseItem = (item: CartItem) => ({
  type: "INCREASE",
  payload: { item },
});

export const deleteItem = (item: CartItem) => ({
  type: "DELETE_PRODUCT",
  payload: { item },
});

export const updateFilters = (filterState: FilterState) => ({
  type: "UPDATE_FILTERS",
  payload: filterState,
});

export const clearFilters = () => ({
  type: "CLEAR_FILTERS",
});

export const sortBy = (sortState: { sortType: SortType }) => ({
  type: "UPDATE_SORT",
  payload: sortState,
});
