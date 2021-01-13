import { Container, Footer } from './styles';
import { MdFavorite } from 'react-icons/md';

function BaseLayout({ children }) {
  return (
    <Container>
      {children}
      <Footer>
        <p>
          Made with
          <MdFavorite /> by{' '}
          <a href="https://twitter.com/ezrealblindado">
            Gabriel <span>🦔</span>
          </a>{' '}
          · Dedicated to{' '}
          <a href="https://twitter.com/beascoitinho">
            Beatriz <span>🍪</span>
          </a>{' '}
        </p>
      </Footer>
    </Container>
  );
}

export default BaseLayout;
