import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;    
`;

export const ContainerMenu = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;  
  margin-top: 50px;
  margin-right: 5px;

  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerCover = styled.View`
  width: 100%;
  height: 190px;
  position: relative;
  margin-bottom: 180px;

  flex-flow: column;
  align-items: flex-end;
`;

export const ImageProfile = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: #93a5e8;
  align-self: center;
`;

export const ImageCover = styled.Image`
  width: 100%;
  height: 190px;
  background-color: #93a5e8;
  position: absolute;
  z-index: 0;
`;

export const DetailsProfile = styled.View`
  width: 100%;
  height: 100px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const NameProfile = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #1e272e;
  align-self: center;
  margin-bottom: 5px;
`;

export const SkillsProfile = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #1e272e;
  margin-bottom: 10px;
`;

export const LocalizationProfile = styled.Text`
  font-size: 13px;
  font-weight: normal;
  color: #1e272e;
  align-self: center;
`;

export const ContainerTimeLine = styled.ScrollView`
  width: 100%;
  min-height: 120px;
  height: auto;  
  margin-top: 10px;
`;

export const Job = styled.View`
  width: 210px;
  height: 55px;
  border-radius: 15px;

  flex-flow: row;
  align-items: center;  
`;

export const JobImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: #93a5e8;
  margin-right: 10px;
  overflow:hidden;
`;

export const JobContainerDetails = styled.View`
  width: 75%;
  height: 100%;

  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
`;

export const NameJob = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #1e272e;
`;

export const Current = styled.Text`
  font-size: 10px;
  font-weight: normal;
  color: #1e272e;
`;

export const ContainerLine = styled.View`
  width: 210px;
  height: auto;
  margin-top: 10px;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #fff;
`;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background-color: #93a5e8;
  margin-left: 10px;
`;

export const TimelIne = styled.View`
  width: auto;
  height: auto;
  padding: 10px;
  margin-left: 5px;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

export const MyPost = styled.TouchableOpacity`
  width: 300px;
  height: 250px;
  border-radius: 15px;
  background-color: #93a5e8;
  margin-right: 20px;
  margin-top: 20px;
  overflow:hidden;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContainerAboutMe = styled.View`
  width: 100%;
  min-height: 200px;
  height: auto;
  padding: 0px 10px 10px 10px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const AboutMe = styled.Text`
  font-size: 17px;
  font-weight: normal;
  line-height:40px;
  color: #1e272e;
  text-align:justify;
`;
