"use client"

import { useAnimate } from "motion/react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button" // Assuming Button is a ShadCN component

export default function ColorInterpolationButton() {
    const [motionRef, animate] = useAnimate()

    useEffect(() => {
        const motionElement = motionRef.current

        const motionAnimation = animate(
            motionElement,
            { backgroundColor: ["#f5f5ed", "#e8f9f9"] },
            {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
            }
        )

        return () => {
            motionAnimation.cancel()
        }
    }, [animate, motionRef])

    return (
        <Button className='bg-primary z-5 cursor-pointer group' variant="outline" size="sm" ref={motionRef}>
            Hablemos
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32.7 32.9" className="ml-2 h-3.5 w-3.5">
                <path style={{ fill: '#1ac165', fillRule: 'evenodd' }} d="M24.1,19.7c-.4-.2-2.4-1.3-2.7-1.4-.4-.2-.6-.2-.9.2-.3.4-1.1,1.3-1.4,1.6-.2.3-.5.3-.9,0-.4-.2-1.7-.7-3.2-2.2-1.2-1.1-1.9-2.5-2.2-2.9-.2-.4,0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3,0-.5,0-.7,0-.2-.8-2.3-1.1-3.1-.3-.8-.7-.7-.9-.7-.2,0-.5,0-.8,0-.3,0-.7,0-1.1.5-.4.4-1.5,1.3-1.6,3.4,0,2,1.3,4,1.5,4.3.2.3,2.7,4.6,6.8,6.4,4.1,1.8,4.1,1.2,4.9,1.2.8,0,2.5-.9,2.8-1.8.4-.9.4-1.8.3-1.9,0-.2-.4-.3-.8-.5h0ZM16.6,29.4c-2.7,0-5.2-.8-7.3-2.2l-5.1,1.6,1.7-5c-1.6-2.2-2.5-4.9-2.5-7.8,0-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3-6,13.3-13.3,13.3h0ZM16.6,0C7.8,0,.6,7.2.6,16s.8,5.9,2.3,8.3l-2.9,8.6,8.9-2.8c2.3,1.3,4.9,2,7.7,2,8.9,0,16-7.2,16-16S25.5,0,16.6,0h0Z"/>
            </svg>
        </Button>
    )
}
