import { Dimensions, View,Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useContext, useEffect, useState } from 'react';
import { UserLocationContext } from '../Context/UserLocationContext';

export default function GoogleMapView() {

  const [mapView,setMpView]=useState({
    latitude: 37.78825, 
    longitude: -122.4324, 
    latitudeDelta: 0.0922, 
    longitudeDelta: 0.0421, 
  });
  const {location,setLocation}=useContext(UserLocationContext)
  // useEffect(()=>{
  //   if(location){
  //     setMpView({
  //   latitude: location.coords.latitude, 
  //   longitude: location.coords.longitude, 
  //   latitudeDelta: 0.0522, 
  //   longitudeDelta: 0.0421, 
  //     })
  //   }


  // },[])
  return (
    <View style={{marginTop:20}}>    
      <Text
      style={{fontSize:20,marginBottom:10,fontWeight:"600"}}
      >Top near by places</Text>
      
      <View style={{ marginTop: 20, borderRadius: 15, overflow: 'hidden' }}>
      <MapView 
        showsUserLocation={true} 
        showsTraffic={true}
        style={{
          width: Dimensions.get('screen').width * 0.89,
          height: Dimensions.get('screen').height * 0.23,
        }}
        region={mapView}
      >
        <Marker title='You' 
        coordinate={mapView}
        ></Marker>
      </MapView>
    </View></View>

  );
}
