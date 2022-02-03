import React, { useState } from 'react';
import { Pragraph1 } from '../styles/styledComponents';
import styled from 'styled-components';

type Props = {
  name: string;
  icon: string;
};
const ProfileIcon: React.FC<Props> = (props) => {
  return (
    <ProfileContainer>
      <ProfileImg
        src={props.icon}
        width={'90%'}
        height={'auto'}
        alt={'user profile icon'}
      />
      <Pragraph1>{`@${props.name}`}</Pragraph1>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 87px;
`;
const ProfileImg = styled.img`
  margin: auto;
`;
export default ProfileIcon;
