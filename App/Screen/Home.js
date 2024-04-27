import React, { Component, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../Home/Header'
import GoogleMapView from '../Home/GoogleMapView'
import Category from '../Home/Category'
import GlobalApi from '../Services/GlobalApi'
import PlaceList from '../Home/PlaceList'
export default function Home() {
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    getNearBySearchPlace();
  }, []);

  const getNearBySearchPlace = () => {
    GlobalApi.nearByPlace()
      .then(resp => {
        setPlaceList(resp.data.results);
        console.log("Places Retrieved:", resp.data); // Log the response data
      })
      .catch(error => {
        console.error("Error fetching places:", error);
      });
  };

  console.log("Current placeList:", placeList); // Log placeList before rendering PlaceList

  return (
    <View style={{ padding: 20 }}>
      <Header />
      <GoogleMapView />
      <Category />
      <PlaceList placeList={placeList} />
    </View>
  );
}