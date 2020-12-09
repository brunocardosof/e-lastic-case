import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';

import {Header} from '../../components/Header/';

import styles from './Styles';
import {DefaultTheme} from '../../theme';
import AreaChartExample from '../../components/AreaChartExample';
import {ButtonExercises} from '../../components/ButtonExercises';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.viewUserInfoExercises}>
          <View style={styles.viewSeries}>
            <Icon
              color={`${DefaultTheme.primaryColor}`}
              size={32}
              name="flag"
              type="feather"
            />
            <Text style={styles.textTitle}>SERIES</Text>
            <Text style={styles.textSubTitle}>0/1</Text>
          </View>
          <View style={styles.viewRepetition}>
            <Icon
              color={`${DefaultTheme.primaryColor}`}
              size={32}
              name="refresh-cw"
              type="feather"
            />
            <Text style={styles.textTitle}>REPETIÇÕES</Text>
            <Text style={styles.textSubTitle}>0/1</Text>
          </View>
          <View style={styles.viewMaxWeight}>
            <Icon
              color={`${DefaultTheme.primaryColor}`}
              size={32}
              name="dumbbell"
              type="font-awesome-5"
            />
            <Text style={styles.textTitle}>PESO</Text>
            <Text style={styles.textSubTitle}>0.00 KG</Text>
          </View>
          <View style={styles.viewMaxStrenght}>
            <Image source={require('../../assets/musclesIcon.png')} />
            <Text style={styles.textTitle}>MÁXIMO</Text>
            <Text style={styles.textSubTitle}>0.00 KG</Text>
          </View>
        </View>
        <View style={styles.lineDivider}></View>
        <View style={styles.viewGraphIcons}>
          <View style={styles.viewSettingsIcon}>
            <Icon
              color={`${DefaultTheme.primaryColor}`}
              size={32}
              name="settings"
              type="feather"
            />
          </View>
          <View style={styles.viewChartIcon}>
            <Icon
              color={`${DefaultTheme.primaryColor}`}
              size={32}
              name="chart-area"
              type="font-awesome-5"
            />
          </View>
        </View>
        <View style={styles.viewChart}>
          <AreaChartExample />
        </View>
        <View style={styles.viewChartTimer}>
          <Icon
            style={styles.iconTimer}
            color={`${DefaultTheme.primaryColor}`}
            size={32}
            name="clock"
            type="feather"
          />
          <Text>00m 00s</Text>
        </View>
        <ButtonExercises />
        <View style={styles.viewBottomButtons}>
          <Button
            icon={
              <Icon
                style={styles.iconInsideBottomButtons}
                color={'white'}
                size={24}
                name="play"
                type="font-awesome-5"
              />
            }
            buttonStyle={styles.buttonIniciarBottom}
            titleStyle={styles.buttonBottomTitle}
            title="INICIAR"
            type="outline"
          />
          <Button
            icon={
              <Icon
                style={styles.iconInsideBottomButtons}
                color={'white'}
                size={24}
                name="chart-line"
                type="font-awesome-5"
              />
            }
            buttonStyle={styles.buttonRelatorioBottom}
            titleStyle={styles.buttonBottomTitle}
            title="RELATÓRIOS"
            type="outline"
          />
        </View>
      </View>
    </>
  );
};

export {Home};
