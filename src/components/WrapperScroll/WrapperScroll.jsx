import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const WrapperScroll = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return <Outlet />;
};

export default WrapperScroll;
