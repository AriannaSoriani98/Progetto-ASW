import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapCenter: {
                lat: 44.070540,
                lng: 12.582155
            },
            text:""
        };
    }
    render() {
        return (
            <div id='googleMaps'>

                <Map
                    google={this.props.google}
                    initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                >
                    <Marker
                        position={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                        }}
                        text={
                            this.state.text = "Lido di Rimini"
                        }
                    />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDOEwfQ1fHVX357aBuKus6zW8eSgD5JmZw')
})(MapContainer)