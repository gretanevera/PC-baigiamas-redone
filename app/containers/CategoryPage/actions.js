/*
 *
 * CategoryPage actions
 *
 */

import { GET_MAIN_CATEGORIES, SHOW_ERRORS, SET_MAIN_CATEGORIES } from './constants';

export function getCategories() {
  return {
    type: GET_MAIN_CATEGORIES,
  };
}
export function setCategories(categories) {
  return {
    type: SET_MAIN_CATEGORIES,
    categories,
  };
}
export function showErrors(loading) {
  return {
    type: SHOW_ERRORS,
    loading,
  };
}
