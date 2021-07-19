import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class Transaction extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Ionicons name="chevron-back" size={24} color="black" />
                <Feather name="search" size={24} color="black" />
                </View>

                <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 10}}>
                    <Text style= {{fontSize: 24, fontFamily: "timesnewroman", fontWeight: "bold", color: "#575E94"}}>Recent Transaction</Text>
                    <Text>See all</Text>
                </View>

                <View style= {{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 20}}>
                    <TouchableOpacity style={{height: 25, width: 70, borderRadius: 20, backgroundColor: "#3E4685",justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "white"}}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{height: 25, width: 70, borderRadius: 20, backgroundColor: "#fff",justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "#999999"}}>Income</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{height: 25, width: 70, borderRadius: 20, backgroundColor: "#fff",justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "#999999"}}>Expense</Text>
                    </TouchableOpacity>
                </View>

                   
                    <View style={{marginTop: 10}}>
                        <Text style={{color: "#575E94", fontSize: 24, fontWeight: "bold"}}>Today</Text>
                    </View>

                 <View style={{height:70, padding:10, backfaceVisibility: "visible", backgroundColor: "white", borderRadius: 20, flexDirection: 'row', alignContent: "space-between", alignItems: "flex-end", marginTop: 10}}>
                    <View style={{height: 50, width:50, borderRadius: 20, backfaceVisibility: "visible", justifyContent: 'center',alignItems: "center",}}>
                    <MaterialIcons name="forward-to-inbox" size={24} color="black" />
                    </View>
                    <View style={{marginLeft: 10 }}>
                        <Text style={{fontSize: 20, fontWeight: "800"}}>Payment</Text>
                        <Text style={{color: "#D2D2D2"}}>Payment to Andrea</Text>
                    </View>
                     <Text style={{marginLeft: "auto", fontWeight: "800", color : "#575E94"}}>$30.00</Text>
                      </View>

                      <View style={styles.outview}>
        <View style={styles.innerview}>
          <View style={styles.inview}>
            <Image source={require("../assets/dog_image.jpg")} style={styles.image} />
          </View>
        </View>
        <Image
          source={require("../assets/dog_image.jpg")}
          style={[styles.imgaxis, { top: -30, left: 100 }]}
        />
        <Image
          source={require("../assets/dog_image.jpg")}
          style={[styles.imgaxis, { right: -25, top: 70 }]}
        />
        <Image
          source={require("../assets/dog_image.jpg")}
          style={[styles.imgaxis, { bottom: 20, left: -10 }]}
        />
        <Image
          source={require("../assets/dog_image.jpg")}
          style={[styles.imgs, { top: 70, left: -30 }]}
        />
        <Image
          source={require("../assets/dog_image.jpg")}
          style={[styles.imgs, { bottom: 20, right: -10 }]}
        />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "white" }}>See Details</Text>
      </TouchableOpacity>


            </View>
        )
    }
}




const styles = StyleSheet.create({

container : {
    flex: 1,
    padding: 10, 
    backgroundColor: "#F2F8FD"
},

outview: {
    borderRadius: 140,
    borderWidth: 2,
    borderColor: "#E6EBF9",
    alignSelf: "center",
    padding: 25,
    position: "relative",
    marginBottom: 30,
    marginTop: 45,
  },
  imgaxis: {
    height: 50,
    width: 50,
    borderRadius: 50,
    position: "absolute",
    borderWidth: 1,
    borderColor: "white",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  in: {
    height: 113,
    width: 113,
    borderRadius: 80,
    // padding: 10,
    borderWidth: 3,
    borderColor: "#484F80",
    alignItems: "center",
    justifyContent: "center",
  },
  innerview: {
    padding: 20,
    borderColor: "#D6E7FC",
    borderWidth: 22,
    borderRadius: 100,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    elevation: 6,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  btn: {
    backgroundColor: "#3E4685",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  block: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 10,
    borderRadius: 20,
    minWidth: 60,
    textAlign: "center",
    backgroundColor: "white",
    marginRight: 10,
  },
  bigText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#585E92",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },






















})
