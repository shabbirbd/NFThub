import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Accordion = ({data, index, activeIndex, handleIndex}) => {

    const isActive = index === activeIndex;

    return (
        <div className=' mt-3 shadow  rounded-lg overflow-hidden '>
            <div className={`flex flex-nowrap items-center justify-between px-5 h-16 ${isActive ? "text-violet-600" : ""} ${isActive ? "bg-white" : "bg-slate-100"}`} onClick={()=> handleIndex(index)}>
                <h3>{data.question}</h3>
                {
                    isActive ?  <IoIosArrowUp /> : <IoIosArrowDown />
                }
            </div>

            {
                isActive && 
                <div className='px-5 bg-slate-100/50 pt-0'>
                    <p className='max-w-2xl w-full py-5 text-slate-400'>{data.answer}</p>
                </div>
            }
        </div>
    );
};

export default Accordion;