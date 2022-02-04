import profilePNG from '../assets/profile-picture.png';
import spotifyLogo from '../assets/icons/spotify.svg';
import appleLogo from '../assets/icons/apple-music.svg';
import soundcloud from '../assets/icons/soundcloud.svg';
import youtube from '../assets/icons/youtube.svg';
import COLOR from '../styles/color';

type ThemeType = {
  primary: string;
  background: string;
  text: string;
};

export const defaultTheme: ThemeType = {
  primary: COLOR.GREEN,
  background: COLOR.GREY_LIGHT,
  text: COLOR.BLACK,
};

export const EventListData = {
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

export const MusicListData = {
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
