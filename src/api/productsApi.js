import axiosClient from './axiosClient';

const productsApi = {
  getAll(params) {
    const url = '/products';
    return axiosClient.get(url, { params });
  },

  getAllWithCategory: async params => {
    const url = '/products';
    const { routeName } = params;
    const newParams = { ...params };
    const { data, pagination } = await axiosClient.get(url, {
      params: {
        ...newParams,
        category: routeName,
      },
    });
    const [category] = await axiosClient.get('/categories', {
      params: { routeName },
    });

    return {
      title: category.title,
      categoryId: category.id,
      products: data,
      pagination,
    };
  },

  getBrands: async () => {
    const url = '/products';
    const data = await axiosClient.get(url);
    const brandsData = new Set(data.map(product => product.brand));
    const brands = Array.from(brandsData).map(brand => {
      const quantity = data.filter(product => product.brand === brand);
      return {
        brand,
        quantity: quantity.length,
      };
    });

    return brands;
  },

  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url);
  },

  add(data) {
    const url = `/products/${data.id}`;
    return axiosClient.post(url, data);
  },

  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productsApi;
