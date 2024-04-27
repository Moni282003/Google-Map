import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Fav from '../Screen/Fav';
import Search from '../Screen/Search';
import Profile from '../Screen/Profile';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator  screenOptions={{
            headerShown: false,
        }}>
        <Tab.Screen
        options={{
            tabBarLabel:"Home",
            tabBarIcon:({color,size})=>(
                <Entypo name="home" size={24} color="black" />
            )
        }}
        name="Home" component={Home} />
        <Tab.Screen 
         options={{
            tabBarLabel:"Fav",
            tabBarIcon:({color,size})=>(
            <MaterialIcons name="favorite" size={24} color="black" />            )
        }}
        name="Fav" component={Fav} />
        <Tab.Screen
         options={{
            tabBarLabel:"Search",
            tabBarIcon:({color,size})=>(
            <FontAwesome name="search" size={24} color="black" />
            )
        }}
        name="Search" component={Search} />
        <Tab.Screen
         options={{
            tabBarLabel:"Profile",
            tabBarIcon:({color,size})=>(
                <AntDesign name="profile" size={24} color="black" />
            )
        }}
         name="Profile" component={Profile} />
      </Tab.Navigator>
    )
}
