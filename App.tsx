import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen}/>
        <Stack.Screen name="ViewDetails" component={ViewDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
 );
};
function ViewDetails({navigation,route}:any){
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
    <Text style={{fontSize:34,color:'white'}}>Name: {NameGet}, Surname:{SurnameGet} </Text>
    </View>





  )



};

  function MainScreen() {
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');

  console.log("App is busy starting.")

  return (
    
    <View>

      <View style={styles.mainPicture}>
       <Image style={styles.ImageSize}
       source = {require('./img/react-native.png')}/>
   
      </View>

      <Text style={styles.welcomeText}>Welcome to App</Text>


      <View style={styles.InputFlex}>
      <Text style={styles.HeadingText}>Enter Name: </Text>
      <TextInput style={styles.InputBoxs} placeholder= "Name"
                                          onChangeText={newText => setName(newText)}/>
      </View>


      <View style={styles.InputFlex}>
      <Text style={styles.HeadingText}>Enter Surname: </Text>
      <TextInput style={styles.InputBoxs} placeholder= "Surname"
                                          onChangeText={newText => setSurname(newText)}/>
      </View>

      <Button title = "Add user" onPress={() => {navigation.navigate('ViewDetails', {NameSend : Name, SurnameSend : Surname});
      console.log("The user name is " + Name + " Surname: " + Surname)} />
                                
    </View>
    
  
  );
}



const styles = StyleSheet.create({
  welcomeText: {
     paddingTop: 40,
     color: 'cyan',
     fontWeight: 'bold',
     fontSize: 32,
     textAlign: 'center',
  },

  ImageSize : {
    width: 700,
    height: 350,
  },

  mainPicture : {
    paddingTop: 40,
    alignItems: 'center'
  },

  HeadingText : {
    fontWeight: 800,
    color: 'black'
  },

  InputFlex : {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent : 'space-evenly'




  },
  InputBoxs: {}


});

