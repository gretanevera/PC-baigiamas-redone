import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the categoryPage2 state domain
 */

const selectCategoryPage2Domain = state => state.categoryPage2 || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CategoryPage2
 */

const makeSelectCategoryPage2 = () =>
  createSelector(
    selectCategoryPage2Domain,
    substate => substate,
  );

export default makeSelectCategoryPage2;
export { selectCategoryPage2Domain };
