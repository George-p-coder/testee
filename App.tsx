import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';




const App: React.FC = () => {
  return (
    
    <SafeAreaView style={styles.container}>

<View style={styles.iconContainer}>

<Image source={require('./assets/internet.png')} style={styles.icon} />
   
      <Text style={styles.largeText}> TI EVOLUI</Text>
            

     
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
   
    padding: 70,
   
  },
 
  icon: {
    width: 50,
    height: 50,
  },

  largeText: {
    fontSize: 30, // Aumenta o tamanho da letra
    fontWeight: 'bold',
    color: 'purple',

  },

});







export default App;













































































