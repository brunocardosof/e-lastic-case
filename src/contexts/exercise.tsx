import React, {createContext, useContext, useState} from 'react';

interface ExerciseContextData {
  initialCountAnimationFinish: boolean;
  handleInitialCountAnimationFinish(): void;
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
  return (
    <ExerciseContext.Provider
      value={{
        initialCountAnimationFinish,
        handleInitialCountAnimationFinish,
      }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export function useExercise() {
  const context = useContext(ExerciseContext);
  return context;
}
