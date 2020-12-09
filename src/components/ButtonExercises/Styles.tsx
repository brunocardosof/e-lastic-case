import {StyleSheet} from 'react-native';
import {DefaultTheme} from '../../theme';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  buttonExercise: {
    borderRadius: 30,
    width: 250,
    backgroundColor: 'white',
    borderColor: `${DefaultTheme.secundaryColor}`,
  },
  buttonTitle: {
    color: `${DefaultTheme.secundaryColor}`,
  },
  viewExerciseList: {
    borderWidth: 3,
    borderColor: `${DefaultTheme.secundaryColor}`,
    borderRadius: 20,
    marginTop: 20,
  },
  exerciseText: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: `${DefaultTheme.secundaryColor}`,
  },
  //Modal
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 45,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '700',
    color: `${DefaultTheme.primaryColor}`,
  },
});
