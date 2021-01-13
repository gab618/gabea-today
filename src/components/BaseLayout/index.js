import { Container, Footer } from './styles';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

function BaseLayout({ children }) {
  return (
    <Container>
      {children}
      <Footer>
        <p>
          Made with
          <MdFavorite /> by{' '}
          <a href="https://twitter.com/ezrealblindado">
            Gabriel
            <Link to="/chiquito">
              <span>🦔</span>
            </Link>
          </a>
          · Dedicated to{' '}
          <a
            href="https://twitter.com/beascoitinho"
            target="_blank"
            rel="noreferrer"
          >
            Beatriz <span>🍪</span>
          </a>{' '}
        </p>
      </Footer>
    </Container>
  );
}

export default BaseLayout;
