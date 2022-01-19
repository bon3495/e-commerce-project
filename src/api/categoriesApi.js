import axiosClient from './axiosClient';

const categoriesApi = {
  getAll: params => {
    const url = '/categories';
    return axiosClient.get(url, { params });
  },

  getProducts: ({ id, params }) => {
    const url = `/categories/${id}/products`;
    return axiosClient.get(url, params);
  },

  get: id => {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },

  update: data => {
    const url = `/categories/${data.id}`;
    return axiosClient.patch(url);
  },

  add(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.post(url, data);
  },

  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoriesApi;
