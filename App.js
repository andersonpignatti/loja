import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { useState } from 'react';
import decide from './src/api';




export default function App() {

  
  
  const [products,setProdutcts] = decide();
  const [chose,setChose] =useState('');
  
  
  
function call(){
  
}



  return (
    <View style={styles.container}>
      <Text>{products.title}</Text>
      <Text>{products.description}</Text>
      <Text>{products.price}</Text>
      
      <Image
      source={{uri:products.image}}
      style={{width:200, height:200}}
      />
      <TextInput
      value={chose}
      onChangeText={(text) => setChose(text)}
      keyboardType='numeric'
      />

      <Button
      title='Enviar'
      onPress={call}
      />

      <StatusBar style="auto" />
    </View>
  
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
