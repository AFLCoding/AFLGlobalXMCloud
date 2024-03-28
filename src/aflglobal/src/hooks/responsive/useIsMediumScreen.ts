import { useEffect, useState } from 'react';

const useIsMediumScreen = () => {
  const [isMedium, setIsMedium] = useState(false);

  const handleOnResize = () => {
    setIsMedium(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleOnResize);
    handleOnResize();
  }, []);

  return isMedium;
};

export default useIsMediumScreen;
