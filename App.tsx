import React from 'react';
import Home from './src/pages/Home';
import TasksContext from './src/components/context/TasksContext';

const App = (): React.JSX.Element => {

  return (
    <TasksContext.Provider value={{ id: '1', title: 'Task 01' }} >
      <Home />
    </TasksContext.Provider>
  );
};

export default App;
