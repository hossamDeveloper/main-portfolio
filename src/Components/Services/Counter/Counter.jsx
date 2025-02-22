import { animate } from 'motion'
import { useInView } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

const Counter = ({ from, to, text }) => {
    const [count, setCount] = useState(from)
    const ref = useRef()
    const isview = useInView(ref)

    useEffect(() => {
        const animation = animate(from, to, {
            duration: 2,
            ease: 'easeInOut',
            onUpdate: (prev) => {
                setCount(Math.floor(prev))
            }

        })


        return () => {
            animation.cancel()
        }
    }, [isview])
    return (
        <>
            <div className='flex flex-col' ref={ref}>
                <h4 className='text-4xl font-medium'>{count} <span className='text-[#da4d62]'>+</span></h4>
                <p className='text-sm text-gray-400'>{text}</p>
            </div>


        </>
    )
}

export default Counter