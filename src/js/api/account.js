import axios from "axios"

export default {
  register(params){
    return axios.post("/weChat/memberCenter/saveMembership",params);
  },
  personalCenter(openId){
    return axios.get(`/weChat/memberCenter/personalCenter`);
  }
}
