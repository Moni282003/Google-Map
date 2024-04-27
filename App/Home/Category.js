import React from 'react'
import { FlatList, Text, Touchable, TouchableOpacity, View } from 'react-native'
import CategoryItem from './CategoryItem';

export default function Category() {
    const CategoryList=[
        {
            id:1,
            name:'Gas Station',
            value:'gas-station',
            icon:require('./../../assets/gas.png')
        },
        {
            id:2,
            name:'Restaurants',
            value:'restaurant',
            icon:require('./../../assets/food.png')
        },
        {
            id:3,
            name:'Cafe',
            value:'cafe',
            icon:require('./../../assets/cafe.png')
        }
    ]
    return (
      <View style={{marginTop:15}}>
        <Text 
        style={{fontSize:20,fontFamily:'raleway'}}
        > Select Top Category </Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={CategoryList}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity activeOpacity={0.9} onPress={()=>{
                    console.log(item.name)
                }}>
                    <CategoryItem Category={item}/>
                </TouchableOpacity>
            );
        }}
        
            
        
        />
      </View>
    )
}
