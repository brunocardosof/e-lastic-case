import {StyleSheet} from 'react-native';
import {DefaultTheme} from '../../theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewUserInfoExercises: {
    flex: 1,
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
});
