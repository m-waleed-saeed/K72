import { useRef, useState } from "react"
import { useNavbar } from "../../context/Nav"

const Navbar = () => {
    const navGreenRef = useRef(null)
    const { navColor, setNavOpen } = useNavbar()
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex items-start justify-between">
            <div className="p-3 w-28 sm:w-32 lg:w-36">
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                    <path fill={navColor} fillRule="evenodd" d="M35.144 8.448h23.546V0H35.144v8.448zM20.002 0L8.834 25.343h9.654L29.573 0h-9.571zM72.525.001v8.447h21.874v8.445h-21.87v2.63h-0.002v24.404h30.284v-8.448H80.936V25.344h13.464v-8.45h8.41V0h-30.284zM0 43.928h8.786V.006H0v43.922zM58.685 8.449L43.119 43.927h9.198l15.671-35.478h-9.303zM18.469 25.344l8.236 18.584h9.572l-8.109-18.59h-9.699z" />
                </svg>
            </div>

            <div onClick={() => setNavOpen(true)} onMouseEnter={() => { setIsHover(true); navGreenRef.current.style.height = "100%" }} onMouseLeave={() => { setIsHover(false); navGreenRef.current.style.height = "0%" }} className="relative cursor-pointer bg-black h-10 w-14 sm:w-20 md:w-28 lg:w-[17vw]">
                <div ref={navGreenRef} className="absolute top-0 left-0 h-0 w-full bg-primary transition-all duration-300" />
                <div className="relative h-full flex flex-col justify-center items-end gap-1.5 px-4 sm:px-6 lg:px-8">
                    <div className={`h-0.5 transition-colors duration-300 w-8 sm:w-14 ${isHover ? "bg-black" : "bg-white"}`} />
                    <div className={`h-0.5 transition-colors duration-300 w-5 sm:w-9 ${isHover ? "bg-black" : "bg-white"}`} />
                </div>
            </div>
        </div>
    )
}

export default Navbar