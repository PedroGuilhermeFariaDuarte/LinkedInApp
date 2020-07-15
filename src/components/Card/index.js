import React, { Profiler } from 'react';
import { AntDesign } from '@expo/vector-icons';

// Style
import {
  Container,
  Header,
  Content,
  ImageContent,
  DescriptionContainer,
  BarAction,
  Button,
  Text,
  Avatar,
  DetailsUser,
  InputText,
} from './styles';

function Card({ navigation, publication }) {
  function handlerjumpTo(username) {
    try {
      navigation.navigate('Profile', {
        params: {
          username,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: publication.personalData.image }} />
        <DetailsUser>
          <Text
            style={{ color: '#1e272e' }}
            onPress={() => handlerjumpTo(publication.personalData.name)}
          >
            {publication.personalData.fullName}
          </Text>
          <Text noBold style={{ color: '#485460' }}>
            {publication.personalData.profession}
          </Text>
        </DetailsUser>
        <Text noBold style={{ color: '#808e9b' }}>
          {publication.lastPublication.dateInDay}
        </Text>
      </Header>
      <Content>
        <ImageContent
          source={{ uri: publication.lastPublication.content.image }}
        />
        <DescriptionContainer>
          <Text noBold>{publication.lastPublication.description}</Text>
        </DescriptionContainer>
        <BarAction>
          <Button buttonBackground>
            <AntDesign name="like1" size={20} color="#458ee8" />
            <Text like>{publication.lastPublication.like}</Text>
          </Button>
          <Button>
            <AntDesign name="heart" size={20} color="red" />
            <Text>{publication.lastPublication.loving}</Text>
          </Button>
          <InputText />
        </BarAction>
      </Content>
    </Container>
  );
}

export default Card;
