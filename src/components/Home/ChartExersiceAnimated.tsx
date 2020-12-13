import React, {useEffect} from 'react';
import {AreaChart, Grid, YAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {View} from 'react-native';

import {useExercise} from '../../contexts/exercise';
import {DefaultTheme} from '../../theme';

const ChartExersiceAnimated: React.FC = () => {
  const {
    initialCountAnimationFinish,
    exerciseIsPaused,
    dataChartExternal,
    dataChart,
    handleDataChart,
    dataYAxis,
    handleYAxisDataChart,
  } = useExercise();

  useEffect(() => {
    let randomDataChartExternal = Math.floor(Math.random() * (7 - 1 + 1) + 1);
    if (initialCountAnimationFinish) {
      let i = 0;
      let length = dataChart.length;
      (function iterator() {
        handleDataChart(dataChartExternal[randomDataChartExternal]);
        handleYAxisDataChart(dataChartExternal[randomDataChartExternal]);
        if (++i < length) {
          !exerciseIsPaused && setTimeout(iterator, 1);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCountAnimationFinish]);

  return (
    <View style={{height: 200, flexDirection: 'row'}}>
      <YAxis
        data={dataYAxis}
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
        data={dataChart}
        gridMin={1}
        gridMax={5}
        contentInset={{top: 30, bottom: 30}}
        curve={shape.curveBasis}
        svg={{fill: `${DefaultTheme.tertiaryColor}`}}>
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
export {ChartExersiceAnimated};
