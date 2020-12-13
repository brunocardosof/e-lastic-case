/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';

import {Header} from '../../components/Header/';

import styles from './Styles';
import {DefaultTheme} from '../../theme';
import {ChartExersiceAnimated} from '../../components/Home/ChartExersiceAnimated';
import {ButtonExercises} from '../../components/Home/ButtonExercises';
import {useExercise} from '../../contexts/exercise';
import {RepeatIconAnimated} from '../../components/Home/RepeatIconAnimated';
import {Exercise} from '../../interface/Exercise';

const Home: React.FC = () => {
  const {
    initialCountAnimationFinish,
    handleInitialCountAnimationFinish,
    exerciseIsPaused,
    handleExercisePaused,
    currentExercise,
    handleUpdateExercise,
    handleYAxisDataChart,
    handleDataChart,
    dataChart,
  } = useExercise();
  //Initial animation
  const [
    modalInitialCountAnimationVisiblity,
    setModalInitialCountAnimationVisiblity,
  ] = useState(false);
  let [seconds, setSeconds] = useState(3);
  let timerInitialCountAnimation = useRef(null);
  //Stopwatch
  let timerInterval = useRef(null);
  let secondsStopwatch = useRef(0);
  let minutesStopwatch = useRef(0);
  let [stopwatch, setStopwatch] = useState('00:00');
  const startStopwatch = () => {
    timerInterval.current = setInterval(() => {
      timerStopwatch();
    }, 1000);
  };
  const [repeatIconAnimated, setRepeatIconAnimated] = useState(false);

  const timerStopwatch = () => {
    secondsStopwatch.current++;
    if (secondsStopwatch.current === 60) {
      secondsStopwatch.current = 0;
      minutesStopwatch.current++;
      if (minutesStopwatch.current === 60) {
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
    setStopwatch(format);
  };

  const handleTimerInitialCountAnimation = () => {
    timerInitialCountAnimation.current = setInterval(() => {
      setSeconds((prevTime) => prevTime - 1);
    }, 1500);
  };
  useEffect(() => {
    if (currentExercise.dataChart.length === 1) {
      handleDataChart([0]);
      handleYAxisDataChart([0, 20, 30, 40]);
    } else {
      handleDataChart(currentExercise.dataChart);
    }
  }, [currentExercise]);
  useEffect(() => {
    if (secondsStopwatch.current === 3) {
      const exercise: Exercise = {} as Exercise;
      exercise.id = currentExercise.id;
      exercise.name = currentExercise.name;
      exercise.repetitionsExecuted = 1;
      exercise.repetitions = currentExercise.repetitions;
      exercise.seriesExecuted = 1;
      exercise.series = currentExercise.series;
      exercise.alreadyExecuted = true;
      // exercise.timeExecuted = format;
      exercise.dataChart = [...dataChart];
      console.log(exercise);
      handleUpdateExercise(exercise);
    }
    if (secondsStopwatch.current === 5) {
      setRepeatIconAnimated(false);
      handleExerciseFinish();
      clearInterval(timerInterval.current);
      Alert.alert('Modal plot');
    }
  }, [stopwatch]);
  useEffect(() => {
    if (seconds === 0) {
      setRepeatIconAnimated(true);
      setModalInitialCountAnimationVisiblity(false);
      handleInitialCountAnimationFinish();
      startStopwatch();
      setTimeout(() => {
        clearInterval(timerInitialCountAnimation.current);
        setSeconds(3);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);
  const handleStartExercise = () => {
    setModalInitialCountAnimationVisiblity(true);
    handleTimerInitialCountAnimation();
  };
  const handleContinueExercise = () => {
    setRepeatIconAnimated(true);
    handleExercisePaused(false);
    startStopwatch();
  };
  const handlePauseExercise = () => {
    setRepeatIconAnimated(false);
    handleExercisePaused(true);
    clearInterval(timerInterval.current);
  };
  const handleStopExercise = () => {
    setRepeatIconAnimated(false);
    handleExercisePaused(false);
    //clear initial count animation
    handleInitialCountAnimationFinish();
    clearInterval(timerInterval.current);
    //clear stopwatch
    setStopwatch('00:00');
    secondsStopwatch.current = 0;
    minutesStopwatch.current = 0;
    //clear chart data
    handleDataChart([0]);
    handleYAxisDataChart([0, 20, 30, 40]);
  };
  const handleExerciseFinish = () => {
    setRepeatIconAnimated(false);
    handleExercisePaused(false);
    //clear initial count animation
    handleInitialCountAnimationFinish();
    clearInterval(timerInterval.current);
    //clear stopwatch
    setStopwatch('00:00');
    secondsStopwatch.current = 0;
    minutesStopwatch.current = 0;
  };
  const renderBottomButtons = (): JSX.Element => {
    return !initialCountAnimationFinish ? (
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
            handleStartExercise();
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
        {!exerciseIsPaused ? (
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
              handlePauseExercise();
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
              handleContinueExercise();
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
            handleStopExercise();
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
        isVisible={modalInitialCountAnimationVisiblity}
        onBackdropPress={() => setModalInitialCountAnimationVisiblity(false)}
        onBackButtonPress={() => setModalInitialCountAnimationVisiblity(false)}>
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
              color={
                !currentExercise.alreadyExecuted
                  ? `${DefaultTheme.primaryColor}`
                  : '#00ff00'
              }
              size={32}
              name="font-awesome-flag"
              type="font-awesome-5"
            />
            <Text style={styles.textTitle}>SERIES</Text>
            <Text style={styles.textSubTitle}>
              {currentExercise.seriesExecuted}/{currentExercise.series}
            </Text>
          </View>
          <View style={styles.viewRepetition}>
            {repeatIconAnimated ? (
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
            <Text style={styles.textSubTitle}>
              {currentExercise.repetitionsExecuted}/
              {currentExercise.repetitions}
            </Text>
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
          <ChartExersiceAnimated />
        </View>
        {/* <View style={styles.viewStopwatch}>
          <Icon
            style={styles.iconTimer}
            color={`${DefaultTheme.primaryColor}`}
            size={32}
            name="clock"
            type="feather"
          />
          <Text>{currentExercise.timeExecuted}</Text>
        </View> */}
        <ButtonExercises />
        <View style={styles.viewBottomButtons}>{renderBottomButtons()}</View>
      </View>
    </>
  );
};

export {Home};
