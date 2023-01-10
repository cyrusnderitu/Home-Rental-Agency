import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="my-20 bg-orange-100 h-[300px]">
      <div className="px-24 grid text-white grid-cols-2 h-full">
        <div className="left text-black">
          <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]}>
            <SwiperSlide>
              <div className="cont text-left">
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
                <div className="user flex items-center gap-x-4">
                  <img
                    src=""
                    alt=""
                    className="w-[40px] h-[40px] rounded-[50%] bg-white"
                  />
                  <div className="">
                    <p className="name">Joe Doe</p>
                    <span>Chief Finance Officer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cont text-left">
                <div>
                  <p className="mb-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus deserunt modi vero consequuntur dolorem quis
                    quasi repudiandae, excepturi suscipit similique, voluptates
                    earum veniam. Officiis blanditiis odio maxime voluptatem
                    quisquam ipsum nulla, labore vitae tempore accusantium.
                    Cupiditate esse harum recusandae omnis.
                  </p>
                </div>
                <div className="user flex items-center gap-x-4">
                  <img
                    src=""
                    alt=""
                    className="w-[40px] h-[40px] rounded-[50%] bg-white"
                  />
                  <div>
                    <p className="name">Joe Doe</p>
                    <span>Chief Finance Officer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="right bg-slate-400">
          <div className="right_c w-full h-full">
            <h1>This the right side of the Testimonials section</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
