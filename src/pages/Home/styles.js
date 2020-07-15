import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex-flow: column;
`;

export const PrimaryTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #1e272e;
`;

export const ContainerStatus = styled.ScrollView`
  width: 100%;
  height: 160px;
  padding: 15px 15px 15px 10px;  
  margin-top: 35px;
  background:#f2f2f2;
  border-bottom-right-radius:30px; 
  border-bottom-left-radius:30px; 
`;

export const Status = styled.View`
  width: 100px;
  height: auto;  
  margin-right: 15px;    
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const StatusImageContainer = styled.TouchableOpacity`
  width: 65px;
  height: 65px;
  border-radius: 40px;
  border: 2px solid #93a5e8;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

export const StatusImageFalse = styled.View`
  width: 55px;
  height: 55px;
  border-radius: 35px;
  background-color: #93a5e8;
`;

export const StatusImage = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 35px;
  background-color: #93a5e8;
`;

export const StatusName = styled.Text.attrs({
  maxLength: 1,
})`
  font-size: 12px;
  font-weight: bold;
  margin-top: 2px;
`;

export const Content = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 15px 10px 0px 10px;
`;
