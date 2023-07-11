import React from 'react';
import { Link } from 'react-router-dom';
import mail from '../../assets/mail.svg'
import call from '../../assets/call.svg'
import map from '../../assets/map.svg'
import Footer from '../Footer/Footer';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div>
                <div className='text-center  bg-red-100 md:py-28 py-16'>
                    <h1 className='banner-2-title'>Contact</h1>
                    <p className='text-p py-6'>
                        Pages
                        <span className='text-red-400'>  - Contact</span>
                    </p>
                </div>
            </div>
            <div>
                <div className='md:flex md:items-center gap-12 md:px-32 px-4 justify-center mt-20'>
                    <div className='md:mt-12 mt-20'>
                        <h1 className='text-teal-500 font-bold text-p mb-4'>Contact Us</h1>
                        <h1 className='banner-2-title mb-4'>
                            Get In Touch <span className='text-red-400'>Today</span>
                        </h1>
                        <p className='text-p text-zinc-500 w-4/5 mb-8'>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered.
                        </p>
                        <div className='banner-2-description mb-4 '>
                            <div className='flex gap-6 mb-4 items-center'>
                                <img src={mail} alt="" />
                                <div>
                                    <h1 className='font-bold mb-3 pt-2 text-2xl'>Email-Us: </h1>
                                    <p className='text-p'>Contactyourmail@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex gap-6 mb-4  items-center'>
                                <img src={call} alt="" />
                                <div>
                                    <h1 className='font-bold mb-3 pt-2 text-2xl'>Call Us:</h1>
                                    <p className='text-p'>+88012 2910 1781, +88019 6128 1689</p>
                                </div>
                            </div>
                            <div className='flex gap-6 mb-4 items-center'>
                                <img src={map} alt="" />
                                <div>
                                    <h1 className='font-bold mb-3 pt-2 text-2xl'>Office:</h1>
                                    <p className='text-p'>Mountain Green Road 2389, NY, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-20 border-2 bg-slate-100 md:p-16 p-5'>
                        <div className='md:flex gap-10 md:mt-8'>
                            <input className='py-2 px-8  mb-6 md:mb-0' type="text" placeholder='Name*' />
                            <input className='py-2 px-8 ' type="email" placeholder='Email*' />
                        </div>
                        <div className='md:flex gap-10 mt-8'>
                            <input className='py-2 px-8   mb-6 md:mb-0' type="text" placeholder='Phone*' />
                            <input className='py-2 px-8' type="text" placeholder='Web Address' />
                        </div>
                        <div className='mt-8'>
                            <textarea className='px-8 py-4 text-area' name="" id="" cols="24" rows="4" placeholder='Your Massage*'></textarea>
                        </div>
                    <button className="mt-5 bg-red-400 md:py-4 md:px-8 mb-4 text-white font-bold py-2 px-5 rounded ">
                        <Link to="">Send Massage</Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className='mt-28'>
                {
                    <Footer></Footer>
                }
            </div>
        </div>
    );
};

export default Contact;