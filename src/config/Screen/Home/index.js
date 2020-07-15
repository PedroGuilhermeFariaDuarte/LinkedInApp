import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default (focused) => (
  <AntDesign name="home" size={24} color={focused ? '#f5f5f5' : '#93A5E8'} />
);
