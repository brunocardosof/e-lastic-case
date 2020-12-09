import React from 'react';
import {Image, View} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from './Styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerViewLeft}>
        <View style={styles.viewIcon}>
          <Icon name="menu" type="feather" color="white" size={30} />
        </View>
        <View style={styles.viewImage}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/logo.png')}
          />
        </View>
      </View>
      <View style={styles.headerViewRight}>
        <Icon name="arrow-left" type="feather" color="white" size={30} />
      </View>
    </View>
  );
};

export {Header};
