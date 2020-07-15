import React from 'react';

// Components
import Background from '../../components/Background';

// Components
import Menu from '../../components/Menu';
import Card from '../../components/Card';

// Styled
import {
  Container,
  Content,
  ContainerStatus,
  Status,
  StatusImageContainer,
  StatusImage,
  StatusImageFalse,
  StatusName,
} from './styles';

// Data
import Publications from '../../data/publications';
import StatusData from '../../data/status';

function Home({ navigation }) {
  return (
    <Background>
      <Container>
        <ContainerStatus horizontal={true}>
          <Status>
            <StatusImageContainer>
              <StatusImageFalse />
            </StatusImageContainer>
            <StatusName>
              Adicionar
            </StatusName>
          </Status>
          {StatusData.map((story, index) => (
            <Status key={index}>
              <StatusImageContainer>
                <StatusImage source={{ uri: story.content }} />
              </StatusImageContainer>
              <StatusName>{story.name.split(' ')[0]}</StatusName>
            </Status>
          ))}
        </ContainerStatus>
        <Content>
          {Publications.map((pubication, index) => (
            <Card
              key={index}
              publication={pubication}
              navigation={navigation}
            />
          ))}
        </Content>
      </Container>
    </Background>
  );
}

export default Home;
