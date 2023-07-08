import HeroResolved from 'components/HeroResolved/HeroResolved';
import Loader from 'components/Loader/Loader';
import { Component } from 'react';
import { fetchDayTrends } from 'services/movieApiService';
import { HeroContainer } from './Hero.styled';

class Hero extends Component {
  state = {
    dayTrends: [],
    status: 'idle',
  };
  componentDidMount() {
    this.getDayTrends();
  }
  getDayTrends = async () => {
    this.setState({ status: 'pending' });
    try {
      const { results } = await fetchDayTrends();
      this.setState({ dayTrends: results, status: 'resolved' });
    } catch (error) {
      console.error(error.message);
      this.setState({ status: 'rejected' });
    }
  };
  render() {
    const dayTrend = this.state.dayTrends[Math.floor(Math.random() * 19)];
    return (
      <HeroContainer>
        {this.state.status === 'pending' && <Loader />}
        {this.state.status === 'resolved' && (
          <HeroResolved dayTrend={dayTrend} />
        )}
      </HeroContainer>
    );
  }
}

export default Hero;
