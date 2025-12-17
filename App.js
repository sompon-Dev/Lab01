import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button , TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  //var counter = 0
  const [Counter,setCounter] = useState(5)

  return (
    <View style = {styles.container}>
      
      <View style={{width:430,height:150,backgroundColor:'lightblue',marginTop:100}}>
        <Text style={{fontSize:80,marginTop:20,fontWeight:'bold',textAlign:'center'}}>{Counter}</Text>
      </View>





      
      <View style={{backgroundColor:'lightblue',width:430,height:150,marginTop:320,flexDirection:'row'}}>

        {/* this is '+' button */}
        <TouchableOpacity onPress={() =>{
          setCounter(Counter + 1 )
          // console.log(counter)
          console.log("plus")
        }
          
        
        }>
        <View style={{backgroundColor:'lightgreen',width:200,height:140,marginLeft:7.5,marginTop:5,borderBlockColor:'black',borderWidth:3}}>
          <Text style={styles.texticon}>+</Text>
        </View>
       </TouchableOpacity>
        



        {/* this is '-' button */}
        <TouchableOpacity onPress={() =>{
          if(Counter<=0){
            console.log("dont get any further please")
          }
          else if(Counter>0){
            setCounter(Counter - 1 )
          }
          // console.log(counter)
          console.log("minus")
        }
        }>
          <View style={{backgroundColor:'#FF8488',width:200,height:140,marginLeft:7.5,marginTop:5,borderBlockColor:'black',borderWidth:3}}>
            <Text style={{fontSize:80,color:'#fff',marginTop:5,textAlign:'center'}}> - </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style = {{width:430,height:150,backgroundColor:'lightblue'}}>
        <TouchableOpacity onPress={() =>{

          setCounter(0)
        }}>
          <View style={{backgroundColor:'#578FCA',width:200,height:140,marginLeft:100,marginTop:5,borderBlockColor:'black',borderWidth:3}}>
            <Text style={{fontSize:40,color:'#fff',textAlign:'center',justifyContent:'center',marginTop:40}}>Reset</Text>
          </View>



        </TouchableOpacity>
      </View>

      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', //default flexDirection:'Column'
    paddingTop: 50,
    paddingHorizontal:0,
    paddingBottom: 5,
    backgroundColor: 'lightblue',
  },
  buttonContainer:{
    margin:20,
    width:'200'
  },
  texticon:{
    fontSize:80,
    color:'#fff',
    textAlign:'center',
    marginTop:5
  },
  button:{
    width:200,
    height:75,
    backgroundColor:'#213448',
    borderRadius:15
  },
  buttonText:{
    fontWeight:'bold',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    marginButtom:10,
    color:'white',
    
  }
});
