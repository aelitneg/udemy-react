import axios from 'axios';

const { REACT_APP_APIS_STREAMS: APIS_STREAMS } = process.env;

export default axios.create({
  baseURL: APIS_STREAMS,
});
