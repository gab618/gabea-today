import { useEffect, useState } from 'react';
import {
  differenceInDays,
  differenceInMonths,
  differenceInSeconds,
  getDate,
} from 'date-fns';
import useWindowSize from 'react-use/lib/useWindowSize';
import { Content, ChiquitoContainer } from './styles';
import Mensiversary from '../Mensiversary';
import BaseLayout from '../BaseLayout';
import Lottie from 'react-lottie';
import hedgehogData from '../../lotties/hedgehog-sleeping.json';
import eyesData from '../../lotties/eyes.json';

function Chiquito() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [firstDay] = useState(new Date(2021, 0, 2));
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [dayOfMonth, setDayOfMonth] = useState(0);
  const [clicksCount, setClicksCount] = useState(0);

  const { height } = useWindowSize();

  function options(data) {
    return {
      loop: true,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  }

  useEffect(() => {
    const id = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    setSeconds(differenceInSeconds(currentDateTime, firstDay));
    setDays(differenceInDays(currentDateTime, firstDay));
    setMonths(differenceInMonths(currentDateTime, firstDay));
    setDayOfMonth(getDate(currentDateTime));
  }, [currentDateTime, firstDay]);

  function handleHedgehogClick() {
    setClicksCount(clicksCount + 1);
  }

  return (
    <BaseLayout>
      {dayOfMonth === 2 && <Mensiversary mensiversaryDay={months} />}
      <Content>
        <h1>
          <span>Hoje faz </span> <strong>{days} dias</strong>
          <span> que Chiquito está entre nós</span>
        </h1>

        <ChiquitoContainer onClick={handleHedgehogClick}>
          <Lottie
            options={options(hedgehogData)}
            height={height / 2.5}
            width={height / 2.5}
            isStopped={false}
            isPaused={false}
            speed={0.6}
          />
          <span winner={clicksCount > 2 ? 1 : 0}>
            <Lottie
              options={options(eyesData)}
              height={clicksCount >= 10 ? height / 12.5 : 0}
              width={height / 7.5}
              isStopped={false}
              isPaused={false}
              speed={1}
            />
          </span>
        </ChiquitoContainer>
        <h2>
          Mais precisamente{' '}
          {Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(seconds)}{' '}
          segundos de existência
        </h2>
      </Content>
    </BaseLayout>
  );
}

export default Chiquito;
