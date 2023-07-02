"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Authors from "../../../public/Authors";
import { LuMusic4 } from 'react-icons/lu'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import Trending from "../../../public/Trending";
import AudioData from "../../../public/AudioData";
const AudioSection = () => {
    // init swiper


    return (
        <div className="AudioSection bg-gray-100">
            <div className="max-w-screen-xl py-10 mx-auto">
                <div className="authors-header text-center">
                    <h2 className="text-3xl font-bold">
                        Explore latest audio articles
                    </h2>
                    <p className="text-xl text-gray-400">
                        Click on the icon to enjoy the music or podcast 🎧
                    </p>
                </div>
                <div className="authors mt-5 py-10">
                    <Swiper className=''
                        slidesPerView={4}
                        centeredSlides={true}
                        loop={true}
                        navigation={true}
                        breakpoints={{
                            // when window width is >= 640px
                            // 640: {
                            //   width: 640,
                            //   slidesPerView: 1,
                            // },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },
                            640: {
                                width: 640,
                                slidesPerView: 2,
                            },
                            320: {
                                width: 320,
                                slidesPerView: 1,
                            },
                            0: {
                                width: 0,
                                slidesPerView: 1,
                            }
                        }}
                        modules={[Navigation]}>
                        {AudioData.map((el, index) => {
                            // Replace the numeric value with the updated value
                            return (
                                <SwiperSlide className="py-16" key={index}>
                                    <div className="mr-5 relative">
                                        <img src={el.img} className="rounded-xl " alt="" />
                                        <div className="logo text-white absolute top-1/2 left-1/2 text-2xl w-11 h-11  border flex justify-center items-center rounded-full"><LuMusic4 /></div>
                                        <div className="datas absolute bottom-0 px-3 pb-3">
                                            <p className="bg-blue-300 text-blue-700 rounded-2xl py-1 px-2 font-semibold text-xs w-1/2 mb-2">{el.niche}</p>
                                            <h3 className="text-white font-bold text-xl">
                                                {el.title}
                                            </h3>
                                            <p className="flex text-gray-200"><span className="font-semibold text-xs">{el.Author}</span> . <span className="text-xs text-gray-200">{el.date}</span></p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default AudioSection; 