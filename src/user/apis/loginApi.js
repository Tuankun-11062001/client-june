const URL_Server = "http://localhost:3002/api/user";
const axios = require("axios");

const login = async (data) => await axios.post(`${URL_Server}/checkuser`, data);
const register = async (data) =>
  await axios.post(`${URL_Server}/createUser`, data);
const getUserByToken = async (data) =>
  await axios.post(`${URL_Server}/checkToken`, data);

export { login, getUserByToken, register };
