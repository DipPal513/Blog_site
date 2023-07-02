"use client"
import React, { useState } from 'react'
import ArticleData from '../../../public/ArticleData';

export default function LatestArticle() {
    const [isActive, setIsactive] = useState(false);
    console.log(isActive)
    return (
        <div className=''>
            <div className="max-w-screen-xl mx-auto py-10">
                <div className="grid grid-cols-2 gap-x-2">
                    <div className="left">
                        <div className="header-left">
                            <h2 className="text-black text-2xl font-bold">Latest Articles 🎈
                            </h2>
                            <p className='text-gray-400 text-xl'>Discover the most outstanding articles in all topics of life.
                            </p>
                        </div>
                        <div className="img-upper-section">
                            <ul className="flex my-10">
                                {["All Items", "Garden", "Fitness", "Design"].map((el) => {
                                    return (

                                        <li className={`text-gray-500 font-semibold rounded-full me-3 text-xl py-2 px-4 cursor-pointer ${isActive ? "bg-black text-white" : ""} `} onClick={() => setIsactive(!isActive)}>{el}</li>
                                    )
                                })}

                            </ul>
                        </div>
                        <div className="rounded-xl">
                            <img className="rounded-xl" src="https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1465310477141-6fb93167a273%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1950%26q%3D80&w=1080&q=75" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        {ArticleData.map((el, index) => {

                            return (
                                <div key={index} className="rounded-xl border py-2 px-3 flex items-center justify-between shadow-lg mb-3">
                                    <div className="left-data">
                                        <p className="bg-red-300 rounded-full px-2 py-1 w-1/2">{el.niche}</p>
                                        <h3 className='my-5 text-black font-xl font-bold'>{el.title}</h3>
                                        <div className="profile flex items-center">
                                            <img src={el.authorPhoto} className='w-9 h-9 op rounded-full me-4' alt="" />
                                            <p className="semibold capitalize text-gray-600">{el.Author}</p>
                                            <p className="text-lg ms-2 text-gray-500">{el.Date}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="flex items-center">
                                                <div className="like"></div>
                                                <div className="comment"></div>
                                            </div>
                                            <div className="pin"></div>
                                        </div>
                                    </div>
                                    <img src={el.thumbnail} className='rounded-xl' alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
