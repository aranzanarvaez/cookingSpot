import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps"

export default class Maps extends Component {
    render(){
        return(
            <div className="container">
                <GoogleMaps
                    apiKey={"AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik"}
                    style={{height: "500px", width: "370px", overflow: "visible"}}
                    zoom={10}
                    center={{
                        lat:19.2842081,
                        lng: -99.1560531,
                    }}
                    markers={[
                        {lat:19.2842081 ,lng: -99.1560531},
                        {lat:19.2850125 ,lng: -99.1413888},
                        {lat:19.2850125 ,lng: -99.1413888},
                        {lat:19.2849917 ,lng: -99.1427951},
                        {lat:19.2853439 ,lng: -99.141588},
                    ]}
                />
            </div>
        );
        }
}
