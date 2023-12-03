import React, { useEffect, useState } from 'react';
import { BsRocketTakeoff } from 'react-icons/bs';
import { CgMusic } from "react-icons/cg";
import { IoMdPaper } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { PiPaintBrushBold } from "react-icons/pi";
import { nfts } from '../data/nfts';
import NftCard from './NftCard';





const ExploreBody = () => {
    const [filter, setFilter] = useState("All");
    const [items, setItems] = useState([...nfts])

    const filterItems = (category)=>{
        let filteredItems = [];
        if(category === "ALl"){
            filteredItems = [...nfts];
        } else{
             filteredItems = nfts.filter(item=> item.category === category);
        }
        return filteredItems;
    }

   

    console.log(items)

    const filters = [
        {
            title: "All",
            icon: <IoMdPaper />,
            items: ()=>filterItems("ALl"),
        },
        {
            title: "Games",
            icon: <IoGameController />,
            items: filterItems("Games")
        },
        {
            title: "Art",
            icon: <PiPaintBrushBold />,
            items: filterItems("Art")
        },
        {
            title: "Music",
            icon: <CgMusic />,
            items: filterItems("Music")
        },
        {
            title: "Video",
            icon: <MdOutlineOndemandVideo />,
            items: filterItems("Video")
        },
        {
            title: "Memes",
            icon: <BsRocketTakeoff />,
            items: filterItems("Memes")
        }
    ];

    useEffect(()=>{
        const filteredItem = filters?.filter((item)=> item.title === filter)
        setItems(filteredItem[0].items);
    }, [filter])


    return (
        <div className='container mx-auto py-14 lg:py-24'>
            <div className=' w-full max-w-4xl px-5  mx-auto flex flex-wrap items-center justify-around'>
                {
                    filters?.map((item, i)=>(
                        <p key={i}
                         className={`border border-slate-200 px-3 py-1 shadow-md cursor-pointer text-slate-500 font-semibold duration-300 hover:text-violet-600 hover:border-violet-600 rounded-full flex items-center my-3 ${item.title === filter ? "border-violet-600" : ""} ${item.title === filter ? "text-violet-600" : ""}`} 
                         onClick={()=> setFilter(item.title)}>
                            {item.icon}
                            <span className='px-2'>{item.title}</span>
                        </p>
                    ))
                }
            </div>

            <div className='mt-10 w-11/12 h-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    items?.map((item, i)=>(
                        <NftCard data={item} key={i}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ExploreBody;