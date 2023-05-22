import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function Todo({ navigation }) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Todo Screen</Text>
      <TouchableOpacity style={{marginTop: 10}} onPress={() =>{ navigation.navigate('TentangKami') }}>
        <Text>To TentangKami Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})