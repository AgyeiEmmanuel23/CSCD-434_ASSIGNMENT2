import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


export default class HomeScreen extends Component {

    render () {

    
    
        return (
            <View style={styles.container}>
                
                <View style={styles.circle}></View>

                <View>

                
                <View style={{height:60, padding:10, backfaceVisibility: "visible", backgroundColor: "white", borderRadius: 20}}>
                    <Text style={{marginBottom: 0}}>Email</Text>
                    <View style={{flexDirection: 'row',alignItems: "center", alignContent: "space-between",}}>
                    <EvilIcons name="lock" size={24} color="black" />
                    <TextInput placeholder="Enter your email"  />
                    <EvilIcons name="eye" size={24} color="black" style={{marginLeft: "auto"}} />
                    </View>

                    </View>

                    <View style={{height:60, padding:10, backfaceVisibility: "visible", backgroundColor: "white", borderRadius: 20, marginTop: 20}}>
                    <Text style={{marginBottom: 0}}>Password</Text>
                    <View style={{flexDirection: 'row',alignItems: "center", alignContent: "space-between",}}>
                    <EvilIcons name="lock" size={24} color="black" />
                    <TextInput placeholder="Enter Password" secureTextEntry = {true} />
                    <EvilIcons name="eye" size={24} color="black" style={{marginLeft: "auto"}} />
                    </View>

                    </View>
                

               

                

                    <View>
                        <TouchableOpacity style = {{height: 50, width: '100%', borderRadius: 20, backgroundColor: "#3E4685",justifyContent: "center", alignItems: "center", marginTop: 20,}}>
                            <Text style={{color: "white", fontSize: 14, }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text>sign up</Text>
                        <Text>Forgot password?</Text>
                    </View>

                    

                    </View>

            </View>
        )
    }
};



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 20,
        
      },
      
      circle : {
          
          width:100,
          height: 100, 
          backgroundColor: "#3D4886",
          borderRadius: 50,
          margin: 50,
          alignSelf: "center",


      }, 

      
     

})

