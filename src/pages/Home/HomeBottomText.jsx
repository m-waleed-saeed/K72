import { Link } from "react-router-dom"

const HomeBottomText = () => {
    const btnClasses = `uppercase rounded-full border-2 border-white text-[7vw] leading-[6vw] px-5 pt-1 sm:text-[5vw] sm:leading-[4.5vw] sm:px-8 md:text-[4vw] md:leading-[3.5vw] md:px-10 lg:text-[3vw] lg:leading-[2.8vw] lg:px-12 hover:border-[#d3fd50] hover:text-primary transition-all duration-300`;

    return (
        <div className="font-[primary] flex justify-center items-center gap-2 flex-wrap">
            <Link to="projects" className={btnClasses}>Projects</Link>
            <Link to="agence" className={btnClasses}>Agence</Link>
        </div>
    )
}

export default HomeBottomText