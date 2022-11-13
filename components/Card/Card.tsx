import Link from 'next/link';
import styled from 'styled-components';
import { IProductData } from '../../interfaces/product.interface';

const Wrapper = styled.a`
  display: block;
  border: 1px solid #000;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
`;

const Card = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: IProductData): JSX.Element => {
  return (
    <Link href={`/shop/${id}`} passHref legacyBehavior>
      <Wrapper>
        <img src={image} width={100} height={100} />
        <p>{`title ${title}`}</p>
        <p>{`price ${price}`}</p>
        <p>{`description ${description}`}</p>
        <p>{`category ${category}`}</p>
        <p>{`rating ${rating}`}</p>
      </Wrapper>
    </Link>
  );
};

export default Card;
