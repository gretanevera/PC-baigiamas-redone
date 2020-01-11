/*
 *
 * CategoryPage reducer
 *
 */
import produce from 'immer';
import { SET_MAIN_CATEGORIES, SHOW_ERRORS } from './constants';

export const initialState = {
  message:'',
  categories: [],
};

/* eslint-disable default-case, no-param-reassign */
const categoryPage2Reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MAIN_CATEGORIES:
        draft.categories = action.categories
        break;
        case SHOW_ERRORS:
        draft.message = action.message
        break;
    }
  });

export default categoryPage2Reducer;
