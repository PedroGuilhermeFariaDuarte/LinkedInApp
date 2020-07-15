import React from 'react';
import { Entypo } from '@expo/vector-icons';

// Components
import TypeHambuger from '../../components/Hambuguer';
import TypeDot from '../../components/Dot';

// Style
import { Container } from './styles';

function Menu({ showLogo = true }) {
  return (
    <Container>
      {showLogo && <Entypo name="linkedin" size={25} color="#3C5DB6" />}
      <TypeDot />
    </Container>
  );
}

export default Menu;
