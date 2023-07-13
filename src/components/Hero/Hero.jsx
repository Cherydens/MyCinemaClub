import { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';
import { fetchDayTrends } from 'services/movieApiService';
import { HeroContainer } from './Hero.styled';
import HeroRejected from 'components/HeroRejected/HeroRejected';
import Slider from 'components/Slider/Slider';
import HeroResolved from 'components/HeroResolved/HeroResolved';

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
      setDayTrends(results);
      setStatus('resolved');
    } catch (error) {
      console.error(error.message);
      setStatus('rejected');
    }
  };

  return (
    <HeroContainer>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <Slider dayTrends={dayTrends} />}
      {status === 'rejected' && <HeroRejected />}
    </HeroContainer>
  );
}
