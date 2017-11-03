import axios from "axios"
axios.interceptors.response.use(data => {
  data = data.data;
  // if(data.status){
  //   return data;
  // }else{
  //   return Promise.reject(data);
  // }
  return data;

}, error => {
  return Promise.reject(error)
});
if(process.env.NODE_ENV ==='development'){
  axios.defaults.baseURL = "http://192.168.1.240:8080";
  axios.get("/weChat/memberCenter/memberRegister").then(function (data) {
    window.user = data;
    console.log( window.user);
  });
}
