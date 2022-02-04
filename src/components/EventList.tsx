import React, { useState } from 'react';
import styled from 'styled-components';
import { List, Logo, Pragraph1, Pragraph2 } from '../styles/styledComponents';
import ProfileIcon from './ProfileIcon';
import LinkButton from './LinkButton';
import profilePNG from '../assets/profile-picture.png';
import logo from '../assets/logo.svg';
import rightArrow from '../assets/icons/arrow.svg';
import bySongKick from '../assets/icons/by-songkick-wordmark.svg';
type Props = {};

const EventListData = {
  profile: {
    name: 'Emma',
    icon: profilePNG,
  },
  list: [
    {
      title: 'Event Item 1',
      panelList: [
        {
          date: 'Fri, 01 Feb 2022',
          venue: 'Venue Name 1',
          city: 'Sydney',
          isSold: false,
          url: 'https://www.songkick.com/live-stream-concerts/40197193-ed-sheeran',
        },
        {
          date: 'Sat, 02 Feb 2022',
          venue: 'Venue Name 2',
          city: 'Sydney',
          isSold: true,
          url: 'https://www.songkick.com/live-stream-concerts/40197193-ed-sheeran',
        },
        {
          date: 'Sun, 03 Feb 2022',
          venue: 'Venue Name 3',
          city: 'Melbourne',
          isSold: false,
          url: 'https://www.songkick.com/live-stream-concerts/40197193-ed-sheeran',
        },
        {
          date: 'Mon, 04 Feb 2022',
          venue: 'Venue Name 4',
          city: 'Melbourne',
          isSold: false,
          url: 'https://www.songkick.com/live-stream-concerts/40197193-ed-sheeran',
        },
        {
          date: 'Sun, 03 Feb 2022',
          venue: 'Venue Name 3',
          city: 'Melbourne',
          isSold: false,
          url: 'https://www.songkick.com/live-stream-concerts/40197193-ed-sheeran',
        },
        {
          date: 'Mon, 04 Feb 2022',
          venue: 'Venue Name 4',
          city: 'Melbourne',
          isSold: false,
          url: 'https://www.songkick.com/live-stream-concerts/40197193-ed-sheeran',
        },
      ],
    },
    {
      title: 'Event Item 2',
      panelList: [
        {
          date: 'Sat, 02 Feb 2022',
          venue: 'Venue Name 2',
          city: 'Sydney',
          isSold: true,
          url: 'https://www.songkick.com/live-stream-concerts/40197193-ed-sheeran',
        },
      ],
    },
    {
      title: 'Event Item 3',
      panelList: [
        {
          date: 'Sun, 03 Feb 2022',
          venue: 'Venue Name 3',
          city: 'Melbourne',
          isSold: false,
          url: 'https://www.songkick.com/live-stream-concerts/40197193-ed-sheeran',
        },
      ],
    },
    {
      title: 'Event Item 4',
      panelList: [
        {
          date: 'Mon, 04 Feb 2022',
          venue: 'Venue Name 4',
          city: 'Melbourne',
          isSold: false,
          url: 'https://www.songkick.com/live-stream-concerts/40197193-ed-sheeran',
        },
      ],
    },
  ],
};

const EventList: React.FC<Props> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <List>
      <ProfileIcon
        name={EventListData.profile.name}
        icon={EventListData.profile.icon}
      />
      {EventListData.list.map((item, index) => (
        <LinkButtonwithPanel key={`${item.title}`}>
          <LinkButton
            key={`${item.title}`}
            title={selectedIndex === index ? 'Shows' : item.title}
            onClick={() => {
              if (selectedIndex === index) {
                setSelectedIndex(-1);
              } else setSelectedIndex(index);
            }}
          />
          {selectedIndex === index && <EventPanel panelList={item.panelList} />}
        </LinkButtonwithPanel>
      ))}
      <Logo src={logo} alt={'LinkTree Logo'} />
    </List>
  );
};

const EventPanel: React.FC<{
  panelList: Array<{
    date: string;
    venue: string;
    city: string;
    isSold: boolean;
    url: string;
  }>;
}> = (props) => {
  return (
    <>
      <PanelContainer>
        {props.panelList.map((panelItem, index) => {
          return (
            <PanelItem
              key={`${panelItem.date}-${panelItem.venue}-${index}`}
              href={panelItem.isSold ? '' : panelItem.url}
            >
              <EventDateLocation>
                {/* TODO: import moment.js package to format the date */}
                <Pragraph1>{panelItem.date}</Pragraph1>
                <Pragraph2>{`${panelItem.venue}, ${panelItem.city}`}</Pragraph2>
              </EventDateLocation>
              <EventSell>
                {panelItem.isSold ? (
                  <Pragraph2>{'Sold Out'}</Pragraph2>
                ) : (
                  <RightArrowImg src={rightArrow} alt={'right arrow'} />
                )}
              </EventSell>
            </PanelItem>
          );
        })}
      </PanelContainer>
      <SongKickPanel>
        <img
          src={bySongKick}
          width={'30%'}
          height={'auto'}
          alt={'song kick logo'}
        />
      </SongKickPanel>
    </>
  );
};

const PanelContainer = styled.div`
  width: 70%;
  height: 280px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  overflow: scroll;
  overflow-x: hidden;
`;

const LinkButtonwithPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PanelItem = styled.a`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  text-decoration: none;
  color: inherit;
  cursor: default;
`;

const SongKickPanel = styled.div`
  display: flex;
  width: 70%;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

const EventDateLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EventSell = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const RightArrowImg = styled.img`
  transform: rotate(270deg);
`;

export default EventList;
