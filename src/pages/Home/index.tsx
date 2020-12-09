import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

import {Header} from '../../components/Header/';

import styles from './Styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.viewUserInfoExercises}>
          <View style={styles.viewSeries}>
            <Icon name="flag" type="feather" />
            <Text style={styles.textTitle}>SERIES</Text>
            <Text style={styles.textSubTitle}>0/1</Text>
          </View>
          <View style={styles.viewRepetition}>
            <Icon name="refresh-cw" type="feather" />
            <Text style={styles.textTitle}>REPETIÇÕES</Text>
            <Text style={styles.textSubTitle}>0/1</Text>
          </View>
          <View style={styles.viewMaxWeight}>
            <Icon name="tool" type="feather" />
            <Text style={styles.textTitle}>PESO</Text>
            <Text style={styles.textSubTitle}>0.00 KG</Text>
          </View>
          <View style={styles.viewMaxStrenght}>
            <Icon name="gitlab" type="feather" />
            <Text style={styles.textTitle}>MÁXIMO</Text>
            <Text style={styles.textSubTitle}>0.00 KG</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export {Home};
