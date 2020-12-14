/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, View, TouchableOpacity, Switch} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {Player} from '@react-native-community/audio-toolkit';

import {Header} from '../../components/Header/';

import styles from './Styles';
import {DefaultTheme} from '../../theme';
import {ChartExersiceAnimated} from '../../components/Home/ChartExersiceAnimated';
import {ChartExersiceResult} from '../../components/Home/ChartExersiceResult';
import {ButtonExercises} from '../../components/Home/ButtonExercises';
import {useExercise} from '../../contexts/exercise';
import {RepeatIconAnimated} from '../../components/Home/RepeatIconAnimated';
import {Exercise} from '../../interface/Exercise';

const Home: React.FC = () => {
  const toggleSwitchSound = () => handleSoundInitialCountAnimation();
  const toggleSwitchCountAnimation = () => handleInitialCountAnimationConfig();
  const {
    soundInitialCountAnimation,
    handleSoundInitialCountAnimation,
    initialCountAnimationConfig,
    handleInitialCountAnimationConfig,
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
  //Modal Exercise Result
  const [
    modalExerciseResultVisiblity,
    setModalExerciseResultVisiblity,
  ] = useState(false);
  let [secondsModalExerciseResul, setSecondsModalExerciseResul] = useState(60);
  let timerModalExerciseResul = useRef(null);
  //Initial animation
  const [
    modalInitialCountAnimationVisiblity,
    setModalInitialCountAnimationVisiblity,
  ] = useState(false);
  let [
    secondsInitialCountAnimation,
    setSecondsInitialCountAnimation,
  ] = useState(3);
  let timerInitialCountAnimation = useRef(null);
  //Modal Config
  const [modalConfigVisibility, setModalConfigVisibility] = useState(false);
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
    soundInitialCountAnimation && new Player('beepapp.mp3').play();
    timerInitialCountAnimation.current = setInterval(() => {
      soundInitialCountAnimation && new Player('beepapp.mp3').play();
      setSecondsInitialCountAnimation((prevTime) => prevTime - 1);
    }, 1500);
  };
  const handleTimerModalExerciseResul = () => {
    timerModalExerciseResul.current = setInterval(() => {
      setSecondsModalExerciseResul((prevTime) => prevTime - 1);
    }, 1000);
  };
  useEffect(() => {
    if (secondsModalExerciseResul === 0) {
      clearInterval(timerModalExerciseResul.current);
    }
  }, [secondsModalExerciseResul]);
  useEffect(() => {
    if (currentExercise.dataChart.length === 1) {
      handleDataChart([0]);
      handleYAxisDataChart([0, 20, 30, 40]);
    } else {
      handleDataChart(currentExercise.dataChart);
    }
  }, [currentExercise]);
  useEffect(() => {
    if (secondsStopwatch.current === 4) {
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
      handleUpdateExercise(exercise);
    }
    if (secondsStopwatch.current === 7) {
      setRepeatIconAnimated(false);
      handleExerciseFinish();
      clearInterval(timerInterval.current);
      setModalExerciseResultVisiblity(() => {
        handleTimerModalExerciseResul();
        return true;
      });
    }
  }, [stopwatch]);
  useEffect(() => {
    if (secondsInitialCountAnimation === 0) {
      setRepeatIconAnimated(true);
      setModalInitialCountAnimationVisiblity(false);
      handleInitialCountAnimationFinish();
      startStopwatch();
      setTimeout(() => {
        clearInterval(timerInitialCountAnimation.current);
        setSecondsInitialCountAnimation(3);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsInitialCountAnimation]);
  const handleStartExercise = () => {
    if (initialCountAnimationConfig) {
      setModalInitialCountAnimationVisiblity(true);
      handleTimerInitialCountAnimation();
    } else {
      setSecondsInitialCountAnimation(0);
    }
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
  const handleCloseModalExerciseResult = () => {
    setModalExerciseResultVisiblity(false);
    //clear chart data
    const exercise: Exercise = {} as Exercise;
    exercise.id = currentExercise.id;
    exercise.name = currentExercise.name;
    exercise.repetitionsExecuted = 0;
    exercise.repetitions = currentExercise.repetitions;
    exercise.seriesExecuted = 0;
    exercise.series = currentExercise.series;
    exercise.alreadyExecuted = false;
    exercise.dataChart = [0];
    handleUpdateExercise(exercise);
    handleYAxisDataChart([0, 20, 30, 40]);
    clearInterval(timerModalExerciseResul.current);
    setTimeout(() => {
      setSecondsModalExerciseResul(60);
    }, 1000);
  };
  //JSX.Element render methods:
  //Bottom buttons and modals(ModalButtonStartCount,ModalExerciseResult
  //and ModalConfig)
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
  const renderModalExerciseResult = (): JSX.Element => {
    return (
      <Modal
        animationIn="bounceInLeft"
        animationOut="bounceOutRight"
        animationInTiming={10}
        animationOutTiming={10}
        isVisible={modalExerciseResultVisiblity}
        onBackdropPress={() => setModalExerciseResultVisiblity(false)}
        onBackButtonPress={() => setModalExerciseResultVisiblity(false)}>
        <View style={styles.containerModalExerciseResult}>
          <View style={styles.modalViewExerciseResult}>
            <Text style={styles.modalExerciseResultTitle}>
              Série concluída com sucesso!
            </Text>
            <View style={styles.chartContainer}>
              <ChartExersiceResult />
            </View>
            <View style={styles.viewTextStrenghtStopwatch}>
              <View style={styles.viewTextStrenght}>
                <Text style={styles.textStrenght}>Força Máxima: 40.00 KG</Text>
                <Text style={styles.textStrenght}>Força Média: 40.00 KG</Text>
              </View>
              <View style={styles.viewStopwatchModalExerciseResult}>
                <Text style={styles.textStopwatchModalExerciseResult}>
                  {secondsModalExerciseResul}
                </Text>
                <Icon
                  color={`${DefaultTheme.tertiaryColor}`}
                  size={32}
                  name="clock"
                  type="feather"
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                handleCloseModalExerciseResult();
              }}
              style={styles.trashIcon}>
              <Icon
                style={styles.viewExerciseResultIcon}
                color={`${DefaultTheme.secundaryColor}`}
                size={32}
                name="trash-2"
                type="feather"
              />
              <Text style={styles.textLegendIcon}>Descartar</Text>
            </TouchableOpacity>
            <View style={styles.viewContinueButton}>
              <Button
                icon={
                  <Icon
                    style={styles.viewExerciseResultIcon}
                    color={'white'}
                    size={24}
                    name="chevron-down"
                    type="font-awesome-5"
                  />
                }
                buttonStyle={styles.buttonIniciarBottom}
                titleStyle={styles.buttonBottomTitle}
                title={'CONTINUAR'}
                type="outline"
                onPress={() => {
                  handleCloseModalExerciseResult();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
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
              {secondsInitialCountAnimation >= 1
                ? secondsInitialCountAnimation
                : renderFinalMessage()}
            </Text>
          </View>
        </View>
      </Modal>
    );
  };
  const renderModalConfig = (): JSX.Element => {
    return (
      <Modal
        animationIn="bounceInLeft"
        animationOut="bounceOutRight"
        animationInTiming={10}
        animationOutTiming={10}
        isVisible={modalConfigVisibility}
        onBackdropPress={() => setModalConfigVisibility(false)}
        onBackButtonPress={() => setModalConfigVisibility(false)}>
        <View style={styles.containerModalConfig}>
          <View style={styles.modalViewConfig}>
            <View style={styles.viewTitleModalConfig}>
              <Text style={styles.modalTitleConfig}>Configurações</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalConfigVisibility(false);
                }}>
                <Icon
                  color={`${DefaultTheme.primaryColor}`}
                  size={30}
                  name="times"
                  type="font-awesome-5"
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Icon
                  color={`${DefaultTheme.tertiaryColor}`}
                  size={30}
                  name="bullhorn"
                  type="font-awesome-5"
                />
                <Text>Alerta Sonoro</Text>
                <Switch
                  trackColor={{
                    false: '#767577',
                    true: `${DefaultTheme.tertiaryColor}`,
                  }}
                  thumbColor={'white'}
                  onValueChange={toggleSwitchSound}
                  value={soundInitialCountAnimation}
                />
              </View>
              <View>
                <Text>
                  Um alerta sonoro é emitido ao efetuar uma repetição com o
                  E-lastic
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Icon
                  color={`${DefaultTheme.tertiaryColor}`}
                  size={30}
                  name="watch"
                  type="feather"
                />
                <Text>Contagem Regressiva</Text>
                <Switch
                  trackColor={{
                    false: '#767577',
                    true: `${DefaultTheme.tertiaryColor}`,
                  }}
                  thumbColor={'white'}
                  onValueChange={toggleSwitchCountAnimation}
                  value={initialCountAnimationConfig}
                />
              </View>
              <View>
                <Text>
                  Prepara o usuário para efetuar o exercício com uma contagem
                  regressiva de 3,2,1
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Icon
                  color={`${DefaultTheme.tertiaryColor}`}
                  size={30}
                  name="mobile-alt"
                  type="font-awesome-5"
                />
                <Text>Dispositivos Conectados</Text>
                <Text>25</Text>
              </View>
              <View>
                <Text>Dinamometros associados a esta conta</Text>
              </View>
            </View>
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
        {renderModalExerciseResult()}
        {renderModalConfig()}
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
          <TouchableOpacity
            style={styles.viewSettingsIcon}
            onPress={() => {
              setModalConfigVisibility(true);
            }}>
            <Icon
              color={`${DefaultTheme.primaryColor}`}
              size={32}
              name="settings"
              type="feather"
            />
          </TouchableOpacity>
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
