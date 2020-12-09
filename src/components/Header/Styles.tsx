import {StyleSheet} from 'react-native';
import {DefaultTheme} from '../../theme';
export default StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${DefaultTheme.primaryColor}`,
  },
  headerViewLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  viewIcon: {},
  viewImage: {
    marginRight: 20,
  },
  logoImage: {
    marginLeft: 20,
  },
  headerViewRight: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});
