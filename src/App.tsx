import React from 'react';
import logo from './logo.svg';
import { Container } from './styles/styledComponents';
import ClassicList from './components/ClassicList';
import MusicList from './components/MusicList';
import EventList from './components/EventList';
import './App.css';

function App() {
  return (
    <Container>
      <ClassicList />
      <MusicList />
      <EventList />
    </Container>
  );
}

export default App;
