import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Styles
import { Icon, ProfileAvatar } from './styles';

export const IconMore = () => (
  <Icon>
    <MaterialIcons name="add" size={34} color="black" />
  </Icon>
);

export const IconSearch = (focused) => (
  <Feather name="search" size={24} color={focused ? '#f5f5f5' : '#93A5E8'} />
);

export const Avatar = (focused) => <AntDesign name="user" size={24} color={focused ? '#f5f5f5' : '#93A5E8'} />;
