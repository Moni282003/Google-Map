import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, TextInput, Dimensions } from 'react-native'
import Color from '../Shared/Color'

export default function Header() {
    return (
      <View style={{display:'flex',flexDirection:'row',
      justifyContent: "space-evenly", alignItems:'center',gap:5
     
      }}>
        <Image style={styles.logo} source={require('./../../assets/logo.png')}/>
        <View>
            <TextInput placeholder='Search'
            style={styles.searchBar}
            />
        </View>
        <Image source={require('./../../assets/placeholder.jpg')} style={styles.userImage}/>

      </View>
    )
}

const styles=StyleSheet.create({

    logo:{
        height:50,
        width:50
    },
    searchBar:{
        borderWidth:1,
        borderColor:Color.black,
        padding:4,
        borderRadius:50,
        paddingLeft:10,
        width:Dimensions.get("screen").width*0.6
    },
    userImage:{
         width:50,
         height:50,
         borderRadius:100
    }
})