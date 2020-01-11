import produce from "immer";
import {GET_MAIN_CATEGORIES, SHOW_INFO} from "./constants";


export const initialState = {
  categories: [],
};


const categoryReducer = (state = initialState, action) =>
  produce(state, draft => {
  switch (action.type) {
    case GET_MAIN_CATEGORIES:
      draft.categories = action.categories;
  
      break;
  }

}
)
;
export default categoryReducer;
