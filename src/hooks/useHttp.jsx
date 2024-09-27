import { useEffect, useState } from 'react';

export const useHttp = (fn, param) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fn(param);
      setData(data);
    };
    getData();
  }, [fn, param]);

  return [data, setData];
};
