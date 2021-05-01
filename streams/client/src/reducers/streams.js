import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';

import { omit, mapKeys } from 'lodash';

const streams = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_STREAMS:
      return { ...state, ...mapKeys(payload, 'id') };
    case CREATE_STREAM:
    case FETCH_STREAM:
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      return omit(state, payload);
    default:
      return state;
  }
};

export default streams;
