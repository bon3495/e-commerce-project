import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcumbs, Delivery, ImageTitle } from '../components';
import { SHOP_NAME, titleConvert } from '../constants';
import { ProductContent } from '../features/Product';
import { db } from '../firebase/firebase';

const ProductPage = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const getProductDetail = async () => {
      const detailRef = doc(db, SHOP_NAME.PRODUCTS, params.productId);
      const detailSnap = await getDoc(detailRef);
      setProductDetail(detailSnap.data());
      setIsLoading(false);
    };

    getProductDetail();
  }, [params.productId]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ImageTitle>{titleConvert(params.categoryId)}</ImageTitle>
      <Breadcumbs name={productDetail.name} category={params.categoryId} />
      <ProductContent product={productDetail} isLoading={isLoading} />
      <Delivery />
    </div>
  );
};

export default ProductPage;
