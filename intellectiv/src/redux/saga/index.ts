import {    
    ADD_ANGER_ERROR,ADD_ANGER_REQUEST,ADD_ANGER_SUCCESS,
    GET_ANGER_ERROR,GET_ANGER_REQUEST,GET_ANGER_SUCCESS
  } from '../actions/types'
  import { put, takeEvery } from 'redux-saga/effects'
import { addAnger, getAngerLimit } from '../../apis/save-angerApi'
  
  function* addAngers(action) {
    try {
      const data = yield addAnger(action.payload)
      yield put({ type: ADD_ANGER_SUCCESS, data })
    } catch (e) {
      yield put({ type: ADD_ANGER_ERROR })
    }
  }
  
  function* fetchAnger(action) {
    try {
      const data = yield getAngerLimit();
      yield put({ type: GET_ANGER_SUCCESS, data })
    } catch (e) {
      yield put({ type: GET_ANGER_ERROR })
    }
  }
  
  function* dataSaga() {
    yield takeEvery(ADD_ANGER_REQUEST, addAngers)
    yield takeEvery(GET_ANGER_REQUEST, fetchAnger)
  }
  
  export default dataSaga;