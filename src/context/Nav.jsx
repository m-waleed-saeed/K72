import { createContext, useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const NavbarContext = createContext(null)

export const NavProvider = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false)
    const [navColor, setNavColor] = useState('white')

    const locate = useLocation().pathname;
    useEffect(() => {
        if (locate == '/projects' || locate == '/agence') {
            setNavColor('black')
        } else {
            setNavColor('white')
        }
    }, [locate])

    return (
        <>
            <NavbarContext.Provider value={{ navOpen, setNavOpen, navColor, setNavColor }}>
                {children}
            </NavbarContext.Provider>
        </>
    )
}

export const useNavbar = () => useContext(NavbarContext)