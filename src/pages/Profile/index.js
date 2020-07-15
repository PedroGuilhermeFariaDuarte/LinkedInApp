import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

// Components
import Background from '../../components/Background';
import TypeDot from '../../components/Dot';
import ContainerScroll from '../../components/ContainerScroll';

// Styled
import {
  Container,
  ContainerMenu,
  ContainerCover,
  ImageProfile,
  ImageCover,
  DetailsProfile,
  NameProfile,
  SkillsProfile,
  LocalizationProfile,
  ContainerTimeLine,
  TimelIne,
  Job,
  JobImage,
  JobContainerDetails,
  NameJob,
  Current,
  ContainerLine,
  Line,
  MyPost,
  PostImage,
  ContainerAboutMe,
  AboutMe,
} from './styles';

// Data
import PersonalData from '../../data/publications';

function Profile({ route }) {
  const [myUser, setMyUser] = useState({});
  const [otherUser, setOtherUser] = useState('');

  useEffect(() => {
    try {
      if (route.params) {
        const { username } = route.params.params;

        setMyUser((Old) =>
          PersonalData.find((user, index) =>
            user.personalData.name === username
          )
        );

        setOtherUser((Olds) => username);
        console.log(myUser.publications);
      }
    } catch (error) {
      console.log(error.message);
    }

  }, [myUser, route]);

  return (
    <Background>
      <Container>
        <ContainerScroll>
          <ContainerCover>
            <ImageCover source={{ uri: myUser?.personalData?.coverImage }} />
            <ContainerMenu>
              <TypeDot />
            </ContainerMenu>
            <ImageProfile source={{ uri: myUser?.personalData?.image }} />
            <DetailsProfile>
              <NameProfile>{myUser?.personalData?.fullName}</NameProfile>
              <SkillsProfile>{myUser?.personalData?.profession}</SkillsProfile>
              <LocalizationProfile>
                {myUser?.personalData?.localization?.city +
                  ' - ' +
                  myUser?.personalData?.localization?.country}
              </LocalizationProfile>
            </DetailsProfile>
          </ContainerCover>
          <SkillsProfile
            style={{
              fontSize: 20,
              marginLeft: 15,
              marginTop: 30,
              marginBottom: 5,
            }}
          >
            My Timeline
          </SkillsProfile>
          <ContainerTimeLine horizontal={true}>
            {myUser.personalData?.jobs &&
              myUser.personalData?.jobs.map((job, index) => (
                <TimelIne key={index}>
                  <Job key={index}>
                    <JobImage source={{ uri: job.logo }} />
                    <JobContainerDetails>
                      <NameJob>{job.name}</NameJob>
                      <Current>{job.position}</Current>
                    </JobContainerDetails>
                  </Job>
                  {
                    <ContainerLine>
                      {!job.current ? (
                        <Text style={{ color: '#1e272e' }}>{job.year}</Text>
                      ) : (
                          <Text style={{ color: '#1e272e' }}>Now</Text>
                        )}
                      <Line />
                    </ContainerLine>
                  }
                </TimelIne>
              ))}
          </ContainerTimeLine>
          <SkillsProfile
            style={{
              fontSize: 20,
              marginLeft: 15,
              marginTop: 30,
              marginBottom: 5,
            }}
          >
            About me
          </SkillsProfile>
          <ContainerScroll horizontal={true}>
            {myUser?.personalData?.aboutMe_images.map((images, index) => {
              return (
                <MyPost key={index}>
                  <PostImage source={{ uri: images.url }} />
                </MyPost>
              );
            })}
          </ContainerScroll>
          <ContainerAboutMe>
            <AboutMe style={{ fontWeight: '700' }}>
              Hi, my name is Beatriz .
            </AboutMe>
            <AboutMe>
              I’m passionate about providing quality Programmer FullStack service in São Paulo. I always go above and beyond to ensure I get the job done right the first time. My work stands out because I pay close attention to all details of the job.
              I’ve been doing Programmer FullStack work for two years, and I love it because it gives me the chance to take lots of adorable dogs for walks.
              </AboutMe>
          </ContainerAboutMe>
          <SkillsProfile
            style={{
              fontSize: 20,
              marginLeft: 15,
              marginTop: 30,
              marginBottom: 5,
            }}
          >
            Last Publications
          </SkillsProfile>
          <ContainerScroll horizontal={true}>
            {myUser?.publications && myUser?.publications.map((publication, index) => {
              return (
                <MyPost key={index}>
                  <PostImage source={{ uri: publication.content.image }} />
                </MyPost>
              );
            })}
          </ContainerScroll>
        </ContainerScroll>
      </Container>
    </Background>
  );
}

export default Profile;
