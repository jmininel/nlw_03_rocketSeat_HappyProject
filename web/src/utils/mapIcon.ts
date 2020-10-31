import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-maker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
     iconSize: [150, 168],
     iconAnchor: [-150, 90],
     popupAnchor: [170, 2]
  })

  export default mapIcon;