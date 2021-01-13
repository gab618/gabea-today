import { useEffect, useState } from 'react';
import {
  differenceInDays,
  differenceInMonths,
  differenceInSeconds,
  getDate,
} from 'date-fns';
import useWindowSize from 'react-use/lib/useWindowSize';
import { Content } from './styles';
import Mensiversary from '../Mensiversary';
import BaseLayout from '../BaseLayout';
import Lottie from 'react-lottie';
import animationData from '../../lotties/hedgehog-sleeping.json';

function Chiquito() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [firstDay] = useState(new Date(2021, 0, 2));
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [dayOfMonth, setDayOfMonth] = useState(0);

  const { height } = useWindowSize();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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

  return (
    <BaseLayout>
      {dayOfMonth === 2 && <Mensiversary mensiversaryDay={months} />}
      <Content>
        <h1>
          <span>Hoje faz </span> <strong>{days} dias</strong>
          <span> que Chiquito está entre nós</span>
        </h1>
        <Lottie
          options={defaultOptions}
          height={height / 2.5}
          width={height / 2.5}
          isStopped={false}
          isPaused={false}
          speed={0.6}
        />
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
