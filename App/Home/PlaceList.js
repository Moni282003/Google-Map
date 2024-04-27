// Components/Home/PlaceList.js
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function PlaceList({ placeList }) {
  useEffect(() => {
    console.log(placeList);
  }, [placeList]); // Run this effect whenever placeList changes

  return (
    <View>
      <Text>Found {placeList.length} Places</Text>
    </View>
  );
}
