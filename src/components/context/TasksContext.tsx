import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

interface IProps {
    children: React.ReactElement;
};

export interface ITask {
    id: string;
    title: string;
};

export interface ITasksContext {
    tasks: ITask[];
    addTask(task: ITask): void;
};

const tasksData = '@MyTasks:Tasks';

export const TasksContext = React.createContext<ITasksContext>(
    {} as ITasksContext,
);

export const TasksProvider: React.FunctionComponent<IProps> = ({ children }) => {
    const [data, setData] = React.useState<ITask[]>([]);

    React.useEffect(() => {
        async function loadTasks() {
            const taskList = await AsyncStorage.getItem(tasksData);

            if (taskList) {
                setData(JSON.parse(taskList));
            }
        }
    }, []);

    const addTask = (task: ITask) => {
        console.log('addTask action.')
    };

    const tasks = [{ id: '1', title: 'Task01' }];

    return (
        <TasksContext.Provider value={{ tasks, addTask }} >
            {children}
        </TasksContext.Provider>
    );
};