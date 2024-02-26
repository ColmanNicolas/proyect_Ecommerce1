import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { faker } from "@faker-js/faker";





import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../components/clasesGenerales.css'


const About = () => {



    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <div className="my-auto w-75 mx-auto ">
                    <Swiper modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={4}
                        navigation
                        scrollbar={{ draggable: true }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, el) => {
                            return (
                                <SwiperSlide className="d-flex justify-content-center">
                                    <div>
                                        <img style={{ width: "250px" }} src={faker.image.urlPicsumPhotos()} alt="" />
                                        <p className="fs-5 text-white text-center">{faker.location.country()}</p>
                                    </div>

                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            <Footer />
            </div>
        </>
    );
};
export default About;