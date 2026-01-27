import { useRef } from 'react';
import { useNavbar } from '../../context/Nav';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const NAV_LINKS = ['Projects', 'Agence', 'Contact', 'Blogs'];

const FullScreenNav = () => {
    const { navOpen, setNavOpen } = useNavbar();
    console.log('navOpen :>> ', navOpen);
    console.log('setNavOpen :>> ', setNavOpen);
    const container = useRef(null);

    // Context-safe animation logic
    useGSAP(() => {
        const tl = gsap.timeline({ paused: true });

        tl.to('.fullscreennav', { display: 'block', duration: 0 })
          .to('.stair', { height: '100%', stagger: 0.05, ease: 'power4.inOut' })
          .to('.link-item', { opacity: 1, rotateX: 0, stagger: 0.1, ease: 'power3.out' }, "-=0.3")
          .to('.nav-header', { opacity: 1 }, "-=0.5");

        navOpen ? tl.play() : tl.reverse();
    }, { scope: container, dependencies: [navOpen] });

    return (
        <div ref={container}>
            <div className='fullscreennav hidden fixed inset-0 text-white z-50 overflow-hidden'>
                
                {/* Background Stairs - Flexible Grid */}
                <div className='absolute inset-0 flex'>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className='stair h-0 w-full bg-black border-r border-white/5' />
                    ))}
                </div>

                {/* Content Layer */}
                <div className='relative z-10 h-full flex flex-col'>
                    {/* Header */}
                    <div className='nav-header opacity-0 flex justify-between p-4 items-center'>
                        <Logo className="w-24 fill-white" />
                        <button onClick={() => setNavOpen(false)} className='text-3xl md:text-4xl lg:text-6xl  transition-transform cursor-pointer'>
                            <i className="fa-solid fa-xmark"/>
                        </button>
                    </div>

                    <nav className='flex-1 flex flex-col justify-center'>
                        {NAV_LINKS.map((link) => (
                            <div key={link} className="link-item opacity-0 rotate-x-90 origin-top group relative border-t border-white/70 last:border-b">
                                <h1 className='py-2 text-5xl lg:text-[6vw] text-center uppercase font-[primary] leading-none'>
                                    {link}
                                </h1>
                                
                                <div className='absolute inset-0 bg-primary text-black opacity-0 group-hover:opacity-100 flex items-center overflow-hidden transition-opacity duration-300'>
                                    <Marquee text="Pour Tout voir" />
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

// Sub-components for cleaner code
const Marquee = ({ text }) => (
    <div className='flex whitespace-nowrap animate-marquee'>
        {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-between">
                <h2 className='text-5xl lg:text-[7vw] uppercase px-4'>{text}</h2>
                <img className='h-12 lg:h-24 w-32 lg:w-64 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
            </div>
        ))}
    </div>
);

const Logo = ({ className }) => (
    <svg className={className} viewBox="0 0 103 44"><path d="M35.144 8.448h23.546V0H35.144v8.448zM20.002 0L8.834 25.343h9.654L29.573 0h-9.571zM72.525.001v8.447h21.874v8.445h-21.87v2.63h-0.002v24.404h30.284v-8.448H80.936V25.344h13.464v-8.45h8.41V0h-30.284zM0 43.928h8.786V.006H0v43.922zM58.685 8.449L43.119 43.927h9.198l15.671-35.478h-9.303zM18.469 25.344l8.236 18.584h9.572l-8.109-18.59h-9.699z"/></svg>
);

export default FullScreenNav;