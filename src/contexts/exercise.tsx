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
    1: [5.15, 35.38, 12, 22.11],
    2: [1.8, 19.55, 29, 11],
    3: [1, 12, 22.31, 49],
    4: [8, 15, 33.33, 44],
    5: [2, 10, 30.55, 19],
    6: [9, 19, 35.33, 39],
    7: [1, 20.66, 30.33, 11],
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
