import Link from 'next/link';
import { Container, Main } from '../components/sharedstyles';

export default function About() {
  return (
    <Container>
      <Main>
        <Link href='/'>&larr; Go Back</Link>
      </Main>
    </Container>
  );
}
