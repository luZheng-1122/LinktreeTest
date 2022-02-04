import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import COLOR from './styles/color';
import { Container } from './styles/styledComponents';
import ClassicList from './components/ClassicList';
import MusicList from './components/MusicList';
import EventList from './components/EventList';
import './App.css';

type ThemeType = {
  primary: string;
  background: string;
  text: string;
};

const defaultTheme: ThemeType = {
  primary: COLOR.GREEN,
  background: COLOR.GREY_LIGHT,
  text: COLOR.BLACK,
};
function App() {
  const [theme, setTheme] = useState(defaultTheme);
  //TODO: Add logic to change theme
  // solution: make a page for users to setup their prefered them, and store to API. Read user's color preference from API here and call setTheme()
  return (
    <ThemeProvider theme={{ colors: theme }}>
      <Container>
        <ClassicList />
        <MusicList />
        <EventList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
