import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { EventListData, defaultTheme, MusicListData } from './mockupdata';
import EventList from '../components/EventList';
import MusicList from '../components/MusicList';
import { ThemeProvider } from 'styled-components';

test('When a user clicks on the Shows List Link, a list of X shows are visible', () => {
  render(
    <ThemeProvider theme={{ colors: defaultTheme }}>
      <EventList />
    </ThemeProvider>
  );
  const item1 = EventListData.list[0].title;

  //TODO: only test for the first link button
  const linkElement = screen.getByText(item1);
  expect(linkElement).toBeInTheDocument();

  const event1Date = EventListData.list[0].panelList[0].date;
  fireEvent.click(screen.getByText(item1));
  const dateElement = screen.getByText(event1Date);
  expect(dateElement).toBeInTheDocument();
});

test('When a user clicks on a Music Player Link, the Spotify streaming platform is visible', () => {
  render(
    <ThemeProvider theme={{ colors: defaultTheme }}>
      <MusicList />
    </ThemeProvider>
  );

  // open the 1st show list
  const item1 = MusicListData.musicList[0].title;
  const linkElement = screen.getByText(item1);
  expect(linkElement).toBeInTheDocument();
  fireEvent.click(screen.getByText(item1));

  // click the spotify element
  const spotify = MusicListData.platforms[0].platform;
  const spotifyElement = screen.getByText(spotify);
  expect(spotifyElement).toBeInTheDocument();
  fireEvent.click(spotifyElement);

  // check the player visibility
  expect(screen.getByTestId('musicPlayer')).toBeVisible();
});

test('When a user clicks on the Music Player Link and then on a Shows List Link, the Music Player Link closes', () => {
  render(
    <ThemeProvider theme={{ colors: defaultTheme }}>
      <MusicList />
    </ThemeProvider>
  );

  // open the 1st show list
  const item1 = MusicListData.musicList[0].title;
  const linkElement = screen.getByText(item1);
  expect(linkElement).toBeInTheDocument();
  fireEvent.click(screen.getByText(item1));

  // click the spotify element
  const spotify = MusicListData.platforms[0].platform;
  const spotifyElement = screen.getByText(spotify);
  expect(spotifyElement).toBeInTheDocument();
  fireEvent.click(spotifyElement);

  // check the player visibility
  expect(screen.getByTestId('musicPlayer')).toBeVisible();

  // Open the Show List button and the Music Player should be closed
  fireEvent.click(screen.getByText('Shows'));
  // check the player visibility
  expect(screen.queryByTestId('musicPlayer')).toBeNull();
});
