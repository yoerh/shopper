import axios from 'axios';
import { useEffect, useState } from 'react';

import { IProductData } from '../../interfaces/product.interface';

import Card from '../../components/Card/Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  row-gap: 2em;
  flex-flow: row wrap;
`;

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
    <Wrapper>
      {data.map((product: IProductData) => {
        return <Card {...product} key={product.id} />;
      })}
    </Wrapper>
  );
};

export default ShopPage;
