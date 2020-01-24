 import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_MAIN_CATEGORIES, SET_MAIN_CATEGORIES, LOADING } from './constants';
import {db} from 'codemash'
import { showErrors } from './actions';



function* getCategories(action) {
  const result = yield call (db.getRecords, 'articles');
  yield put({
    type: SET_MAIN_CATEGORIES,
    categories: result,
  });
  yield put({
    type : LOADING,
    loading: false,
  });
  console.log('saga is running', result);
}


export default function* categoryPage2Saga() {
  yield takeLatest(GET_MAIN_CATEGORIES, getCategories, showErrors);
}
