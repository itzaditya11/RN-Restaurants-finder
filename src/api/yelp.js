import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer wONEDtPNBvFKja3ev4B0l4-yKcTONlsUjGJPX3UlChaWrVYtkmqwqPoFo0mCRXn8g9luKS9uPN1uj2oWxfvftj8KLZReh8JmoMi3tf1TBc1t5tsfM0XC3JialbVIX3Yx",
  },
});
