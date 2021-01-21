import {
  SET_LIST_AUTHOR,
  SELECT_AUTHOR,
} from '../types/author.types';

export const setAuthorList = (data) => ({
  type: SET_LIST_AUTHOR,
  payload: data
});

export const selectAuthor = (data) => ({
  type: SELECT_AUTHOR,
  payload: data
});
