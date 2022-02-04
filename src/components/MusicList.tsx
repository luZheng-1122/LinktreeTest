import React, { useState } from 'react';
import styled from 'styled-components';
import { List, Logo, Pragraph1, Pragraph2 } from '../styles/styledComponents';
import ProfileIcon from './ProfileIcon';
import LinkButton from './LinkButton';
import profilePNG from '../assets/profile-picture.png';
import logo from '../assets/logo.svg';
import rightArrow from '../assets/icons/arrow.svg';
import spotifyLogo from '../assets/icons/spotify.svg';
import appleLogo from '../assets/icons/apple-music.svg';
import soundcloud from '../assets/icons/soundcloud.svg';
import youtube from '../assets/icons/youtube.svg';

type Props = {};

const MusicListData = {
  profile: {
    name: 'Emma',
    icon: profilePNG,
  },
  musicList: [
    {
      title: 'Music Item 1',
      name: '123',
    },
    {
      title: 'Music Item 2',
      name: '123',
    },
  ],
  platforms: [
    {
      platform: 'Spotify',
      icon: spotifyLogo,
      url: 'https://www.spotify.com/',
    },
    {
      platform: 'Apple Music',
      icon: appleLogo,
      url: 'https://music.apple.com/',
    },
    {
      platform: 'Soundcloud',
      icon: soundcloud,
      url: 'https://soundcloud.com/',
    },
    {
      platform: 'Youtube Music',
      icon: youtube,
      url: 'https://music.youtube.com/',
    },
  ],
};

const MusicList: React.FC<Props> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <List>
      <ProfileIcon
        name={MusicListData.profile.name}
        icon={MusicListData.profile.icon}
      />
      {MusicListData.musicList.map((item, index) => (
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
          {selectedIndex === index && (
            <EventPanel music={item.name} panelList={MusicListData.platforms} />
          )}
        </LinkButtonwithPanel>
      ))}
      <Logo src={logo} alt={'LinkTree Logo'} />
    </List>
  );
};

const EventPanel: React.FC<{
  music: string;
  panelList: Array<{
    platform: string;
    icon: string;
    url: string;
  }>;
}> = (props) => {
  const [showMusic, setShowMusic] = useState(false);
  const [music, setMusic] = useState('');
  return (
    <>
      <PanelContainer>
        {/* TODO: removing controls, style the audio and control the audio using js */}
        {showMusic && (
          <>
            <audio data-testid={'musicPlayer'} controls>
              <source src={music} />
            </audio>
            <p>{music}</p>
          </>
        )}

        {props.panelList.map((panelItem) => {
          return (
            <PanelItem
              key={`${panelItem.platform}`}
              onClick={() => {
                //TODO: change to the correct music url.
                if (music === `${panelItem.url}${props.music}`) {
                  setShowMusic(!showMusic);
                } else {
                  setShowMusic(true);
                  setMusic(`${panelItem.url}${props.music}`);
                }
              }}
            >
              <MusicSection>
                <MusicIcon
                  src={panelItem.icon}
                  alt={`${panelItem.platform} icon`}
                  onClick={() => {
                    window.open(panelItem.url, '__blank');
                  }}
                />
                <Pragraph1>{panelItem.platform}</Pragraph1>
              </MusicSection>
              <EventSell>
                <RightArrowImg src={rightArrow} alt={'right arrow'} />
              </EventSell>
            </PanelItem>
          );
        })}
      </PanelContainer>
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

const PanelItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  text-decoration: none;
  color: inherit;
  padding: 10px 0;
`;

const MusicSection = styled.div`
  display: flex;
`;

const MusicIcon = styled.img`
  margin-right: 10px;
`;

const EventSell = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const RightArrowImg = styled.img`
  transform: rotate(270deg);
`;

export default MusicList;
