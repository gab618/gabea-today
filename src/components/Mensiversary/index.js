import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import { Container } from './styles';

function Mensiversary({ years, months }) {
  const { width, height } = useWindowSize();

  return (
    <Container>
      <Confetti width={width} height={height} />
      <strong>
        Aniversário de{' '}
        {years > 0 && months % 12 === 0 && (
          <span>
            {years} ano{years > 1 ? 's' : ''}
          </span>
        )}
        {months % 12 !== 0 && (
          <span>
            {months}
            {months > 1 ? ' meses' : ' mês'}
          </span>
        )}
        {'!'}
      </strong>
    </Container>
  );
}

export default Mensiversary;
