import AudioPlayer from "../../components/AudioPlayer"
import { Container } from "../../container/container"
import { Swiper, SwiperSlide } from 'swiper/react';
import Cat1 from '../../assets/Cat1.png'
import Cat2 from '../../assets/Cat2.png'
import Cat3 from '../../assets/Cat3.png'
import Cat4 from '../../assets/Cat4.png'
import Cat5 from '../../assets/Cat5.png'
import Cat6 from '../../assets/Cat6.png'

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Home = () => {
    return (
        <>
            <div className="pb-40 pt-10">
                <Container>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={Cat1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat4} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat6} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat4} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Cat6} />
                        </SwiperSlide>
                    </Swiper>
                    <div className="bg-tertiary p-2 rounded-2xl mt-5">
                        <p className="text-neutral-200 font-mono">
                            Marmalad brought so much joy,
                            love, and a special warmth into our lives.
                            She left an indelible mark on our hearts with every
                            moment she spent with us. Marmalade's gentle gaze, cheerful manners,
                            and kindness will always be remembered.
                        </p>
                    </div>
                    <AudioPlayer />
                </Container>
            </div>
        </>
    )
}

export default Home