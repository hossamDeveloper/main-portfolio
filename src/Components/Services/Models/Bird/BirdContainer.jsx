import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Bird } from './Bird'

const BirdContainer = () => {
    return (
        <>
            <Canvas>
                <Suspense fallback={'loading.....'}>
                    <Stage environment={'forest'} intensity={.1}>
                        <Bird />
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                    <PerspectiveCamera makeDefault position={[3, 1, 5]} zoom={.7} />
                </Suspense>
            </Canvas>
        </>
        )
}

export default BirdContainer