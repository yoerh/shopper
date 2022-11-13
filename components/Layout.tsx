import styled from 'styled-components';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

interface Props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};
