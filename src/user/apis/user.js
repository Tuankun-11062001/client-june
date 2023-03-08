const URL_Server = "http://localhost:3002/api/user";
const axios = require("axios");

const editPassword = async (data) =>
  await axios.put(`${URL_Server}/editPassword`, data);

export { editPassword };
