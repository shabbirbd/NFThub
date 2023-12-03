import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';





const OurTeam = () => {
    const team = [
        {
            name: "Jack Jhon",
            title: "Designer",
            avater: team1,
        },
        {
            name: "Krista Jhon",
            title: "Developer",
            avater: team2,
        },
        {
            name: "David Nick",
            title: "Writer",
            avater: team3,
        },
        {
            name: "Henry Matis",
            title: "Artist",
            avater: team4
        }
    ]

    return (
        <div className='container mx-auto pt-16 lg:pt-24 pb-16'>
            <div className="grid grid-cols-1 pb-8 text-center">
                <h6 className="text-violet-600 font-medium mb-2">Our Minds</h6>
                <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold dark:text-white">Management Team</h3>

                <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 mt-8'>
                {
                    team?.map((item, i)=>(
                        <div className='lg:col-span-3 md:col-span-6' key={i}>
                            <div className='group text-center'>
                                <div className='relative inline-block mx-auto h-52 w-52 rounded-full border border-slate-200 overflow-hidden'>
                                    <img src={item.avater} alt="team"  className='h-full w-full object-cover '/>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                                    <ul className="list-none absolute flex items-center justify-center space-x-1 start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                        <li className="h-8 w-8 bg-violet-600 flex items-center justify-center rounded-full">
                                            <a href="#" className="rounded-full text-white">
                                                <LuFacebook />
                                            </a>
                                        </li>
                                        <li className="h-8 w-8 bg-violet-600 flex items-center justify-center rounded-full">
                                            <a href="" className="rounded-full  text-white">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                        <li className="h-8 w-8 bg-violet-600 flex items-center justify-center rounded-full">
                                            <a href="" className="rounded-full  text-white">
                                                <LuLinkedin />
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="content mt-3">
                                    <a href="" className="text-lg font-semibold hover:text-violet-600 transition-all duration-500 ease-in-out dark:text-white dark:hover:text-violet-600">{item.name}</a>
                                    <p className="text-slate-400">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurTeam;