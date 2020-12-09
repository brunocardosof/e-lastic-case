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
  viewRowGraphIcons: {
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
  },
  viewChartTimer: {
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
});
