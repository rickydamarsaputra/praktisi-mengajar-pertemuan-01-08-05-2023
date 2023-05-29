import { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'

export default function Todo({ navigation }) {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setTodos([...json]))
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginVertical: 10}}>Todo Screen</Text>
      <ScrollView style={{marginHorizontal: 10}} showsVerticalScrollIndicator={false}>
      {todos.map((todo) =>(
        <View key={todo.id} style={{borderWidth: 2,marginBottom: 10, padding: 5}}>
          <Text style={{color: '#364f6b'}}>{todo.title}</Text>
        </View>
      ))}
      </ScrollView>
      <TouchableOpacity style={{marginVertical: 10}} onPress={() =>{ navigation.navigate('TentangKami') }}>
        <Text>To TentangKami Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})