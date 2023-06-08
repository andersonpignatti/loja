import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground } from 'react-native';
import { useState } from 'react';
import decide from './src/api';




export default function App() {

  
  
  const [products,setProdutcts] = decide();
  const [chose,setChose] =useState('');
  
  
  
function call(){
  
}



  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>{products.title}</Text>
      <Text style={styles.description}>{products.description}</Text>
      <Text style={styles.price}>R$ {products.price}</Text>
      
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
      color='crimson'
      
      />

      <StatusBar style="auto" />
    </View>
  
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    ImageBackground: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700445585-optimized.jpg'
  },
  title: {
    fontSize: 30,
    color:'crimson',
    textAlign:'center',
    marginLeft:30,
    marginRight:30

  },
  description: {
    textAlign:'justify',
    padding:20,
  },
  price:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    padding:10,
    marginBottom: 35,
    backgroundColor:'crimson'
  },
  ibc: {
    flex:1,
    justifyContent:'center'
  }
});
