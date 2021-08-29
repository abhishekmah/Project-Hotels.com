import React from 'react'
import GoogleMap from '../../Components/Map/GoogleMap'

const GoogleMapShw = () => {
    return (
        <div>
            <div style={{width: "70%",height: "600px",marginRight: "20%", marginTop: "20px"}}>
            <h1 style={{ marginLeft: "40%", textAlign: "center", color: "blue", fontSize: "50px"}}>Hotel Location</h1>
            <GoogleMap/>
            </div>
        </div>
    )
}

export default GoogleMapShw
