import styled from 'styled-components';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const Main = styled.main`
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  padding: 1em;
`;

interface Props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};
