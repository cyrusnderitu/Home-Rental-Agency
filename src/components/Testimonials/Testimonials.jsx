import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="my-20 bg-orange-100 h-[400px]">
      <div className="grid text-white mob:grid-cols-1 md:grid-cols-2 h-full">
        <div className="left mob:px-10 md:px-18 lg:px-0 md:ml-16 lg:ml-24 text-black">
          <Swiper
            pagination={{
              dynamicBullets: true,
              bulletClass: `swiper-pagination-bullet`,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="cont mob:text-center md:text-left mob:text-[14px] md:text-[16px] lg:text-[16px]">
                <div>
                  <p className="mb-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Error recusandae labore optio alias, dolor architecto magni
                    repellendus fugiat eum unde, est, nostrum asperiores ipsum
                    molestias iusto voluptas numquam ullam exercitationem
                    perspiciatis odio! Dignissimos incidunt, consequuntur nam
                    error rerum iusto dolore!
                  </p>
                </div>
                <div className="user w-full flex mob:justify-center md:justify-start items-center gap-x-2 mt-4">
                  <img
                    src="https://www.safaricom.co.ke/sustainabilityreport_2019/wp-content/uploads/2019/09/2019-Safaricom-SBR-36@2x.png"
                    alt=""
                    className="w-[40px] h-[40px] rounded-[50%] bg-white"
                  />
                  <div className="mb-4">
                    <p className="name text-[#F4551E] font-semibold">Harry Wilson</p>
                    <span className="">Property Owner</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cont mob:text-center md:text-left mob:text-[14px] md:text-[16px] lg:text-[16px]">
                <div>
                  <p className="mb-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Error recusandae labore optio alias, dolor architecto magni
                    repellendus fugiat eum unde, est, nostrum asperiores ipsum
                    molestias iusto voluptas numquam ullam exercitationem
                    perspiciatis odio! Dignissimos incidunt, consequuntur nam
                    error rerum iusto dolore!
                  </p>
                </div>
                <div className="user w-full flex mob:justify-center md:justify-start items-center gap-x-2 mt-4">
                  <img
                    src="https://www.safaricom.co.ke/sustainabilityreport_2019/wp-content/uploads/2019/09/2019-Safaricom-SBR-36@2x.png"
                    alt=""
                    className="w-[40px] h-[40px] rounded-[50%] bg-white"
                  />
                  <div className="mb-4">
                    <p className="name text-[#F4551E] font-semibold">Harry Wilson</p>
                    <span className="">Property Owner</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cont mob:text-center md:text-left mob:text-[14px] md:text-[16px] lg:text-[16px]">
                <div>
                  <p className="mb-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Error recusandae labore optio alias, dolor architecto magni
                    repellendus fugiat eum unde, est, nostrum asperiores ipsum
                    molestias iusto voluptas numquam ullam exercitationem
                    perspiciatis odio! Dignissimos incidunt, consequuntur nam
                    error rerum iusto dolore!
                  </p>
                </div>
                <div className="user w-full flex mob:justify-center md:justify-start items-center gap-x-2 mt-4">
                  <img
                    src="https://www.safaricom.co.ke/sustainabilityreport_2019/wp-content/uploads/2019/09/2019-Safaricom-SBR-36@2x.png"
                    alt=""
                    className="w-[40px] h-[40px] rounded-[50%] bg-white"
                  />
                  <div className="mb-4">
                    <p className="name text-[#F4551E] font-semibold">Harry Wilson</p>
                    <span className="">Property Owner</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="right mob:h-[300px] md:h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qZxM7TkdNUA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
