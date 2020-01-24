/*
 *
 * CategoryPage actions
 *
 */

import { GET_MAIN_CATEGORIES, LOADING, SET_MAIN_CATEGORIES } from './constants';

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
    type: LOADING,
    loading,
  };
}
