import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Phone } from './Phone'

const PhoneContainer = () => {
    return (
        <>
            <Canvas>
                <Suspense fallback={'loading.....'}>
                    <Stage environment={'forest'} intensity={10}>
                        <Phone />
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                    <PerspectiveCamera makeDefault position={[3, .5, 5]} zoom={.7} />
                </Suspense>
            </Canvas>
        </>
    )
}

export default PhoneContainer