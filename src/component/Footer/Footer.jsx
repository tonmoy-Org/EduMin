import React from 'react';
import fb from '../../assets/fb.png'
import linkdin from '../../assets/linkdin.png'
import twitter from '../../assets/twitter.png'
import { Link, } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className=' text-white bg-black'>
                <div className='grid md:grid-cols-4 gap-10 p-28'>
                    <div>
                        <h1 className='text-3xl font-bold pb-4'>EduMin</h1>
                        <p className='text-p text-zinc-500'>
                            Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus.
                        </p>
                        <br />
                        <div className='flex gap-5'>
                            <Link><img className='team-icon' src={fb} alt="" /></Link>
                            <Link><img className='team-icon' src={linkdin} alt="" /></Link>
                            <Link><img className='team-icon' src={twitter} alt="" /></Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold pb-4'>Links</h1>
                        <div className='mt-2 text-zinc-500'>
                            <div className='mb-3'>
                                <Link to="/">Home</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="/blog">Blogs</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="/course">Courses</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="/about">About</Link><br />
                            </div>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold pb-4'>Legal</h1>
                        <div className='mt-2 text-zinc-500'>
                            <div className='mb-3'>
                                <Link to="/">Legal</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="/blog">Tearms of Use </Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="/course">Tearm & Condition</Link><br />
                            </div>
                            <div className='mb-3'>
                                <Link to="/about">Payment Method</Link><br />
                            </div>
                            <Link to="/contact">Privacy Policy</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold pb-4'>News Latter</h1>
                        <p className='text-p text-zinc-500'>
                            Join over <span className='text-red-400 underline'>68,000</span> people getting our emails Lorem ipsum dolor sit amet consectet
                        </p>
                        <input className='md:py-4 py-2  mt-4 md:px-10' type="text" name="" id="" placeholder='@Enter Your Email' />
                        <button className="mt-10 bg-red-400 md:py-4 md:px-5 md:mb-12 mb-8 text-white font-bold py-2 px-6 rounded">
                            <Link to="/">Subscribe Now</Link>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;