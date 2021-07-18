import { useEffect, useState } from 'react';

export const useData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://hipsum.co/api/?type=hipster-centric&sentences=25',
      );
      const data = await response.json();
      if (data) {
        setData(data[0]);
      }
    };
    fetchData();
  }, []);

  return {
    data,
    loading: !data,
  };
};
