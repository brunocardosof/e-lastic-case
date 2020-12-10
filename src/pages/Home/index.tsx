import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';

import {Header} from '../../components/Header/';

import styles from './Styles';
import {DefaultTheme} from '../../theme';
import AreaChartExample from '../../components/Home/AreaChartExample';
import {ButtonExercises} from '../../components/Home/ButtonExercises';
import {useExercise} from '../../contexts/exercise';
import {RepeatIconAnimated} from '../../components/Home/RepeatIconAnimated';

const Home: React.FC = () => {
  const {started, handleStartExercise} = useExercise();
  const [
    modalButtonStartCountVisibility,
    setModalButtonStartCountVisibility,
  ] = useState(false);
  let [seconds, setSeconds] = useState(3);
  let [isPaused, setIsPaused] = useState(false);
  let timer = useRef(null);

  //Stopwatch
  let timerInterval = useRef(null);
  let secondsStopwatch = useRef(0);
  let minutesStopwatch = useRef(0);
  let [fullTime, setFullTime] = useState('00:00');

  const startStopwtach = () => {
    timerInterval.current = window.setInterval(() => {
      timerStopwtach();
    }, 1000);
  };

  const timerStopwtach = () => {
    secondsStopwatch.current++;
    if (secondsStopwatch.current == 60) {
      secondsStopwatch.current = 0;
      minutesStopwatch.current++;
      if (minutesStopwatch.current == 60) {
        minutesStopwatch.current = 0;
      }
    }
    let format = `${
      minutesStopwatch.current < 10
        ? '0' + minutesStopwatch.current
        : minutesStopwatch.current
    }:${
      secondsStopwatch.current < 10
        ? '0' + secondsStopwatch.current
        : secondsStopwatch.current
    }`;
    setFullTime(format);
  };

  const timerHandle = () => {
    timer.current = window.setInterval(() => {
      setSeconds((prevTime) => prevTime - 1);
    }, 1500);
  };
  useEffect(() => {
    if (seconds === 0) {
      setModalButtonStartCountVisibility(false);
      handleStartExercise();
      startStopwtach();
      setTimeout(() => {
        window.clearInterval(timer.current);
        setSeconds(3);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);
  const startExerciseHandle = () => {
    setModalButtonStartCountVisibility(true);
    timerHandle();
  };
  const renderBottomButtons = (): JSX.Element => {
    return !started ? (
      <>
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
          title={'INICIAR'}
          type="outline"
          onPress={() => {
            startExerciseHandle();
          }}
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
      </>
    ) : (
      <>
        {!isPaused ? (
          <Button
            icon={
              <Icon
                style={styles.iconInsideBottomButtons}
                color={'white'}
                size={24}
                name="pause"
                type="font-awesome-5"
              />
            }
            buttonStyle={styles.buttonIniciarBottom}
            titleStyle={styles.buttonBottomTitle}
            title={'PAUSAR'}
            type="outline"
            onPress={() => {
              setIsPaused(true);
              window.clearInterval(timerInterval.current);
            }}
          />
        ) : (
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
            title={'CONTINUAR'}
            type="outline"
            onPress={() => {
              setIsPaused(false);
              startStopwtach();
            }}
          />
        )}
        <Button
          icon={
            <Icon
              style={styles.iconInsideBottomButtons}
              color={'white'}
              size={24}
              name="stop"
              type="font-awesome-5"
            />
          }
          buttonStyle={styles.buttonRelatorioBottom}
          titleStyle={styles.buttonBottomTitle}
          title="PARAR"
          type="outline"
          onPress={() => {
            setIsPaused(false);
            handleStartExercise();
            window.clearInterval(timerInterval.current);
            setFullTime('00:00');
          }}
        />
      </>
    );
  };
  const renderModalButtonStartCount = (): JSX.Element => {
    const renderFinalMessage = () => {
      return (
        <View style={styles.viewFinalMessage}>
          <Icon
            color={`${DefaultTheme.primaryColor}`}
            size={38}
            name="flag"
            type="feather"
          />
          <Text style={styles.textFinalMessage}>Vai!</Text>
        </View>
      );
    };
    return (
      <Modal
        animationIn="bounceInLeft"
        animationOut="bounceOutRight"
        animationInTiming={10}
        animationOutTiming={10}
        isVisible={modalButtonStartCountVisibility}
        onBackdropPress={() => setModalButtonStartCountVisibility(false)}
        onBackButtonPress={() => setModalButtonStartCountVisibility(false)}>
        <View style={styles.containerModal}>
          <View style={styles.modalView}>
            <Text style={styles.textTimer}>
              {seconds >= 1 ? seconds : renderFinalMessage()}
            </Text>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <>
      <Header />
      <View style={styles.container}>
        {renderModalButtonStartCount()}
        <View style={styles.viewUserInfoExercises}>
          <View style={styles.viewSeries}>
            <Icon
              color={!started ? `${DefaultTheme.primaryColor}` : '#00ff00'}
              size={32}
              name="font-awesome-flag"
              type="font-awesome-5"
            />
            <Text style={styles.textTitle}>SERIES</Text>
            <Text style={styles.textSubTitle}>0/1</Text>
          </View>
          <View style={styles.viewRepetition}>
            {!isPaused && started ? (
              <RepeatIconAnimated />
            ) : (
              <Icon
                color={`${DefaultTheme.primaryColor}`}
                size={32}
                name="refresh-cw"
                type="feather"
              />
            )}
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
        <View style={styles.lineDivider} />
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
        <View style={styles.viewStopwatch}>
          <Icon
            style={styles.iconTimer}
            color={`${DefaultTheme.primaryColor}`}
            size={32}
            name="clock"
            type="feather"
          />
          <Text>{fullTime}</Text>
        </View>
        <ButtonExercises />
        <View style={styles.viewBottomButtons}>{renderBottomButtons()}</View>
      </View>
    </>
  );
};

export {Home};
