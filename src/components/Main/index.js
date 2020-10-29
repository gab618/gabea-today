import { useEffect, useState } from 'react';
import { differenceInDays, differenceInSeconds } from 'date-fns';
import { Container, Content, Footer } from './styles';

function Main() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [firstDay] = useState(new Date(2020, 8, 2));
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    setSeconds(differenceInSeconds(currentDateTime, firstDay));
    setDays(differenceInDays(currentDateTime, firstDay));
  }, [currentDateTime, firstDay]);

  return (
    <Container>
      <Content>
        <h1>
          <span>Hoje faz </span> <strong>{days} dias</strong>
          <span> que GaBea é real</span>
        </h1>
        <h2>Mais precisamente {seconds} segundos</h2>
      </Content>
      <Footer>
        <p>
          Made with <span>💜</span> by{' '}
          <a href="https://twitter.com/ezrealblindado">Gabriel</a>{' '}
          <span>🦔</span> · For{' '}
          <a href="https://twitter.com/beascoitinho">Beatriz</a> <span>🍪</span>
        </p>
      </Footer>
    </Container>
  );
}

export default Main;
