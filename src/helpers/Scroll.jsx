import { useEffect } from 'react';

const Scroll = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null; // No necesita renderizar nada
};

export default Scroll;
