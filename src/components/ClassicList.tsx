import React from 'react';
import { List, Logo } from '../styles/styledComponents';
import ProfileIcon from './ProfileIcon';
import LinkButton from './LinkButton';
import profilePNG from '../assets/profile-picture.png';
import logo from '../assets/logo.svg';
type Props = {};
const ClassicListData = {
  profile: {
    name: 'Emma',
    icon: profilePNG,
  },
  list: [
    {
      title: 'item 1',
      url: 'https://linktr.ee/guardian',
    },
    {
      title: 'item 2',
      url: 'https://linktr.ee/guardian',
    },
    {
      title: 'item 3',
      url: 'https://linktr.ee/guardian',
    },
    {
      title: 'item 4',
      url: 'https://linktr.ee/guardian',
    },
  ],
};
const ClassicList: React.FC<Props> = () => {
  function openClassicLink(url: string) {
    window.open(url, '_blank');
  }

  return (
    <List>
      <ProfileIcon
        name={ClassicListData.profile.name}
        icon={ClassicListData.profile.icon}
      />
      {ClassicListData.list.map((item) => (
        <LinkButton
          key={`${item.title}-${item.url}`}
          title={item.title}
          onClick={() => {
            openClassicLink(item.url);
          }}
        />
      ))}
      <Logo src={logo} alt={'LinkTree Logo'} />
    </List>
  );
};

export default ClassicList;
