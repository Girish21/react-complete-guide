import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-19c0c.firebaseio.com/"
});

export default instance;
