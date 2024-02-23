

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const Banner = () => {

    return (
        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler ,  hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[31px] md:right-[51px] bottom-0 top-[460px] left-3  w-[40px] md:w-[50px] h-[30px] md:h-[40px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-4 bottom-0 top-[455px] w-[50x] md:w-[50px] h-[40px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
               <BiArrowBack className="rotate-180 text-sm md:text-lg" />

                    </div>
                )}
            >
                <div >
                    <img
                        src="/image.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />

                </div>

                <div>
                    <img
                        src="/imagee.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                </div>

                <div>
                    <img
                        src="/imageee.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                </div>

                <div >
                    <img
                        src="/imageeee.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />

                </div>
              
            </Carousel>
        </div>
    );
   

  
   
  };
  
  export default Banner;