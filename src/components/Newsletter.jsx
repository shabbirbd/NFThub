import React from 'react';

const Newsletter = () => {
    return (
        <div className='container mt-10 py-10'>
            <div className='mb-11 lg:w-8/12 mx-auto text-center'>
                <h2 className="text-2xl sm:text-3xl xl:text-5xl font-bold mb-2">Subscribe to the <span className="text-violet-600">Newsletter</span></h2>
                <p className="font-normal px-5 text-base text-slate-600">Receive our latest thinking, insights, and
                     provocations
                     on creating hyper-innovative teams and organisations that build the future. Delivered every Sunday.
                     1-click unsubscribe anytime.
                </p>
            </div>

            <div className="sm:flex justify-between items-center sm:border-2 rounded-md lg:w-6/12 md:w-8/12 mx-auto border-indigo-500 border-3">
                  <form className="sm:flex items-center sm:flex-auto px-2 py-2 leading-none" action="#">
                     <input className="sm:appearance-none border-2 rounded-md w-full border-violet-600  px-6 py-3 sm:py-0  sm:rounded-0 text-slate-600 sm:outline-none font-normal text-base sm:border-0 " type="text" placeholder="Email Address"/>
                     <div className="subscribe-button mt-4 sm:mt-0">
                        <button className="py-4 sm:py-4 text-base block w-full text-center sm:w-auto font-medium leading-none  transition duration-500 hover:opacity-60 rounded-md px-6 bg-violet-600 text-white ">Subscribe</button>
                     </div>
                  </form>
               </div>
        </div>
    );
};

export default Newsletter;