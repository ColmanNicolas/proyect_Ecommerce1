import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { faker } from "@faker-js/faker";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../components/clasesGenerales.css'


const About = () => {

    

    return (
        <>
            <Navbar />
            <div className="mt-5">
                <Swiper modules={[EffectFade,Navigation, Pagination, Scrollbar, A11y]} effect="fade"
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}>
                    {[1, 2, 3,4,5,6,7,8,9,10].map((i, el) => {
                        return( 
                        <SwiperSlide key={faker.string.uuid()}>
                            <div>
                                    <img src={faker.image.urlPicsumPhotos()} alt="" />
                                    <p>{faker.person.fullName()}</p>
                            </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <Footer />
        </>
    );
};
export default About;