import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import COLOR from './styles/color';
import { Container } from './styles/styledComponents';
import ClassicList from './components/ClassicList';
import './App.css';

type ThemeType = {
  primary: string;
  background: string;
  text: string;
};

const defaultTheme: ThemeType = {
  primary: COLOR.GREEN,
  background: COLOR.GRAY,
  text: COLOR.BLACK,
};
function App() {
  const [theme, setTheme] = useState(defaultTheme);
  //TODO: Add logic to change theme
  return (
    <ThemeProvider theme={{ colors: theme }}>
      <Container>
        <ClassicList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
