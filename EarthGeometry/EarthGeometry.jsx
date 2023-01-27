import { Sphere, Stars } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'

// maps
import EarthDayMap from "../../assets/8k_earth_daymap.jpg"
import EarthNormalMap from "../../assets/8k_earth_normal_map.jpg"
import EarthSpecularMap from "../../assets/8k_earth_specular_map.jpg"
import EarthCloudMap from "../../assets/8k_earth_clouds.jpg"

const EarthGeometry = () => {

    const [colorMap, normalMap, specularMap, cloudMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap])

    const colorRef = useRef()
    const cloudRef = useRef()

    useFrame(({clock}) => {
        const clock2 = clock.getElapsedTime()

        colorRef.current.rotation.y += 0.001;
        cloudRef.current.rotation.y += 0.001;
    })

  return (
    <>
    <Stars radius={300} depth={60} count={7000} factor={7} saturation={0} fade={true} />
    <mesh ref={colorRef}>
        <sphereGeometry args={[15, 32, 16]} />
        <meshStandardMaterial map={colorMap} metalness={0.7} roughness={0.6}/>
    </mesh>
    <mesh ref={cloudRef}>
        <sphereGeometry args={[15.1, 32, 16]} />
        <meshStandardMaterial map={cloudMap} opacity={0.4} transparent={true}/>
    </mesh>
    </>
    
  )
}

export default EarthGeometry