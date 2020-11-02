import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import { Container } from './styles';

function Mensiversary({ mensiversaryDay }) {
  const { width, height } = useWindowSize();

  return (
    <Container>
      <Confetti width={width} height={height} />
      <strong>
        Aniversário de <span>{mensiversaryDay} meses</span>!
      </strong>
    </Container>
  );
}

export default Mensiversary;
