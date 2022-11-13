import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProductData } from '../../interfaces/product.interface';

const ShopItem = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState<IProductData>();
  const [isLoading, setLoading] = useState(false);

  const getData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <p>Loading..</p>;
  if (!data) return <p>404</p>;

  return (
    <>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.price}</p>
      <p>{data.description}</p>
    </>
  );
};

export default ShopItem;
