import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Mug } from './Mug'
const MugContainer = () => {
    return (
        <>
            <Canvas>
                <Suspense fallback={'loading.....'}>
                    <Stage environment={'forest'} intensity={.1}>
                        <Mug />
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                    <PerspectiveCamera makeDefault position={[3, 1, 5]} zoom={.6} />
                </Suspense>
            </Canvas>
        </>
    )
}

export default MugContainer