import http from '../http/request';

function AddProducts(body) {
  return new Promise((resolve, reject) => {
    http('/product', 'post', body, null)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

function getAllProducts() {
  return new Promise((resolve, reject) => {
    http('/allproduct', 'get', null, null)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

function updateAllProducts(body) {
  return new Promise((resolve, reject) => {
    http('/product', 'put', body, null)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

function DeleteProducts(id) {
  return new Promise((resolve, reject) => {
    http(`/product/${id}`, 'delete', null, null)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export { AddProducts, getAllProducts, updateAllProducts, DeleteProducts };
