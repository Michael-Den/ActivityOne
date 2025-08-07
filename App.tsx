import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View>

      <View>
        <Image source={require('./img/react-native.png')}/>
      </View>
      <Text style={styles.welcomeText}>Welcome to App</Text>
      <Text>Enter Name: </Text>
      <TextInput placeholder= "Name"/>
      <Text>Enter Surname: </Text>
      <TextInput placeholder= "Surname"/>

      <Button title = "Add user"/>
    </View>
  
  );
}



const styles = StyleSheet.create({
  welcomeText: {
     paddingTop: 40,
     color: 'cyan',
     fontWeight: 'bold',
     fontSize: 28,
     textAlign: 'center'
  },
});

