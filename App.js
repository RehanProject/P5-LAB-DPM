import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskManagerScreen from './screens/TaskManagerScreen';
import AddTaskScreen from './screens/AddTaskScreen';

// Membuat TaskContext
export const TaskContext = createContext();

const App = () => {
  const Stack = createStackNavigator();

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buat Tugas 5 DPM Praktikum', completed: true },
    { id: 2, text: 'Buat aplikasi DPM teori', completed: false },
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#6200ee' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen 
            name="Daftar Tugas" 
            component={TaskManagerScreen} 
            options={{ title: 'Daftar Tugas' }} 
          />
          <Stack.Screen 
            name="AddTask" 
            component={AddTaskScreen} 
            options={{ title: 'Tambah Tugas Baru' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContext.Provider>
  );
};

export default App;
