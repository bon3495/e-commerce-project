export const NAV_HEIGHT = 64;
export const ANNOUNCEMENT_HEIGHT = 30;
export const SHOP_NAME = {
  PRODUCTS: 'products',
  CATEGORY: 'category',
  USERS: 'users',
};

export const LIMIT_PRODUCTS = 12;

export const calcNewPrice = (originPrice, discount) => {
  return ((originPrice * (100 - discount)) / 100).toFixed(2);
};

export const titleConvert = title => title[0].toUpperCase() + title.slice(1);

export const calcPagination = (total, limit) => {
  return Math.ceil(total / limit);
};

export const scrollToProducts = id => {
  return document.getElementById(id).offsetTop - NAV_HEIGHT;
};
