import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import { Link } from 'react-router-dom'

export class Map extends Component {
    mapContainer = React.createRef();
    map = null;

    componentDidMount() {
        mapboxgl.accessToken =
            "pk.eyJ1Ijoibmlja29saXZlcjY1IiwiYSI6ImNrYzhvdzF4ejExb3AyeWxqeG1xM3Q0NXcifQ.DCsfzexnCYuBQvnY5IAt8w";
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [82.872258, 55.01], // LED
            zoom: 11,
        });
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return (
            <>
            <nav>
                <Link to="/"><button>Home page</button></Link>
                <Link to="/map"><button>Map</button></Link>
                <Link to="/profile"><button>Profile</button></Link>
            </nav>           
            <div className="map-wrapper">
                <div data-testid="map" className="map" ref={this.mapContainer} />
            </div>
            </>
        );
    }

}