import React, { useState } from "react";
import { useGeolocated } from "react-geolocated";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './Maps.css'
import { MapGet, MapPost } from "../services/mapsDataBase";



const Demo = () => {

    const [data, setData] = useState(null)

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    
    if(!isGeolocationAvailable){
        return (
            <div>Navegador não suporta a localização!</div>
            )
    } else if(!isGeolocationEnabled ) {
        return (
            <div>Localização negada.</div>
        )
    } else if(!!coords){
        MapPost(coords.latitude,coords.longitude)
        //setData(MapGet())
        console.log(data)
        return (
            <MapContainer className='Map' center={[coords.latitude,coords.longitude]} zoom={3} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[coords.latitude,coords.longitude]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        )
    } else {
        return (
            <div>Getting the location data&hellip; </div>
        )
    }
};


export default Demo;