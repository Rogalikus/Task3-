import { v4 } from "uuid";
import { searchAPI } from "../API/API";

const getDataAC = "GET_DATA";
const delDataAC = "DEL_DATA";

let initialState = {
  name: null,
  country: null,
  universityData: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case getDataAC:
      return {
        ...state,
        universityData: action.universityData.map((item) => ({
          ...item,
          id: v4(),
        })),
      };
    case delDataAC:
      return {
        ...state,
        universityData: null,
      };
    default:
      return state;
  }
};
export const actions = {
  getData: (universityData) => {
    return { type: getDataAC, universityData };
  },
  delData: () => {
    return { type: getDataAC };
  },
};

export const getDataThunk = (name, country) => async (dispatch) => {
  let response = await searchAPI.getInfo(name, country);
  let universityData = response.data;
  dispatch(actions.getData(universityData));
};

export default searchReducer;
