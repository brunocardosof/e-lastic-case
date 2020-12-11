import React, {useEffect, useState} from 'react';
import {AreaChart, Grid, YAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {View} from 'react-native';

const ChartExersiceAnimated: React.FC = () => {
  const [dataYAxis, setDataYAxis] = useState([10, 20, 30, 40]);
  const [dataChart, setDataChart] = useState([0]);
  const array = [10, 30, 150, 20];

  useEffect(() => {
    let i = 0;
    let length = array.length;
    (function iterator() {
      setDataChart((prevArray) => [...prevArray, array[i]]);
      setDataYAxis(array);
      if (++i < length) {
        setTimeout(iterator, 50);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        gridMin={5}
        contentInset={{top: 30, bottom: 30}}
        curve={shape.curveNatural}
        svg={{fill: 'rgba(134, 65, 244, 0.8)'}}>
        <Grid />
      </AreaChart>
    </View>
  );
};
export {ChartExersiceAnimated};
