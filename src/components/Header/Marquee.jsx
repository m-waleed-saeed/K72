import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Marquee = () => {
    const track = useRef(null)
    const tween = useRef(null)

    useGSAP(() => {
        tween.current = gsap.to(track.current, {
            xPercent: -50,
            duration: 6,
            ease: 'linear',
            repeat: -1,
        })
    }, [])

    return (
        <div className="w-full overflow-hidden" onMouseEnter={() => tween.current.play()} onMouseLeave={() => tween.current.pause()}>
            <div ref={track} className="flex whitespace-nowrap items-center">
                <div className="flex items-center gap-8 px-8">
                    <h2 className="text-5xl lg:text-[7vw] uppercase">Pour Tout voir</h2>
                    <img className="h-12 lg:h-24 w-32 lg:w-64 object-cover rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                    <h2 className="text-5xl lg:text-[7vw] uppercase">Pour Tout voir</h2>
                    <img className="h-12 lg:h-24 w-32 lg:w-64 object-cover rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Marquee