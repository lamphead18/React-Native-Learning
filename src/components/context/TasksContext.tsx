import React from "react";

export interface ITasksContext {
    id: string;
    title: string;
}

const TasksContext = React.createContext<ITasksContext>(
    {} as ITasksContext,
    );



export default TasksContext;
