import axios from "axios";

const BaseUrl = "https://users-data-7mwm.onrender.com/users";

export const getUsers = async () => {
  const response = await axios.get(BaseUrl);
  return response;
};

export const getUserById = async (id) => {
  const response = await axios.get(BaseUrl + "/" + id);
  return response;
};

// data:
// const data = {
//   name: "balaji Kosuri",
//   email: "balajiKosuri@gmail.com",
//   number: "+917894561230",
// };
// //
export const postUser = async (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.post(BaseUrl, data, headers);

  return response;
};

export const putUser = async (data, id) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.put(BaseUrl + "/" + id, data, headers);
  return response;
};

// delete user by id
export const deleteUser = async (id) => {
  const response = await axios.delete(BaseUrl + "/" + id);
  return response;
};
// try {
//   await putUser(data, 2);
// } catch (error) {
//   alert(error);
// }
