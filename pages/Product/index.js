import { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'

export default function Todo({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('http://192.168.50.202/api/products')
    .then(response => response.json())
    .then(json => setProducts([...json.data]))
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginVertical: 10}}>Product Screen</Text>
      <ScrollView style={{marginHorizontal: 10}} showsVerticalScrollIndicator={false}>
      {products.map((product) =>(
        <View key={product.id} style={{width: 350, backgroundColor: '#fff', padding: 5, marginBottom: 10, borderRadius: 5}}>
          <Text style={{color: '#364f6b'}}>{product.name.substring(0,20)}...</Text>
          <Text style={{color: '#364f6b'}}>Rp.{product.price.toLocaleString()}</Text>
        </View>
      ))}
      </ScrollView>
      <TouchableOpacity style={{marginVertical: 10}} onPress={() =>{ navigation.navigate('Home') }}>
        <Text>To Home Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})