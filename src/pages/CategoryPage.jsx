import {
  collection,
  limit,
  onSnapshot,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Breadcumbs, Delivery, ImageTitle, TitleContent } from '../components';
import { LIMIT_PRODUCTS, SHOP_NAME } from '../constants';
import { Products, ShowMoreBtn } from '../features/Category';
import { db } from '../firebase/firebase';
import { selectShopData } from '../store/selectors';

const CategoryPage = () => {
  const params = useParams();
  const category = useSelector(selectShopData(params.categoryId));
  const [productsList, setProductsList] = useState([]);
  const [lastDoc, setLastDoc] = useState();
  const [itemsLength, setItemsLength] = useState(LIMIT_PRODUCTS);

  useEffect(() => {
    const collectionRef = collection(db, 'products');
    const productsQuery = query(
      collectionRef,
      where(SHOP_NAME.CATEGORY, '==', params.categoryId),
      limit(LIMIT_PRODUCTS)
    );
    const unsub = onSnapshot(productsQuery, querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductsList(prevData => [...prevData, ...data]);
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setItemsLength(querySnapshot.size);
    });

    return unsub;
  }, [params.categoryId]);

  const handleGetMoreData = async () => {
    const collectionRef = collection(db, 'products');
    const productsQuery = query(
      collectionRef,
      where(SHOP_NAME.CATEGORY, '==', params.categoryId),
      startAfter(lastDoc),
      limit(LIMIT_PRODUCTS)
    );

    onSnapshot(productsQuery, querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductsList(prevData => [...prevData, ...data]);
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setItemsLength(querySnapshot.size);
    });
  };

  return (
    <div>
      <ImageTitle>{category.title}</ImageTitle>
      <Breadcumbs name={category.title} />
      <TitleContent subTitle="Go sporty this summer with this vintage navy">
        {category.title}
      </TitleContent>
      {/* <Filters /> */}
      <Products products={productsList} routeName={params.categoryId} />
      {itemsLength === LIMIT_PRODUCTS && (
        <ShowMoreBtn onClick={handleGetMoreData} />
      )}
      <Delivery />
    </div>
  );
};

export default CategoryPage;
