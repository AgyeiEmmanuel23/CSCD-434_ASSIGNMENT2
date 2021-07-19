import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';



export default class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.firstview}>
                    <View style={{flexDirection: 'row',padding: 10}}>
                    <FontAwesome5 name="grip-lines" size={24} color="black" />
                    <Entypo name="dots-two-vertical" size={24} color="black"  style={{marginLeft: 'auto'}}/>
                    </View>

                    <Image source={require('../assets/dog_image.jpg')} style={styles.imagedit} />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontSize: 24, fontWeight: "bold", color: "#5F6597"}}>Hira Riaz</Text>
                        <Text>UX/UI Designer</Text>
                    </View>

                    <View style={{flexDirection:'row', marginVertical: 10, alignContent: "space-around", justifyContent: "space-evenly" }}>
                        <View style= {styles.moneyview}>
                            <Text style={{fontWeight:"300", fontSize: 21, color: "#5F6597"}}>$8900</Text>
                            <Text>Income</Text>
                        </View>
                        <View style={{height: '100%', width: 1, backgroundColor: "#909090"}}></View>

                        <View style= {styles.moneyview}>
                            <Text style={{fontWeight:"300", fontSize: 21, color: "#5F6597"}}>$5500</Text>
                            <Text>Expense</Text>
                        </View>
                        <View style={{height: '100%', width: 1, backgroundColor: "#909090"}}></View>
                        <View style= {styles.moneyview}>
                            <Text style={{fontWeight:"300", fontSize: 21, color: "#5F6597"}}>$920</Text>
                            <Text>Loan</Text>
                        </View>
                    </View>

                </View>

                <View style={{flexDirection: "row", }}>
                    <Text style={{fontSize: 24, fontWeight: "bold", color: "#3C4472"}}>Overview</Text>
                    <EvilIcons name="bell" size={24} color="black" style={{marginTop: 10}}/>
                    <Text style={{marginLeft: "auto", color: "#3C4472", marginTop: 5, }}>July 15, 2021</Text>
                </View>

                <View style={{height:70, padding:10, backfaceVisibility: "visible", backgroundColor: "white", borderRadius: 20, flexDirection: 'row', alignContent: "space-between", alignItems: "flex-end"}}>
                    <View style={{height: 50, width:50, borderRadius: 20, backfaceVisibility: "visible", backgroundColor: "#E6E7F9", justifyContent: 'center',alignItems: "center",}}>
                    <FontAwesome5 name="arrow-up" size={24} color="black" />
                    </View>
                    <View style={{marginLeft: 10 }}>
                        <Text style={{fontSize: 16, fontWeight: "800"}}>Sent</Text>
                        <Text style={{color: "#D2D2D2"}}>Sending Payment to Clients</Text>
                    </View>
                    <Text style={{marginLeft: "auto", fontWeight: "800" }}>$150</Text>
                    
                </View>

                <View style={{height:70, padding:10, backfaceVisibility: "visible", backgroundColor: "white", borderRadius: 20, flexDirection: 'row', alignContent: "space-between", alignItems: "flex-end", marginTop: 10}}>
                    <View style={{height: 50, width:50, borderRadius: 20, backfaceVisibility: "visible", backgroundColor: "#E6E7F9", justifyContent: 'center',alignItems: "center",}}>
                    <FontAwesome5 name="arrow-down" size={24} color="black" />
                    </View>
                    <View style={{marginLeft: 10 }}>
                        <Text style={{fontSize: 16, fontWeight: "800"}}>Receive</Text>
                        <Text style={{color: "#D2D2D2"}}>Receiving Salary from company </Text>
                    </View>
                    <Text style={{marginLeft: "auto", fontWeight: "800" }}>$250</Text>
                    
                </View>

                <View style={{height:70, padding:10, backfaceVisibility: "visible", backgroundColor: "white", borderRadius: 20, flexDirection: 'row', alignContent: "space-between", alignItems: "flex-end", marginTop: 10}}>
                    <View style={{height: 50, width:50, borderRadius: 20, backfaceVisibility: "visible", backgroundColor: "#E6E7F9", justifyContent: 'center',alignItems: "center",}}>
                        <View style= {{height: 20, width: 20, borderWidth: 2, justifyContent: 'center', alignItems: "center", borderRadius: 5}}>
                        <Foundation name="dollar" size={24} color="black" />
                        </View>
                    

                    </View>
                    <View style={{marginLeft: 10 }}>
                        <Text style={{fontSize: 16, fontWeight: "800"}}>Loan</Text>
                        <Text style={{color: "#D2D2D2"}}>Loan for the car</Text>
                    </View>
                    <Text style={{marginLeft: "auto", fontWeight: "800" }}>$400</Text>
                    
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: "lightblue",
        padding: 20,
    },

    firstview: {
        height: "50%",
        backfaceVisibility: "visible",
        backgroundColor: "white",
        borderRadius: 30,

    },

    imagedit : {
        height: 80, 
        width: 80,
        borderRadius: 40,
        alignSelf: "center",
    },
    moneyview : 
    {
        
        justifyContent: 'center',
        alignSelf: "center",
        alignItems: "center",
        alignContent: "center",
        
    }, 

   



})
