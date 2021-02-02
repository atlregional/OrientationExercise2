import React, { 
  useState, 
  useEffect 
} from 'react';
import { 
  MapContainer, 
  TileLayer, 
  GeoJSON
} from 'react-leaflet';
import { Dropdown } from 'semantic-ui-react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import config from './config.json';
import './App.css';

const App = () => {
  
  const [ selectedGeo, setSelectedGeo] = useState();
  const [ geoJSON, setGeoJSON ] = useState();

  // Function which returns an array of geography options
  // to be passed to DropDown component
  const geoOptions = () => {
    const options = config.geos.map(geo => (
      {
        text: geo.name,
        value: geo.url,
        key: `geo-option-${geo.name.split(' ').join('-')}`
      }
    ));
    console.log(options)
    // get geos from config object to populate options array
    return options; 
  };

  // Get GeoJSON
  const getGeoJSON = () => selectedGeo
  ? axios.get(selectedGeo.value)
    .then(res => {
      console.log(selectedGeo);

      setGeoJSON(res.data)
    })
    .catch(err => console.log(err))
  : null;

  useEffect(getGeoJSON, [selectedGeo]);

  return (
    <div className='App'>
      <div className='selector-container'>
        {
          // Geography Selector Dropdown
        }
        <Dropdown
          selection
          fluid
          placeholder='Select Geography'
          options={geoOptions()}
          onChange={(e,data) => {
            setGeoJSON();
            setSelectedGeo(data)
          }}
        />

      </div>
      <div className='map-container'>
        {
          // Map
        }
        <MapContainer
          center={config.mapcontainer.center} 
          zoom={config.mapcontainer.zoom} 
        >
          <TileLayer
            url={config.tilelayer.url}
            attribution={config.tilelayer.attribution}
          />
          {
            geoJSON
            ?  <GeoJSON
                key={`layer-${selectedGeo.value}`} 
                data={geoJSON}
              />
            : null

          }

        </MapContainer>
        {
          selectedGeo && 
          !geoJSON
          ? <div id='loader'>
              <Loader color='#DC1C13' type='Circles' />
            </div>
          : null
          }

      </div>
    </div>
  );
}

export default App;
