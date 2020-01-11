import {GET_MAIN_CATEGORIES, SHOW_INFO} from './constants';


export function getCategories(categories) {
  return {
    type: GET_MAIN_CATEGORIES,
    categories,
  }
}

export function showInfo(articles) {
  return {
    type: SHOW_INFO,
    articles,
  }
}
