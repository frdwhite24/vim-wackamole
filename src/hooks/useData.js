import { useEffect, useState } from 'react';

export const useData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://free-public-api.herokuapp.com/generate_lorem_ipsum/?input=6',
      );
      const data = await response.text();
      if (data) {
        setData(data);
      }
    };
    fetchData();
  }, []);

  return {
    data,
    loading: !data,
  };
};
