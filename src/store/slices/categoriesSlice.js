import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      title: 'Hoodie',
      imageUrl:
        'https://images.asos-media.com/products/calvin-klein-golf-logo-hoodie-in-black/201026806-1-black?$n_320w$&wid=317&fit=constrain',
      id: 1,
      linkUrl: 'hoodie',
    },
    {
      title: 'Jeans',
      imageUrl:
        'https://images.asos-media.com/products/levis-512-slim-taper-lo-ball-jeans-in-mid-blue-wash/201459522-1-blue?$n_320w$&wid=317&fit=constrain',
      id: 2,
      linkUrl: 'jeans',
    },
    {
      title: 'Jackets',
      imageUrl:
        'https://images.asos-media.com/products/liquor-n-poker-denim-jacket-in-black-with-parental-advisory-logo-and-distressing/23468800-1-black?$n_320w$&wid=317&fit=constrain',
      id: 3,
      linkUrl: 'jackets',
    },
    {
      title: "Men's Suits",
      imageUrl:
        'https://images.asos-media.com/products/asos-design-skinny-suit-trousers-with-window-pane-check-in-pale-blue/21859453-1-blue?$n_320w$&wid=317&fit=constrain',
      size: 'large',
      id: 4,
      linkUrl: 'suits',
    },
    {
      title: 'T-Shirt',
      imageUrl:
        'https://images.asos-media.com/products/boss-athleisure-tee-1-t-shirt-with-large-logo-in-white/201532196-1-white?$n_320w$&wid=317&fit=constrain',
      size: 'large',
      id: 5,
      linkUrl: 'tshirt',
    },
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
