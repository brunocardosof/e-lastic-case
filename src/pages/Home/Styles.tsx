import {Dimensions, StyleSheet} from 'react-native';
import {DefaultTheme} from '../../theme';
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: windowHeight,
  },
  viewUserInfoExercises: {
    flex: 2,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconUserInfoExercises: {},
  viewSeries: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewRepetition: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewMaxWeight: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewMaxStrenght: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 14,
    color: `${DefaultTheme.secundaryColor}`,
  },
  textSubTitle: {
    fontSize: 13,
    color: `${DefaultTheme.secundaryColor}`,
  },
  lineDivider: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: `${DefaultTheme.secundaryColor}`,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  viewGraphIcons: {
    flex: 1,
    flexDirection: 'row',
  },
  viewSettingsIcon: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  viewChartIcon: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  viewChart: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 5,
  },
  viewStopwatch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTimer: {
    marginRight: 10,
  },
  viewButtonExercise: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  buttonExercise: {
    borderRadius: 30,
    width: 250,
    backgroundColor: `white`,
    borderColor: `${DefaultTheme.secundaryColor}`,
  },
  buttonTitle: {
    color: `${DefaultTheme.secundaryColor}`,
  },
  viewBottomButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonRelatorioBottom: {
    borderRadius: 15,
    backgroundColor: `${DefaultTheme.primaryColor}`,
    borderColor: `${DefaultTheme.primaryColor}`,
    marginLeft: 5,
  },
  buttonIniciarBottom: {
    borderRadius: 15,
    backgroundColor: `${DefaultTheme.primaryColor}`,
    borderColor: `${DefaultTheme.primaryColor}`,
    marginRight: 5,
  },
  buttonBottomTitle: {
    color: `white`,
    paddingHorizontal: 10,
  },
  iconInsideBottomButtons: {
    paddingLeft: 10,
  },
  textTimer: {
    color: `${DefaultTheme.primaryColor}`,
    fontSize: 30,
  },
  //ModalButtonStartCounting
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 270,
    overflow: 'hidden',
    height: 110,
    width: 110,
    shadowColor: '#000',
  },
  viewFinalMessage: {
    flexDirection: 'column',
  },
  textFinalMessage: {
    color: `${DefaultTheme.primaryColor}`,
    fontSize: 26,
  },
  //ModalExerciseResult
  containerModalExerciseResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalViewExerciseResult: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 25,
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
  modalExerciseResultTitle: {
    fontSize: 28,
    textAlign: 'left',
    fontWeight: '700',
    color: `${DefaultTheme.secundaryColor}`,
  },
  textStrenght: {
    fontSize: 14,
    color: `${DefaultTheme.secundaryColor}`,
  },
  textStopwatchModalExerciseResult: {
    fontSize: 36,
    color: `${DefaultTheme.tertiaryColor}`,
  },
  textLegendIcon: {
    color: `${DefaultTheme.secundaryColor}`,
  },
});
