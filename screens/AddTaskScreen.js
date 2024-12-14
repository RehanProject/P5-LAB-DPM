import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { TaskContext } from '../App';

const AddTaskScreen = ({ navigation }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      const newTask = {
        id: tasks.length + 1,
        text: taskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Tugas Baru"
        value={taskText}
        onChangeText={setTaskText}
        mode="outlined"
        style={styles.input}
      />
      <Button 
        mode="contained" 
        onPress={handleAddTask} 
        style={styles.button}
      >
        Tambah Tugas Baru
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#6200ee',
  },
});

export default AddTaskScreen;
