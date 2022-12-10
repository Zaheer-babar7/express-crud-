import axios from 'axios';

const baseURL = 'http://localhost:8080';

const http = (url, type, body, token) => {
  return new Promise((resolve, reject) => {
    axios[type](
      `${baseURL}${url}`,
      token
        ? {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        : body
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default http;
