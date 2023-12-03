import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Accordion = ({data, index, activeIndex, handleIndex}) => {

    const isActive = index === activeIndex;

    return (
        <div className='mt-3 shadow-sm dark:shadow-white rounded-lg overflow-hidden '>
            <div className={`flex flex-nowrap items-center justify-between px-5 h-16 dark:text-white ${isActive ? "text-violet-600" : ""} ${isActive ? "dark:text-violet-600" : ""} ${isActive ? "bg-white" : "bg-slate-100"} ${isActive ? "dark:bg-black" : "dark:bg-slate-900"}`} onClick={()=> handleIndex(index)}>
                <h3>{data.question}</h3>
                {
                    isActive ?  <IoIosArrowUp /> : <IoIosArrowDown />
                }
            </div>

            <div className={`${isActive ? "opacity-100" : "opacity-0"} duration-1000`}>
                {
                    isActive && 
                    <div className='px-5 bg-slate-100/50 dark:bg-slate-900/50 pt-0 transition-all'>
                        <p className='max-w-2xl w-full py-5 text-slate-400'>{data.answer}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Accordion;