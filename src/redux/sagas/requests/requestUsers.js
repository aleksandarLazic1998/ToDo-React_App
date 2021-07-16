import axios from "axios";

export function getUserRequest() {
  axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
}
