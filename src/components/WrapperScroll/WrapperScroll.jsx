import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WrapperScroll = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return children;
};

export default WrapperScroll;
