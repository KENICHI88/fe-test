import {
  SET_LIST_AUTHOR,
  SELECT_AUTHOR,
} from '../types/author.types';


const INITIAL_STATE = {
  data : [],
  selectIndex : 0,
}

const authorReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_LIST_AUTHOR:
      return {...state, data : action.payload};
    case SELECT_AUTHOR:
        return {...state, selectIndex : action.payload};
    default:
      return state;
  }
}


export default authorReducer;
