import React from 'react'
import { Text, View,Image } from 'react-native'

export default function CategoryItem({Category}) {
    return (
      <View style={{padding:5,alignItems:"center",margin:4,width:110,height:100,
      backgroundColor:"#ffffff",justifyContent:"center",borderRadius:15,elevation:2
      }}>
        <Image source={Category.icon}
        style={{width:50, height:50}}
        />
        <Text style={{fontSize:13}}>{Category.name}</Text>
      </View>
    )
}
