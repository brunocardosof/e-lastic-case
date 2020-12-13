import React, {useEffect} from 'react';
import {AreaChart, Grid, YAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {View} from 'react-native';

import {useExercise} from '../../contexts/exercise';
import {DefaultTheme} from '../../theme';

const ChartExersiceResult: React.FC = () => {
  const {currentExercise} = useExercise();

  return (
    <View style={{height: 200, flexDirection: 'row'}}>
      <YAxis
        data={currentExercise.dataChart}
        svg={{
          fill: 'grey',
          fontSize: 10,
        }}
        contentInset={{top: 30, bottom: 30}}
        numberOfTicks={3}
        formatLabel={(value) => `${value}`}
      />
      <AreaChart
        style={{flex: 1, marginLeft: 16}}
        data={currentExercise.dataChart}
        gridMin={1}
        gridMax={5}
        contentInset={{top: 30, bottom: 30}}
        curve={shape.curveBasis}
        svg={{fill: `${DefaultTheme.primaryColor}`}}>
        <Grid
          svg={{
            strokeMiterlimit: 10,
          }}
          direction={Grid.Direction.HORIZONTAL}
        />
      </AreaChart>
    </View>
  );
};
export {ChartExersiceResult};
