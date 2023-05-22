import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={{marginTop: 10}} onPress={() =>{ navigation.navigate('Todo') }}>
        <Text>To Todo Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})