import React, {createContext, useContext, useState} from 'react';

interface ExerciseContextData {
  started: boolean;
  handleStartExercise(): void;
}

const ExerciseContext = createContext<ExerciseContextData>(
  {} as ExerciseContextData,
);

export const ExerciseProvider: React.FC = ({children}) => {
  const [started, setStarted] = useState(false);
  const handleStartExercise = () => {
    setStarted((prev) => !prev);
  };
  return (
    <ExerciseContext.Provider
      value={{
        started,
        handleStartExercise,
      }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export function useExercise() {
  const context = useContext(ExerciseContext);
  return context;
}
