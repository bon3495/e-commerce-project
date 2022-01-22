import { useEffect, useState } from 'react';
import productsApi from '../api/productsApi';
import useHttp from './useHttp';

const useFetch = () => {
  const [value, setValue] = useState([]);
  const { sendRequest } = useHttp();

  useEffect(() => {
    const handleData = dataResult => {
      const data = dataResult;

      if (data.length === 0) return;

      setValue([
        Math.trunc(data[0].newPrice),
        Math.ceil(data[data.length - 1].newPrice),
      ]);
    };
    sendRequest(
      productsApi,
      handleData,
      {
        _sort: 'newPrice',
        _orders: 'asc',
      },
      'getAll'
    );
  }, [sendRequest]);

  return value;
};

export default useFetch;
