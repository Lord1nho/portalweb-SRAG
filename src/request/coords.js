import React from "react";
import { useGeolocated } from "react-geolocated";

const Demo = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Navegador não suporta a localização!</div>
    ) : !isGeolocationEnabled ? (
        <div>Localização negada.</div>
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    <td>Sua localização:</td>
                </tr>
                <tr>
                    
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};


export default Demo;