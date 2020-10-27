import {
  differenceInDays,
  differenceInMonths,
  differenceInSeconds,
  getSeconds,
  subSeconds,
} from 'date-fns';
import { useEffect, useState } from 'react';

function App() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [firstDay, setFirstDay] = useState(new Date(2020, 8, 2));
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
    console.log({ seconds, days });
  }, [currentDateTime, firstDay]);

  return (
    <>
      <h1>{`${currentDateTime.toLocaleDateString()} ${currentDateTime.toLocaleTimeString()}`}</h1>
      <h1>{`${currentDateTime.toLocaleDateString()} ${currentDateTime.toLocaleTimeString()}`}</h1>
    </>
  );
}

export default App;
