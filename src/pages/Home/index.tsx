import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, TouchableOpacity } from 'react-native';

interface Task {
    id: string;
    title: string;
}

function Home(): React.JSX.Element {

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddNewTask = () => {
        const data = {
            id: String(new Date().getTime()),
            title: newTask ? newTask : 'Task Empty'
        };

        setTasks([...tasks]);
    };

    return (
        <SafeAreaView style={styles.safeArea} >
            <View style={styles.container} >
                <Text style={styles.title} >
                    Welcome, dev!
                </Text>
                <TextInput
                    placeholderTextColor='#9788AB'
                    placeholder='New task...'
                    style={styles.input}
                    onChangeText={setNewTask}
                />
                <TouchableOpacity onPress={handleAddNewTask} activeOpacity={0.7} style={styles.button} >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>

                <Text style={styles.titleTasks} > My Tasks </Text>

                <Text style={{ color: '#EBE9ED' }}> {newTask} </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#191626',
    },
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    title: {
        color: '#EBE9ED',
        fontSize: 24,
        fontWeight: 'bold'
    },
    titleTasks: {
        marginVertical: 50,
        color: '#EBE9ED',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#242038',
        color: '#EBE9ED',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#432768',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#EBE9ED',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default Home;
