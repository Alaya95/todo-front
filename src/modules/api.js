import { apiUrl } from "../store/keys";

export default async function(url, method = "GET", data) {
  return await fetch(apiUrl + url, {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
