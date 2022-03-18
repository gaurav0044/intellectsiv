import {    
    ADD_SPEND_ERROR,ADD_SPEND_REQUEST,ADD_SPEND_SUCCESS,
    GET_SPEND_ERROR,GET_SPEND_REQUEST,GET_SPEND_SUCCESS
  } from '../actions/types'
  import { put, takeEvery } from 'redux-saga/effects'
import { addSpending, getSpendingLimit } from '../../apis/spending-amountAPI'
  
  function* addSpends(action) {
    try {
      const data = yield addSpending(action.payload)
      yield put({ type: ADD_SPEND_SUCCESS, data })
    } catch (e) {
      yield put({ type: ADD_SPEND_ERROR })
    }
  }
  
  function* fetchSpend(action) {
    try {
      const data = yield getSpendingLimit();
      yield put({ type: GET_SPEND_SUCCESS, data })
    } catch (e) {
      yield put({ type: GET_SPEND_ERROR })
    }
  }
  
  function* dataSaga() {
    yield takeEvery(ADD_SPEND_REQUEST, addSpends)
    yield takeEvery(GET_SPEND_REQUEST, fetchSpend)
  }
  
  export default dataSaga;