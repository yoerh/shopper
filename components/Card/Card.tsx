import Link from 'next/link';
import styled from 'styled-components';
import { IProductData } from '../../interfaces/product.interface';

const Wrapper = styled.a`
  display: block;
  padding: 1em;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 0 0 10px 5px rgba(147, 6, 166, 0.5);
  }
`;

const Title = styled.h3`
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

interface IllustrationProps {
  bgImg: string;
}

const Illustration = styled.div<IllustrationProps>`
  background-image: url(${(p) => p.bgImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  margin-bottom: 1em;
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  overflow: hidden;
  max-height: 3em;
  display: block;
  text-overflow: ellipsis;
  margin-bottom: 1em;
`;

const Price = styled.span`
  color: green;
  font-size: 2em;
  font-weight: 600;
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
        <Illustration bgImg={image} />
        <Title title={title}>{title}</Title>
        <Description>{description}</Description>
        <Price>{`${price}$`}</Price>
        <p>{`category ${category}`}</p>
        <p>{`rating ${rating}`}</p>
      </Wrapper>
    </Link>
  );
};

export default Card;
