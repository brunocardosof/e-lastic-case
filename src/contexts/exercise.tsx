import React, {createContext, useContext, useState} from 'react';

interface ExerciseContextData {
  initialCountAnimationFinish: boolean;
  handleInitialCountAnimationFinish(): void;
  exerciseIsPaused: boolean;
  handleExercisePaused(pause: boolean): void;
  chartData(length: number, max: number): number[];
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

  //Chart
  const chartData = (length: number, max: number) =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));
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
        chartData,
        dataYAxis,
        dataChart,
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
