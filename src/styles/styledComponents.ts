import styled from 'styled-components';
// TODO: load font family from Google Font API

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Pragraph1 = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.black};
  margin: 0px;
  text-align: center;
`;

export const Pragraph2 = styled.p`
  font-size: 12px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.black};
  margin: 0px;
  text-align: center;
`;

export const Logo = styled.img`
  margin-top: 20px;
`;
