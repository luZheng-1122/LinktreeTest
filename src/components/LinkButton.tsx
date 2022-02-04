import React from 'react';
import { Pragraph1 } from '../styles/styledComponents';
import styled from 'styled-components';

type Props = {
  title: string;
  onClick: () => void;
};

const LinkButton: React.FC<Props> = (props) => {
  return (
    <LinkButtonStyle onClick={props.onClick}>
      <Pragraph1>{props.title}</Pragraph1>
    </LinkButtonStyle>
  );
};

const LinkButtonStyle = styled.button`
  width: 70%;
  height: 48px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;

  transition-duration: 0.4s;
  :hover {
    opacity: 0.5;
  }
`;
export default LinkButton;
