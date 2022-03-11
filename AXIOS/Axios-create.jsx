import axios from "axios";

const instance = axios.create({
  baseURL: process.env.Url,
});
const ISSERVER = typeof window === "undefined";
// console.log(localStorage);
// console.log(ISSERVER)
// console.log(process.browser)
if (process.browser && localStorage.getItem("token")) {
  let data = localStorage.getItem("token");
  //   console.log(data);
  instance.defaults.headers.common["Authorization"] = data;
} else {
  // let data=localStorage.getItem('token');
  // console.log(data);
  // instance.defaults.headers.common['Authorization']='data';
}

instance.defaults.headers.common["Content-Type"] = "application/json";
export default instance;
