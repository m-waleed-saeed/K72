import ProjectCard from '@/components/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Footer from '@/components/Footer'

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger)

  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg'
    }
  ]

  useGSAP(() => {
    gsap.from('.hero', {
      height: '100px',
      stagger: { amount: 0.4 },
      scrollTrigger: {
        trigger: '.all',
        start: 'top 90%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <>
      <div>
        <div className="pt-[35vh] px-2">
          <h2 className="font-[primary] text-[12vw] lg:text-[9.5vw] uppercase">Projects</h2>
        </div>
        <div className="all lg:-mt-10">
          {projects.map((project, i) => (
            <div key={i} className="hero w-full h-[30vh] lg:h-[50vh] mb-2 flex flex-col lg:flex-row gap-2 lg:gap-4 px-2">
              <ProjectCard image1={project.image1} image2={project.image2} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects