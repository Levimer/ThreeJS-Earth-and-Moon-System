import { useLoader, useFrame } from '@react-three/fiber'
import React, {  useRef } from 'react'
import { TextureLoader } from 'three'

// maps
import MoonMap from "../../assets/moon.jpg"

const MoonGeometry = () => {

    const [colorMap] = useLoader(TextureLoader, [MoonMap])

    const meshRef = useRef()
    
    useFrame(({clock}) => {

      meshRef.current.rotation.y -= 0.001;

  })

  return (
    <>
    <mesh position={[0, 0, -90]} scale={0.5} ref={meshRef}>
        <sphereGeometry args={[15, 32, 16]} />
        <meshStandardMaterial map={colorMap} metalness={0.7} roughness={0.6}/>
    </mesh>
    </>
  )
}

export default MoonGeometry