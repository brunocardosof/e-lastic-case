import React from 'react';

import {Routes} from './routes';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Routes />
    </>
  );
};
export {App};
