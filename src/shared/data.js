import * as axios from "../../node_modules/axios";

// import { format } from "date-fns";
// import { inputDateFormat } from "./constants";

import { API } from "./config";

const getUsers = async function() {
  try {
    const response = await axios.get(`${API}/users.json`);
    let users = parseList(response);
    return users;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};

export const data = {
  getUsers
};
