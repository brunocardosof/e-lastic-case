import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {useExercise} from '../../../contexts/exercise';
import {DefaultTheme} from '../../../theme';
import {ExerciseList} from '../../../data/ExerciseList';
import {Exercise} from '../../../interface/Exercise';

import styles from './Styles';

const ButtonExercises: React.FC = (): JSX.Element => {
  const {handleCurrentExercise, currentExercise, exerciseList} = useExercise();
  const [modalVisibility, setModalVisibilty] = useState(false);
  const handleExerciseChoosen = (exercise: Exercise) => {
    handleCurrentExercise(exercise);
    setModalVisibilty(false);
  };
  const renderModalExercisesList = (): JSX.Element => {
    return (
      <Modal
        animationIn="bounceInLeft"
        animationOut="bounceOutRight"
        animationInTiming={900}
        animationOutTiming={900}
        isVisible={modalVisibility}
        onBackdropPress={() => setModalVisibilty(false)}
        onBackButtonPress={() => setModalVisibilty(false)}>
        <View style={styles.containerModal}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Selecione o exercício:</Text>
            {exerciseList.map((exercise, index) => (
              <TouchableOpacity
                key={index}
                style={styles.viewExerciseList}
                onPress={() => {
                  handleExerciseChoosen(exercise);
                }}>
                <Text style={styles.exerciseText}>{exercise.name}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}
              onPress={() => {
                setModalVisibilty(false);
              }}>
              <Icon
                color={`${DefaultTheme.secundaryColor}`}
                size={24}
                name="arrow-left"
                type="feather"
              />
              <Text style={{color: `${DefaultTheme.secundaryColor}`}}>
                Voltar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={styles.container}>
      {renderModalExercisesList()}
      <Button
        buttonStyle={styles.buttonExercise}
        titleStyle={styles.buttonTitle}
        title={`${
          currentExercise ? currentExercise.name : ExerciseList[0].name
        }`}
        type="outline"
        onPress={() => setModalVisibilty(true)}
      />
    </View>
  );
};

export {ButtonExercises};
