import React, {createContext, useContext, useState} from 'react';
import {ExerciseList as ExerciseListData} from '../data/ExerciseList';
import {Exercise} from '../interface/Exercise';

interface ExerciseContextData {
  initialCountAnimationFinish: boolean;
  handleInitialCountAnimationFinish(): void;
  exerciseList: Exercise[];
  handleUpdateExercise(exercise: Exercise): void;
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
  const [exerciseList, setExerciseList] = useState<Exercise[] | null>(null);
  const handleUpdateExercise = (exerciseToUpdate: Exercise) => {
    const exerciseToUpdateIndex: any = exerciseList.findIndex(
      (exercise) => exercise.id === exerciseToUpdate.id,
    );
    let oldExerciseList = [...exerciseList];
    oldExerciseList[exerciseToUpdateIndex] = exerciseToUpdate;
    setExerciseList(oldExerciseList);
    handleCurrentExercise(exerciseToUpdate);
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
    const createExerciseList = async () => {
      await setExerciseList(ExerciseListData);
    };
    createExerciseList();
  });
  useState(() => {
    setCurrentExercise(ExerciseListData[0]);
  });

  //Chart
  // const dataChartExternal = (length: number, max: number) =>
  //   [...new Array(length)].map(() => Math.round(Math.random() * max));
  const dataChartExternal = {
    1: [5.15, 35.38, 195, 55, 39.44, 129, 259.66, 22.7, 1, 39.9],
    2: [18.8, 1.55, 79, 41, 60.9, 32, 11.3, 166, 11, 55],
    3: [1, 12, 47.31, 70, 141.54, 5, 70.66, 1],
    4: [8, 86, 13.33, 49, 29, 17.54, 99, 22.9, 100],
    5: [2, 111, 10.55, 33, 81, 51.41, 31, 7.9, 50],
    6: [100, 1, 55.33, 99, 9, 61.54, 66, 21.9, 55],
    7: [200, 1, 88.33, 13, 59, 50.54, 99, 33.9, 100],
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
        exerciseList,
        handleUpdateExercise,
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
