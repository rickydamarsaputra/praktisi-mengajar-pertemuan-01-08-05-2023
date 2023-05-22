import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function TentangKami({ navigation }) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TentangKami Screen</Text>
      <TouchableOpacity style={{marginTop: 10}} onPress={() =>{ navigation.navigate('Home') }}>
        <Text>To Home Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})