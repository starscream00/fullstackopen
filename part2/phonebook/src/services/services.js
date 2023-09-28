import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

const post = (load) => {
  return axios.post(baseUrl, load).then((response) => response.data);
};

const erase = (id) => {
  return axios.delete(baseUrl + "/" + id).then((res) => console.log(res));
};

const put = (id, data) => {
  return axios.put(baseUrl + "/" + id, data).then((response) => response.data);
};
//can be converted to async function
export default { getAll, post, erase, put };
