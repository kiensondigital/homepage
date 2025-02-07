import React, { useRef } from 'react';
import '../styles/Hero.css'

import Globe from 'react-globe.gl';
import * as THREE from 'three';
import * as topojson from 'topojson-client';

import landTopology from '../assets/land_10m.json';
import pointsData from '../assets/random-locations.json';
import texture from '../assets/texture.jpg';

import Navbar from './Navbar'

const min = 1000;
const max = 4000;

const sliceData = pointsData.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(20, 50); // Reduced slice
const arcsData = sliceData.map(() => {
  const randStart = Math.floor(Math.random() * sliceData.length);
  const randEnd = Math.floor(Math.random() * sliceData.length);
  const randTime = Math.floor(Math.random() * (max - min + 1) + min);
  return {
    startLat: sliceData[randStart].lat,
    startLng: sliceData[randStart].lng,
    endLat: sliceData[randEnd].lat,
    endLng: sliceData[randEnd].lng,
    time: randTime,
    color: ['#ffffff00', '#faf7e6', '#ffffff00'],
  };
});

const MyGlobe = () => {
  const globeRef = useRef(null);

  const globeReady = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().enableZoom = false;

      globeRef.current.pointOfView({
        lat: 19.054339351561637,
        lng: -50.421161072148465,
        altitude: 2.5, // Smaller globe
      });
    }
  };

  return (
    <div className="cursor-move">
      <Globe
        ref={globeRef}
        onGlobeReady={globeReady}
        backgroundColor="black"
        rendererConfig={{ antialias: false, alpha: false }} // Performance tweaks
        globeMaterial={
          new THREE.MeshPhongMaterial({
            color: '#1a2033',
            opacity: 0.95,
            transparent: true,
          })
        }
        atmosphereColor="#5784a7"
        atmosphereAltitude={0.3}
        pointsData={sliceData} // Reduced points
        pointAltitude={0.01}
        pointRadius={0.2}
        pointResolution={5}
        pointColor={() => '#eed31f'}
        arcsData={arcsData} // Reduced arcs
        arcAltitudeAutoScale={0.3}
        arcColor="color"
        arcStroke={0.5}
        arcDashGap={2}
        arcDashAnimateTime="time"
        polygonsData={topojson.feature(landTopology, landTopology.objects.land).features}
        polygonSideColor={() => '#00000000'}
        polygonCapMaterial={
          new THREE.MeshPhongMaterial({
            color: '#49ac8f',
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load(texture),
          })
        }
        polygonAltitude={0.01}
        customLayerData={[...Array(100).keys()].map(() => ({
          lat: (Math.random() - 1) * 360,
          lng: (Math.random() - 1) * 360,
          altitude: Math.random() * 1.5,
          size: Math.random() * 0.3,
          color: '#faadfd',
        }))}
        customThreeObject={(sliceData) => {
          const { size, color } = sliceData;
          return new THREE.Mesh(new THREE.SphereGeometry(size), new THREE.MeshBasicMaterial({ color }));
        }}
        customThreeObjectUpdate={(obj, sliceData) => {
          const { lat, lng, altitude } = sliceData;
          return Object.assign(obj.position, globeRef.current?.getCoords(lat, lng, altitude));
        }}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="plannet-section">
      <Navbar />
      <div className="plannet-banner">
        <div className="plannet-texbox">
          <h1> KienSon </h1>
          <h2> Digital </h2>
        </div>
        <MyGlobe />
      </div>
    </section>
  );
};

export default Hero;
