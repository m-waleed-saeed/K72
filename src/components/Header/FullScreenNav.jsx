import { useRef } from 'react'
import { useNavbar } from '../../context/Nav'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Marquee from './Marquee'

const NAV_LINKS = ['Projects', 'Agence', 'Contact', 'Blogs']

const NavItem = ({ text }) => (
    <div className="link-item opacity-0 rotate-x-90 origin-top group relative border-t border-white/70 last:border-b overflow-hidden">
        <h1 className="py-3 text-5xl lg:text-[6vw] text-center uppercase font-[primary] leading-none">
            {text}
        </h1>
        <div className="absolute inset-0 bg-primary text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
            <Marquee />
        </div>
    </div>
)

const FullScreenNav = () => {
    const { navOpen, setNavOpen } = useNavbar()
    const container = useRef(null)
    const tl = useRef(null) // ✅ IMPORTANT

    useGSAP(
        () => {
            tl.current = gsap.timeline({
                paused: true,
                onReverseComplete: () => {
                    gsap.set('.fullscreennav', { display: 'none' }) 
                }
            })

            tl.current
                .set('.fullscreennav', { display: 'block' })
                .fromTo(
                    '.stair',
                    { height: 0 },
                    { height: '100%', stagger: 0.06, ease: 'power4.inOut' }
                )
                .fromTo(
                    '.link-item',
                    { opacity: 0, rotateX: -90 },
                    { opacity: 1, rotateX: 0, stagger: 0.12, ease: 'power3.out' },
                    '-=0.4'
                )
                .fromTo('.nav-header', { opacity: 0 }, { opacity: 1 }, '-=0.6')
        },
        { scope: container }
    )

    useGSAP(() => {
        if (!tl.current) return
        navOpen ? tl.current.play() : tl.current.reverse()
    }, [navOpen])

    return (
        <div ref={container}>
            <div className="fullscreennav hidden fixed inset-0 z-50 text-white overflow-hidden">
                <div className="absolute inset-0 flex">
                    {[...Array(5)].map((_, i) => (<div key={i} className="stair h-0 w-full bg-black" />))}
                </div>

                <div className="relative z-10 h-full flex flex-col">
                    <div className="nav-header opacity-0 flex justify-between items-center p-4">
                        <svg className="w-24 fill-white" viewBox="0 0 103 44">
                            <path d="M35.144 8.448h23.546V0H35.144v8.448zM20.002 0L8.834 25.343h9.654L29.573 0h-9.571zM72.525.001v8.447h21.874v8.445h-21.87v2.63h-0.002v24.404h30.284v-8.448H80.936V25.344h13.464v-8.45h8.41V0h-30.284zM0 43.928h8.786V.006H0v43.922zM58.685 8.449L43.119 43.927h9.198l15.671-35.478h-9.303zM18.469 25.344l8.236 18.584h9.572l-8.109-18.59h-9.699z" />
                        </svg>
                        <button onClick={() => setNavOpen(false)} className="text-4xl lg:text-6xl cursor-pointer">
                            <i className="fa-solid fa-xmark" />
                        </button>
                    </div>

                    <nav className="flex-1 flex flex-col justify-center">
                        {NAV_LINKS.map(link => (<NavItem key={link} text={link} />))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav