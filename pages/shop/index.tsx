import axios from 'axios';
import { useEffect, useState } from 'react';

import { IProductData } from '../../interfaces/product.interface';

import Card from '../../components/Card/Card';

const ShopPage = () => {
  const [data, setData] = useState<IProductData[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/`);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((product: IProductData) => {
        return <Card {...product} key={product.id} />;
      })}
    </>
  );
};

export default ShopPage;
