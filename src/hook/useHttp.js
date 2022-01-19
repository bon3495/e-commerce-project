import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (fetchApi, applyData, dataRequest, method) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetchApi[method](dataRequest);
        applyData(res);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    },
    []
  );

  return {
    sendRequest,
    isLoading,
    error,
  };
};

export default useHttp;
