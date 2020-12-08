import React from 'react';

import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './theme/defaultTheme';
import {Routes} from './routes';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </>
  );
};
export {App};
