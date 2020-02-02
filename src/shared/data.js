// import * as axios from "../../node_modules/axios";
import axios from "axios";
axios.defaults.crossDomain = true;

import { format } from "date-fns";
import { displayDateTimeFormat } from "./constants";

import { API } from "./config";

const getAllUsers = async function() {
  try {
    const url = API === "api" ? `${API}/users.json` : `${API}/app-users-all/`;
    const data = await getAPICaller(url);
    const users = data.map(user => {
      user.last_login = new Date(user.last_login);
      user.last_login = format(user.last_login, displayDateTimeFormat);
      return user;
    });

    return users;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};

const postUserName = async function(user) {
  try {
    if (API === "api") return;
    const url = `${API}/app-users-all/${user.id}/`;
    patchAPICaller(url, { username: user.username });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return;
  }
};

const getAPICaller = async function(url) {
  const response = await axios.get(url);
  const data = parseListAxios(response);
  return data;
};

const patchAPICaller = async function(url, data) {
  const response = await axios.patch(url, data);
  if (response.status !== 200) throw Error(response.message);
  return;
};

const parseListAxios = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};

export const data = {
  getAllUsers,
  postUserName
};
