import axios from './interceptor';

export function PostRequest(url, data, config = {}) {
  return axios.post(url, data, config);
}

export function PutRequest(url, data, config = {}) {
  return axios.put(url, data, config);
}

export function GetRequest(url, data, config = {}) {
  config.params = data;
  return axios.get(url, config);
}
