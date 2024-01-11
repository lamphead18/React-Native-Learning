import React from "react";

import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TasksContext, ITask } from "../context/TasksContext";

export const TaskList = (): React.JSX.Element => {

    const { tasks } = React.useContext(TasksContext);

    return (
        <FlatList
            data={tasks as unknown as ITask[]}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.buttonTask} >
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