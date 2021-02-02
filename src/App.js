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
  // to be passed to Geography Selector Dropdown component
  const geoOptions = () => {
    const options = []
    // Use geos property in config object to populate options array
    return options; 
  };

  // Get GeoJSON via API if/when selectedGeo has been set
  const getGeoJSON = () => {}

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
          // MapContainer with nested TileLayer and GeoJSON components
        }
        {
          // Loader spinner will render if geography has been selected
          // but geoJSON has yet to be returned from API call

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
