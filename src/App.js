import GoogleMaps from "simple-react-google-maps"
import React, { useEffect, useState } from "react";
import Axios from "axios";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Header from './components/Header';
import Mapa from "./components/Map";
import Buscar from "./components/Buscar"
import Menu from "./components/Menu";
import Opciones from "./components/Opciones";





function App() {


  const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=e0bdc9565d104e2ea5a80893da61d2be&query=${searchQuery}';
  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);

    
  };

 
  return (
    
    <div className="App bg-light mb-5">
      <Header />
      <Buscar />
      <Opciones />
 
      <div>
        <Mapa />
      <GoogleMaps
        apiKey={"AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik"}
        style={{height: "400px", width: "100%"}}
        zoom={15}
        center={{lat:19.28433061394175,
          lng: -99.1360138043187}}
          markers={[
            {lat:19.284373283355894 ,lng: -99.13855739113598}, 
            {lat:19.28577078662088 ,lng: -99.13788148578917},
            {lat:19.28966973885299 ,lng: -99.13075930492715}, 
            {lat:19.285791243556794 ,lng: -99.13088702246479}, 
            {lat:19.290201338070663 ,lng: -99.13614734811247},
        ]}
      />
      
      </div>
      
     
    </div>
  );
}

export default App;
