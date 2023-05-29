import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity style={{marginTop: 10}} onPress={() =>{ navigation.navigate('Todo') }}>
          <Text>To Todo Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 10}} onPress={() =>{ navigation.navigate('Product') }}>
          <Text>Product Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})