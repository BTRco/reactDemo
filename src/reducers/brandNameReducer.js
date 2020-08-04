import { GET_BRAND_NAMES, GET_BRAND_NAME, DELETE_BRAND_NAME } from "../actions/types";

const initialState = {
  brandNames: [],
  brandName: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BRAND_NAMES:
      return {
        ...state,
        brandNames: action.payload,
      };
      case GET_BRAND_NAME:
      return {
        ...state,
        brandName: action.payload,
      };
    case DELETE_BRAND_NAME:
      return {
        ...state,
        brandNames: state.brandNames.filter(
            brandName => brandName.id !== action.payload
            )
      };
    default:
      return state;
  }
}
