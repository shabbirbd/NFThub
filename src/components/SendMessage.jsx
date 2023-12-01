import React from 'react';
import contact from '../assets/contact.png';

const SendMessage = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mt-14 justify-items-center'>
            <div className='lg:col-span-5 md:col-span-6 shadow p-6 w-full'>
                <h3 className='text-2xl font-base px-6'>Get in touch!</h3>

                <form method="post" className='px-6 py-10'>
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                        <div className="lg:col-span-6 mb-5">
                            <div className="text-start">
                                <label for="name" className="font-semibold">Your Name:</label>
                                <input name="name" id="name" type="text" className="w-full text-[15px] py-2 px-3 h-10 bg-transparent rounded-full outline-none border border-gray-200 focus:border-violet-600 focus:ring-0 mt-2" placeholder="Name :"/>
                            </div>
                        </div>

                        <div className="lg:col-span-6 mb-5">
                            <div className="text-start">
                                <label for="email" className="font-semibold">Your Email:</label>
                                <input name="email" type="email" className="w-full text-[15px] py-2 px-3 h-10 bg-transparent rounded-full outline-none border border-gray-200 focus:border-violet-600 focus:ring-0 mt-2" placeholder="Email :"/>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1">
                        <div className="mb-5">
                            <div className="text-start">
                                <label for="subject" className="font-semibold">Your Question:</label>
                                <input name="subject" className="w-full text-[15px] py-2 px-3 h-10 bg-transparent rounded-full outline-none border border-gray-200 focus:border-violet-600 focus:ring-0 mt-2" placeholder="Subject :"/>
                            </div>
                        </div>

                        <div className="mb-5">
                            <div className="text-start">
                                <label for="comments" className="font-semibold">Your Comment:</label>
                                <textarea name="comments" className="w-full text-[15px] py-2 px-3 h-28 bg-transparent rounded-2xl outline-none border border-gray-200 focus:border-violet-600 focus:ring-0 mt-2" placeholder="Message :"></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit"  className="px-3 py-2 bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full justify-center flex items-center">Send Message</button>
                </form>
            </div>

            <div className='lg:col-span-7 md:col-span-6 p-6'>
                <img src={contact} alt="contact" className='w-full object-cover' />
            </div>
        </div>
    );
};

export default SendMessage;