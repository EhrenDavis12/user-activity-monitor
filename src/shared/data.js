// import * as axios from "../../node_modules/axios";

import { format } from "date-fns";
import { displayDateTimeFormat } from "./constants";

import { API } from "./config";

const getUsers = async function() {
  try {
    // const response = await axios.get(`${API}/users.json`);
    const response = await fetch(`${API}/app-users-all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
    let data = await parseListFetch(response);
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

const parseListFetch = async function(response) {
  if (response.status !== 200) throw Error(response.message);
  if (!response.body) return [];
  let list = await response.text();
  if (list === "") {
    list = [];
  }
  return JSON.parse(list);
};

// const parseListAxios = response => {
//   if (response.status !== 200) throw Error(response.message);
//   if (!response.data) return [];
//   let list = response.data;
//   if (typeof list !== "object") {
//     list = [];
//   }
//   return list;
// };

export const data = {
  getUsers
};
