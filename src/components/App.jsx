import { Component } from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import WeeklyTrends from './WeeklyTrends/WeeklyTrends';
import UpcomingThisMonth from './UpcomingThisMonth/UpcomingThisMonth';
import Footer from './Footer/Footer';
import { Container } from './App.styled';
import { fetchDayTrends } from 'services/movieApiService';

export class App extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header />
        <Hero />
        <WeeklyTrends />
        <UpcomingThisMonth />
        <Footer />
      </Container>
    );
  }
}
