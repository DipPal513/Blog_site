"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Authors from "../../../public/Authors";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import Trending from "../../../public/Trending";
const TrendingTopics = () => {
    // init swiper


    return (
        <div className="trendingTopics bg-gray-100">
            <div className="max-w-screen-xl py-10 mx-auto">
                <div className="authors-header text-left">
                    <h2 className="text-3xl font-bold">
                        Top Trending Topics
                    </h2>
                    <p className="text-xl text-gray-400">
                        Discover 233 Topics
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
                        {Trending.map((el, index) => {
                            let className = el.color;

                            // Replace the numeric value with the updated value
                            let newClassName = className.replace(/\d+/, match => parseInt(match) - 200);

                            const color = newClassName.toString()
                            console.log(typeof color,color)
                            return (
                                <SwiperSlide className="py-16">

                                    <div className="mr-5">
                                        <div className="relative">

                                            <img src={el.img} className="rounded-xl" alt="" />
                                            <h4 className={`absolute top-4 left-4 ${color} py-1 px-4 text-sm font-semibold et-white rounded-xl`}>#{index}</h4>
                                        </div>
                                        <div className="flex items-center mt-5">
                                            <div className={`${el.color} rounded-full`}></div>
                                            <div className="ms-5">
                                                <h4 className="title text-black tex-base">{el.Title}</h4>
                                                <p className="text-gray-500">{el.trendingQuantity} Articles</p>
                                            </div>
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

export default TrendingTopics; 