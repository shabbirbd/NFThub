import React, { useState } from 'react';
import { qna } from '../data/qna';
import Accordion from './Accordion';

const QNA = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleIndex = (index)=>{
        if(activeIndex === index){
            setActiveIndex(null)
        } else{
            setActiveIndex(index)
        }
    }

    return (
        <div className=' container'>
            <div className='grid grid-cols-1 text-center'>
                <h3 className="mb-4 md:text-4xl text-3xl md:leading-snug leading-snug font-semibold">Q&A</h3>
                <p className="text-slate-500 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>
            </div>

            <div className='flex justify-center mt-10'>
                <div className=' lg:w-2/3 h-auto relative'>
                    {
                        qna?.map((item, i)=>(
                            <Accordion data={item} key={i} index={i} activeIndex={activeIndex} handleIndex={handleIndex}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default QNA;