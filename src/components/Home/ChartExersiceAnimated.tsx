import React, {useEffect} from 'react';
import {AreaChart, Grid, YAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {View} from 'react-native';
import {useExercise} from '../../contexts/exercise';

const ChartExersiceAnimated: React.FC = () => {
  const {
    initialCountAnimationFinish,
    exerciseIsPaused,
    chartData,
    dataChart,
    handleDataChart,
    dataYAxis,
    handleYAxisDataChart,
  } = useExercise();

  useEffect(() => {
    if (initialCountAnimationFinish) {
      let i = 0;
      let length = chartData.length;
      (function iterator() {
        handleDataChart(chartData(8, 55));
        handleYAxisDataChart(chartData(8, 55));
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
        svg={{fill: '#8cd9f1'}}>
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
