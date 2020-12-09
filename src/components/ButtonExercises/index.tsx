import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-elements';
import Modal from 'react-native-modal';

import {ExerciseList} from '../../data/ExerciseList';

import styles from './Styles';

const ButtonExercises: React.FC = (): JSX.Element => {
  const [modalVisibility, setModalVisibilty] = useState(false);
  const [exercisesList] = useState(ExerciseList);
  const [currentExercise, setCurrentExercise] = useState('');
  const handleExerciseChoosen = (exercise: string) => {
    setCurrentExercise(exercise);
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
            {exercisesList.map((exercise, index) => (
              <TouchableOpacity
                style={styles.viewExerciseList}
                onPress={() => {
                  handleExerciseChoosen(exercise.name);
                }}>
                <Text key={index} style={styles.exerciseText}>
                  {exercise.name}
                </Text>
              </TouchableOpacity>
            ))}
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
        title={`${currentExercise ? currentExercise : ExerciseList[0].name}`}
        type="outline"
        onPress={() => setModalVisibilty(true)}
      />
    </View>
  );
};

export {ButtonExercises};
