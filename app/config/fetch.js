import {server} from './api';
export default fetchData = (url,params) => {
  const getParams = data => {
    return Object.entries(data).map(([key, value]) => {
      return `${key}=${value}`
    }).join('&');
  };
  return fetch(`${server}${url}?${getParams(params)}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}