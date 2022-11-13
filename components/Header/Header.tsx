import Link from 'next/link';
import styled from 'styled-components';
import { CartButton } from './CartButton';

const Wrapper = styled.div`
  background-color: #626262;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  padding-left: 1em;
  padding-right: 1em;
`;

const Logo = styled.a`
  display: block;
  background-color: #000;
  width: 10em;
  height: 3em;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link href={`/`} passHref legacyBehavior>
          <Logo />
        </Link>
        <Link href={`/shop/`}>Shop</Link>
      </LogoWrapper>
      <CartButton />
    </Wrapper>
  );
};
