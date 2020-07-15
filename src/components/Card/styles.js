import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 470px;
  margin-bottom: 60px;
`;

export const Header = styled.View`
  width: 100%;
  height: 55px;
  margin-bottom: 15px;
  padding-left: 10px;
  flex-flow: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
`;

export const DetailsUser = styled.View`
  width: 70%;
  height: 100%;
  margin-left: 10px;
  flex-flow: column;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  flex-flow: column;
`;

export const ImageContent = styled.Image`
  width: 100%;
  height: 290px;
  border-radius: 30px;
  background-color: #93a5e8;
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  height: 60px;
  padding-left: 5px;
  flex-flow: row;
  align-items: center;
`;

export const BarAction = styled.View`
  width: 100%;
  height: 55px;

  padding-left: 10px;
  padding-right: 10px;
  align-self: flex-end;
  flex-flow: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 70px;
  height: 30px;
  border-radius: 30px;
  border: 2px solid #93a5e8;
  margin-right: 20px;

  flex-flow: row;
  justify-content: center;
  align-items: center;
  ${(prop) =>
    prop.buttonBackground &&
    css`
      border: none;
      background-color: #93a5e8;
    `}
`;

export const Text = styled.Text`
         font-size: 13px;
         ${(prop) =>
           !prop.noBold &&
           css`
             font-weight: bold;
           `}
         
         color: ${(prop) => (prop.like ? '#fff' : '#000')};
         margin-left: 5px;
       `;

export const InputText = styled.TextInput.attrs({
  multiLine: true,
  placeholder: 'digite um comentário...',
})`
  width: 195px;
  min-height: 30px;
  height: auto;
  border-radius: 15px;
  padding-left: 10px;
  border: 2px solid #ccc;
`;
