import axios from "axios";
const loginApi = (request) => {
  return axios
    .post("http://localhost:8080/identity/auth/login", request)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { loginApi };
