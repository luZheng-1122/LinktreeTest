import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { EventListData, defaultTheme } from './mockupdata';
import EventList from '../components/EventList';
import { ThemeProvider } from 'styled-components';

test('renders the page', () => {
  render(<App />);
  const linkElement = screen.getByText('music link');
  expect(linkElement).toBeInTheDocument();
});

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
