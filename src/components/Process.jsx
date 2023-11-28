import React from 'react';
import { BiCollection } from "react-icons/bi";
import { GiSellCard } from "react-icons/gi";
import { ImTree } from "react-icons/im";



const Process = () => {
    const process = [
        {
            title: "Create Item",
            icon: <ImTree />,
            description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            title: "Collect",
            icon: <BiCollection />,
            description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            title: "Sell Item",
            icon: <GiSellCard />,
            description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
    ]

    
    return (
        <div className=' w-11/12 mx-auto '>
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-4 md:text-4xl text-3xl md:leading-snug leading-snug font-semibold">Giglink is a web3 destination.</h3>

                <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">      
                {
                    process?.map((item, i)=>(
                        <div className="group relative lg:px-6 mt-4 py-10 flex flex-col items-center transition duration-500 ease-in-out rounded-xl overflow-hidden text-center" key={i}>
                            <div className="relative overflow-hidden bg-slate-200 h-20 w-20 rotate-45 rounded-3xl flex items-center justify-center">
                                <span className='absolute -rotate-45 font-bold text-2xl text-violet-600'>
                                    {item.icon}
                                </span>
                            </div>

                            <div className="mt-6">
                                <a href="" className="text-lg h5 font-semibold transition duration-500 ease-in-out hover:text-violet-600">{item.title}</a>
                                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Process;