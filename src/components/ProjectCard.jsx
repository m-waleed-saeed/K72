const ProjectCard = ({ image1, image2 }) => {
    return (
        <>
            <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-full rounded-none hover:rounded-[50px] overflow-hidden transition-all group">
                <img className="h-full w-full object-cover" src={image1} alt="Project preview" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <h2 className="font-[primary] text-xl lg:text-4xl border-4 pt-3 lg:pt-4 px-6 lg:px-8 text-white border-white rounded-full uppercase">
                        Voir le Projet
                    </h2>
                </div>
            </div>
            <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-full rounded-none hover:rounded-[50px] overflow-hidden transition-all group">
                <img className="h-full w-full object-cover" src={image2} alt="Project preview" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <h2 className="font-[primary] text-xl lg:text-4xl border-4 pt-3 lg:pt-4 px-6 lg:px-8 text-white border-white rounded-full uppercase">
                        Voir le Projet
                    </h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard