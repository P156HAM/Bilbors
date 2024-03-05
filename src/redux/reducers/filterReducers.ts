import { FilterState } from "../../constants/types";

const initialState: FilterState = {
  sort: "relevans",
  priceRange: {
    min: 0,
    max: 1000,
  },
  company: "",
};

export default function filterReducer(
  state: FilterState = initialState,
  action: any
): FilterState {
  switch (action.type) {
    case "UPDATE_FILTERS":
      return {
        ...state,
        ...action.payload,
      };

    case "UPDATE_SORT":
      return {
        ...state,
        sort: action.payload.sortType,
      };

    case "CLEAR_FILTERS":
      return initialState;

    default:
      return state;
  }
}
