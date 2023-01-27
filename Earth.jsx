import React from 'react'
import './Earth.scss'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"

// components
import EarthGeometry from '../components/EarthGeometry/EarthGeometry'
import MoonHelper from '../components/MoonGeometry/MoonHelper'


const Earth = () => {

  return (
    <Canvas className="App" style={{width: innerWidth, height: innerHeight}} camera={{far: 1000, near: 0.01, fov: 75, position: [0, 0, 30], aspect: innerWidth/innerHeight, type: 'PerspectiveCamera'}}>
        <pointLight position={[25, 0, 30]}/>
        <OrbitControls makeDefault enableDamping={true} enablePan={false}/>
        <EarthGeometry/>
        <MoonHelper/>
    </Canvas>
  )
}

export default Earth