import styled from 'styled-components/native';

export const Hamburger = styled.TouchableOpacity`
  width: 25px;
  height: 100%;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Bar = styled.View`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #1e272e;
  margin-top: 5px;
`;
