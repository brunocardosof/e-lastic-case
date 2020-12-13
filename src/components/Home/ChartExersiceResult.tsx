import React, {useEffect} from 'react';
import {AreaChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {View, Text} from 'react-native';

import {useExercise} from '../../contexts/exercise';
import {DefaultTheme} from '../../theme';
import {G, Rect} from 'react-native-svg';

const ChartExersiceResult: React.FC = () => {
  const {currentExercise} = useExercise();
  const dataXAxis = [0.0, 1.0, 2.0, 3.0, 4.0];
  const axesSvg = {fontSize: 10, fill: 'grey'};
  const verticalContentInset = {top: 60, bottom: 10};
  const xAxisHeight = 15;

  const TooltipTime = () => (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        width: 70,
        height: 30,
        borderColor: `${DefaultTheme.primaryColor}`,
        backgroundColor: `${DefaultTheme.primaryColor}`,
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <Text style={{textAlign: 'center', color: 'white'}}> 4.7 s</Text>
    </View>
  );
  const TooltipLegend1 = () => (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 15,
          width: 15,
          marginRight: 5,
          borderWidth: 1,
          borderColor: `${DefaultTheme.tertiaryColor}`,
          backgroundColor: `${DefaultTheme.tertiaryColor}`,
        }}
      />
      <Text style={{fontSize: 12}}>Executado (kg)</Text>
    </View>
  );
  const TooltipLegend2 = () => (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 15,
          width: 15,
          marginRight: 5,
          borderWidth: 1,
          borderColor: `${DefaultTheme.primaryColor}`,
          backgroundColor: `${DefaultTheme.primaryColor}`,
        }}
      />
      <Text style={{fontSize: 12}}>Tempo de Contração</Text>
    </View>
  );
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 250,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: `${DefaultTheme.secundaryColor}`,
      }}>
      <YAxis
        data={currentExercise.dataChart}
        style={{marginBottom: xAxisHeight}}
        numberOfTicks={5}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />
      <View style={{flex: 1, marginHorizontal: 3}}>
        <AreaChart
          style={{flex: 1}}
          data={currentExercise.dataChart}
          contentInset={verticalContentInset}
          curve={shape.curveBasis}
          svg={{fill: `${DefaultTheme.primaryColor}`}}>
          <Grid />
          <TooltipLegend1 />
          <TooltipLegend2 />
          <TooltipTime />
        </AreaChart>
        <XAxis
          style={{marginHorizontal: -5, height: xAxisHeight}}
          data={dataXAxis}
          contentInset={{left: 10, right: 10}}
          svg={axesSvg}
        />
      </View>
    </View>
  );
};
export {ChartExersiceResult};
