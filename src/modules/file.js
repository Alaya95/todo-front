import { apiUrl } from '../store/keys';

export default async function(url, data, method = 'POST') {

  return await fetch(apiUrl + url, {
    method,
    headers: {
      "Authorization": 'Bearer ' + localStorage.getItem('token'),
  
    },
    body: data,
  }).then((res) => res.json());
}
