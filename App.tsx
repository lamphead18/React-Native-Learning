import React from 'react';
import { Home } from './src/pages/Home';
import { TasksProvider } from './src/components/context/TasksContext';

const App = (): React.JSX.Element => {

  return (
    <TasksProvider >
      <Home />
    </TasksProvider >
  );
};

export default App;
