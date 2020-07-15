import styled from 'styled-components/native';

export default styled.ScrollView`
  width: 100%;
  height: ${(prop) => (prop.scrollHeight ? prop.scrollHeight : '100%')};
  padding-bottom:40px;
`;
