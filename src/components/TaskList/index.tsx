import React from "react";

import { Alert, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ITask, useTaskList } from "../context/TasksContext";

export const TaskList = (): React.JSX.Element => {

    const { tasks, removeTask } = useTaskList();

    const handleRemoveTask = (id: string) => {
        Alert.alert('Are you sure?', 'Do you really want to delete the task?', [
            {
                text: 'Cancel',
                onPress: () => {}
            },
            {
                text: 'Delete',
                onPress: () => removeTask(id),
            },
        ]);
    };

    return (
        <FlatList
            data={tasks as unknown as ITask[]}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleRemoveTask(item.id)}
                    style={styles.buttonTask} >
                    <Text style={styles.titleTask}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    buttonTask: {
        backgroundColor: '#242038',
        padding: 10,
        marginTop: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    titleTask: {
        color: '#EBE9ED',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

// export default TaskList;