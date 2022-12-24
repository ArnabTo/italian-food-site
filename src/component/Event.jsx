import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper"
import Event2 from "../assets/event_middle.png"
import Event1 from "../assets/event_left.png"
import Event3 from "../assets/event_right.png"
import Event4 from "../assets/Image1.png"
import Event5 from "../assets/Image2.png"
import Event6 from "../assets/Image3.png"

export default function Event() {
    return (
        <>
            <div className="event mb-4">
                <div className="event_Container">
                    <div className="event_Title mb-3" data-aos="fade-up">
                        <span data-aos="fade-up">
                            Discover
                            <h1> Upcomming Event</h1>
                        </span>
                        <p data-aos="fade-up"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tem por incididunt ut labore et dolor magna
                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commondo
                            viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper mb-4"
                    >
                        <SwiperSlide>
                            <img className="img-fluid" src={Event1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img-fluid" src={Event2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img-fluid" src={Event3} />
                        </SwiperSlide>
                    </Swiper>

                    <div className="food_Collage" data-aos="fade-up">
                        <div className="row">
                            <div className="col-6" data-aos="fade-up">
                                    <img className="tryout img-fluid" src={Event4} />    
                            </div>
                            <div className="col-6" data-aos="fade-up">
                                <img className="tryout img-fluid" src={Event5} />
                                <img className="tryout img-fluid" src={Event6} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}