import Headings from "../../utilities/Headings";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  return (
    <section className="w-full mt-16">
      <Headings title="Review" sub="What Our Client Say" />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full p-16 text-center bg-[#141414] mt-5">
        <SwiperSlide className="flex justify-center items-center p-10">
          <div>
            <h1 className="text-5xl text-white">
              “Everything about our experience was amazing, from pulling up to the valet, to the spectacular views, top notch food, five star service and sounds of the ocean while
              eating.”
            </h1>
            <br />
            <p className="text-base text-gray-400 uppercase">Christine Q., 2022, via Tripadvisor</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center p-10">
          <div>
            <h1 className="text-5xl text-white">
              “Everything about our experience was amazing, from pulling up to the valet, to the spectacular views, top notch food, five star service and sounds of the ocean while
              eating.”
            </h1>
            <br />
            <p className="text-base text-gray-400 uppercase">Christine Q., 2022, via Tripadvisor</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center p-10">
          <div>
            <h1 className="text-5xl text-white">
              “Everything about our experience was amazing, from pulling up to the valet, to the spectacular views, top notch food, five star service and sounds of the ocean while
              eating.”
            </h1>
            <br />
            <p className="text-base text-gray-400 uppercase">Christine Q., 2022, via Tripadvisor</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center p-10">
          <div>
            <h1 className="text-5xl text-white">
              “Everything about our experience was amazing, from pulling up to the valet, to the spectacular views, top notch food, five star service and sounds of the ocean while
              eating.”
            </h1>
            <br />
            <p className="text-base text-gray-400 uppercase">Christine Q., 2022, via Tripadvisor</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Review;
