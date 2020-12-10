import React, {useEffect, useState} from 'react';
import {Animated, Easing} from 'react-native';
import {Icon} from 'react-native-elements';

import {DefaultTheme} from '../../../theme';

const RepeatIconAnimated: React.FC = (): JSX.Element => {
  const [spinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    spin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const spin = () => {
    spinValue.setValue(0);

    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Animated.View style={{transform: [{rotate}]}}>
      <Icon
        color={`${DefaultTheme.primaryColor}`}
        size={32}
        name="refresh-cw"
        type="feather"
      />
    </Animated.View>
  );
};

export {RepeatIconAnimated};
