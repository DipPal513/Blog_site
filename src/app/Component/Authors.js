"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
const Authors = () => {
    // init swiper


    return (
        <div className="authors bg-gray-50">
            <div className="max-w-screen-xl py-10 mx-auto">
                <div className="authors-header text-center mx-auto">
                    <h2 className="text-3xl font-bold">
                        Newest Authors
                    </h2>
                    <p className="text-xl text-gray-400">
                        Say hello to future creator potentials
                    </p>
                </div>
                <div className="authors mt-5 gap-x-2 py-10">
                    <Swiper className=''
                        slidesPerView={4}
                        centeredSlides={true}
                        navigation={true}
                        modules={[Navigation]}>
                        {[{
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Royal Sergi',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&w=128&q=75",
                            bg: 'https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F931887%2Fpexels-photo-931887.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=640&q=75'

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        }, {
                            name: 'Falconar Agnes',
                            role: "@Author Job",
                            photo: "https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.83dfff4a.jpg&w=1920&q=75"
                            , bg: "https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"

                        },
                        ].map((el) => (
                            <SwiperSlide className="py-16">
                               <div className="rounded-xl shadow-xl relative mr-4 pb-5">
                               <img src={el.bg} alt="" style={{height:"200px",borderTopRightRadius:"0.75rem",borderTopLeftRadius:"0.75rem"}} className="w-full"/>
                                <div className="arrow absolute"></div>
                                <div className="auth text-center -mt-8 z-100 ">
                                    <img src={el.photo} style={{width:"100px"}} alt="" className="rounded-full border-white mx-auto" />
                                    <h3 className="">{el.name}</h3>
                                    <p className="text-gray-300 text-xl">@Author Job</p>
                                </div>
                               </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Authors