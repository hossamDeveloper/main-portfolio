import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Mug } from './Mug'

const MugContainer = ({ onLoad }) => {
    useEffect(() => {
        onLoad?.()
    }, [onLoad])

    return (
        <div className="w-full h-full">
            <Canvas>
                <Suspense fallback={null}>
                    <Stage environment={'forest'} intensity={.1}>
                        <Mug />
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                    <PerspectiveCamera makeDefault position={[3, 1, 5]} zoom={.6} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default MugContainer