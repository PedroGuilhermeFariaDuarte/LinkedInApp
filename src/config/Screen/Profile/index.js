import React from 'react';
import { Feather } from '@expo/vector-icons';

export default (focused) => (
  <Feather name="briefcase" size={24} color={focused ? '#f5f5f5' : '#93A5E8'} />
);
