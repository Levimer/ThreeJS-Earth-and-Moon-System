import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

import MoonGeometry from './MoonGeometry';


const MoonHelper = () => {

    const meshRef = useRef()
    
    useFrame(({clock}) => {

      meshRef.current.rotation.y -= 0.001;
  })

  return (
    <>
    <mesh position={[0, 0, 0]} scale={0.5} ref={meshRef}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color={'red'}/>

        <MoonGeometry/>
    </mesh>
    </>
  )
}

export default MoonHelper