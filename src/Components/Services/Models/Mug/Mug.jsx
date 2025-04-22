import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Mug(props) {
  const { nodes, materials } = useGLTF('./assets/mug.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-6.56, -15, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.033}>
        <mesh geometry={nodes.Mug_M_Mug_0.geometry} material={materials.M_Mug} rotation={[-Math.PI, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('./src/assets/mug.glb')
