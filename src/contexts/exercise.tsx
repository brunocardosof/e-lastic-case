import React, {createContext, useContext, useState} from 'react';
import { ExerciseList } from '../data/ExerciseList';
import {Exercise} from '../interface/Exercise';

interface ExerciseContextData {
  initialCountAnimationFinish: boolean;
  handleInitialCountAnimationFinish(): void;
  exerciseIsPaused: boolean;
  handleExercisePaused(pause: boolean): void;
  currentExercise: Exercise;
  handleCurrentExercise(exercise: Exercise): void;
  dataChartExternal: any;
  dataChart: number[];
  handleDataChart(data: number[]): void;
  dataYAxis: number[];
  handleYAxisDataChart(data: number[]): void;
}

const ExerciseContext = createContext<ExerciseContextData>(
  {} as ExerciseContextData,
);

export const ExerciseProvider: React.FC = ({children}) => {
  const [
    initialCountAnimationFinish,
    setInitialCountAnimationFinish,
  ] = useState(false);
  const handleInitialCountAnimationFinish = () => {
    setInitialCountAnimationFinish((prev) => !prev);
  };
  const [exerciseIsPaused, setExerciseIsPaused] = useState(false);
  const handleExercisePaused = (pause: boolean) => {
    setExerciseIsPaused(pause);
  };
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const handleCurrentExercise = (exercise: Exercise) => {
    setCurrentExercise(exercise);
  };

  useState(() => {
    setCurrentExercise(ExerciseList[0]);
  }, []);

  //Chart
  // const dataChartExternal = (length: number, max: number) =>
  //   [...new Array(length)].map(() => Math.round(Math.random() * max));
  const dataChartExternal = {
    1: [5.15, 15.38, 35, 55, 39.44, 29, 59.66, 22.7, 1, 39.9],
    2: [8.8, 11.55, 29, 41, 60.9, 32, 11.3, 66, 11, 55],
    3: [1, 12, 27.31, 30, 41.54, 5, 70.66, 1],
    4: [8, 16, 33.33, 44, 29, 17.54, 99, 22.9, 100],
    5: [2, 11, 100.55, 33, 1, 51.41, 21, 7.9, 50],
    6: [10, 28, 33.33, 44, 29, 6.54, 66, 21.9, 55],
    7: [2, 16, 21.33, 23, 29, 50.54, 99, 33.9, 100],
  };
  const [dataChart, setDataChart] = useState([0]);
  const [dataYAxis, setDataYAxis] = useState([0, 20, 30, 40]);

  const handleDataChart = (data: number[]) => {
    setDataChart(data);
  };
  const handleYAxisDataChart = (data: number[]) => {
    setDataYAxis(data);
  };

  return (
    <ExerciseContext.Provider
      value={{
        initialCountAnimationFinish,
        handleInitialCountAnimationFinish,
        exerciseIsPaused,
        handleExercisePaused,
        currentExercise,
        handleCurrentExercise,
        dataChart,
        dataYAxis,
        // dataChartExternal,
        dataChartExternal,
        handleYAxisDataChart,
        handleDataChart,
      }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export function useExercise() {
  const context = useContext(ExerciseContext);
  return context;
}
