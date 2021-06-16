import React from "react";

import { LatLngExpression, Map } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Box, Container } from "@material-ui/core";
import { Button } from "@material-ui/core";

const position = [51.505, -0.09] as LatLngExpression;

const Demo01 = () => {
    const mapRef = React.useRef<any>(null);

    const zoomIn = () => {
        // TODO : implements zoom in
    };

    return (
        <Container>
            <Box my={2}>
                <Button variant="contained" color="primary" onClick={zoomIn}>
                    Zoom in
                </Button>
            </Box>
            <MapContainer
                whenCreated={(map: Map) => (mapRef.current = map)}
                center={[50.85156, 4.3639482]}
                zoom={14}
                style={{ height: "80vh", width: "80vw" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://sm.mapstack.stamen.com/toner-lite/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    );
};

export default Demo01;
