import axios from "axios";

export function getUserRequest() {
  return axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });
}
