import React from "react";
import { GoogleMap, LoadScript, Marker, Polygon } from "@react-google-maps/api";

const Map = () => {
//   const mapContainerStyle = {
//     width: "100%",
//     height: "100%",
//   };

//   const center = {
//     lat: 18.5793, // Blue Ridge Town Pune (latitude)
//     lng: 73.7708, // Blue Ridge Town Pune (longitude)
//   };

//   const locations = [
//     {
//       name: "Hirabaug, Surat",
//       position: { lat: 18.5793, lng: 73.7708 },
//     }

//   ];

//   const boundaryPath = [
//     { lat: 18.5800, lng: 73.7700 },
//     { lat: 18.5780, lng: 73.7710 },
//     { lat: 18.5770, lng: 73.7690 },
//   ];

  return (
    <div className="h-screen w-full bg-[#eeeeee] flex justify-center items-center py-4 ">
      <div className="w-10/12 h-full rounded-lg ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29745.760601435042!2d72.92120674957229!3d21.26275447131786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0469b3305e691%3A0x2ede4b8a039942d2!2sKamrej%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1731906678482!5m2!1sen!2sus" width="100%" height="700" style={{border:10}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            {/* Add Markers */}
            {/* {locations.map((location, index) => (
              <Marker
                key={index}
                position={location.position}
                title={location.name}
              />
            ))}

            <Polygon
              paths={boundaryPath}
              options={{
                fillColor: "#FF0000",
                fillOpacity: 0.2,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            /> */}
      </div>
    </div>
  );
};

export default Map;

