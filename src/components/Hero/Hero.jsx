import { useEffect, useState } from 'react';

import HeroResolved from 'components/HeroResolved/HeroResolved';
import Loader from 'components/Loader/Loader';
import { fetchDayTrends } from 'services/movieApiService';
import { HeroContainer } from './Hero.styled';
import HeroRejected from 'components/HeroRejected/HeroRejected';

export default function Hero() {
  const [dayTrends, setDayTrends] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getDayTrends();
  }, []);

  const getDayTrends = async () => {
    setStatus('pending');
    try {
      const { results } = await fetchDayTrends();
      setStatus('resolved');
      setDayTrends(results);
    } catch (error) {
      console.error(error.message);
      setStatus('rejected');
    }
  };

  const dayTrend =
    dayTrends[Math.round(Math.random() * (dayTrends.length - 1))];

  return (
    <HeroContainer>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <HeroResolved dayTrend={dayTrend} />}
      {status === 'rejected' && <HeroRejected />}
    </HeroContainer>
  );
}
