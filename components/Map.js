import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;