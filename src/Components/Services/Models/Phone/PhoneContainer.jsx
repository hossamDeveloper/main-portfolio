import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Phone } from './Phone'

const PhoneContainer = ({ onLoad }) => {
    useEffect(() => {
        onLoad?.()
    }, [onLoad])

    return (
        <div className="w-full h-full">
            <Canvas>
                <Suspense fallback={null}>
                    <Stage environment={'forest'} intensity={10}>
                        <Phone />
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                    <PerspectiveCamera makeDefault position={[3, .5, 5]} zoom={.7} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default PhoneContainer