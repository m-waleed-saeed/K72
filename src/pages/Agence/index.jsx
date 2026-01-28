import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import img1 from '../../assets/1.jpeg'
import img2 from '../../assets/2.jpeg'
import img3 from '../../assets/3.jpeg'
import img4 from '../../assets/4.jpeg'
import img5 from '../../assets/5.jpeg'
import img6 from '../../assets/6.jpeg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'

const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8];

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDevRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(imageDevRef.current, {
      scrollTrigger: {
        trigger: imageDevRef.current,
        start: "top 15%",
        end: "top -100%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          let index = self.progress < 1 ? Math.floor(self.progress * imageArray.length) : imageArray.length - 1;
          imageRef.current.src = imageArray[index];
        },
      },
    });
  }, []);

  return (
    <div>
      <div className="section-1 relative py-1">
        <div ref={imageDevRef} className="absolute top-28 left-1/2 -translate-x-1/2 sm:top-32 lg:top-36 lg:left-[30vw] lg:translate-x-0 w-[40vw] h-[55vw] sm:w-[30vw] sm:h-[40vw] lg:w-[15vw] lg:h-[20vw] rounded-3xl overflow-hidden bg-amber-900">
          <img ref={imageRef} src={img6} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative font-[primary]">
          <div className="mt-[50vh] sm:mt-[55vh]">
            <h1 className="text-center uppercase text-[22vw] leading-[20vw] sm:text-[18vw] sm:leading-[16vw] lg:text-[20vw] lg:leading-[18vw]">
              Soixan7<br />Douze
            </h1>
          </div>
          <div className="mt-12 px-6 sm:px-12 lg:pl-[40%] lg:pr-16">
            <p className="text-lg sm:text-2xl lg:text-4xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Norem ipsum dolor sit amet consectetur adipisicing. Esse, veniam cum iste earum deserunt debitis quam vitae dolore nihil tempore. Rem hic tempora, excepturi corrupti autem aliquid architecto laudantium dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, enim possimus.</p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen" />
    </div>
  );
};

export default Agence;