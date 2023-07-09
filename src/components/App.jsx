import Header from './Header/Header';
import Hero from './Hero/Hero';
import WeeklyTrends from './WeeklyTrends/WeeklyTrends';
import UpcomingThisMonth from './UpcomingThisMonth/UpcomingThisMonth';
import Footer from './Footer/Footer';

import { Container } from './App.styled';

export default function App() {
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
