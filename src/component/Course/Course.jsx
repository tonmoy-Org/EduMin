import React from 'react';
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
import c5 from '../../assets/c5.png'
import c6 from '../../assets/c6.png'
import file from '../../assets/file.svg'
import clock from '../../assets/clock.svg'
import star from '../../assets/star.svg'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { toast } from 'react-toastify';
const Course = () => {
    const notify = () => toast.success("You Are Already Enrolled!");
    return (
        <div>
            {/* banner- */}
            <div>
                <div className='text-center  bg-red-100 md:py-28 py-16'>
                    <h1 className='banner-2-title'>Course</h1>
                    <p className='text-p py-6'>
                        Pages
                        <span className='text-red-400'>  - Courses</span>
                    </p>
                </div>
            </div>
            <div className='md:px-32 px-4 mt-32'>
                <div>
                    <h1 className='text-teal-500 font-bold text-p mb-4 text-center'>Popular Courses</h1>
                    <h1 className='text-center banner-2-title mb-4'>Choose Our Top <span className='text-red-400'>Courses</span></h1>
                </div>
                <div className='mt-10'>
                    <div className='md:flex gap-10 justify-center mb-10'>
                        <div className='border-2 rounded-md mb-6'>
                            <img src={c1} alt="" />
                            <div className='flex justify-between mx-4'>
                                <h1 className='text-teal-400 font-bold text-2xl mt-8'>Free</h1>
                                <button onClick={notify} className="mt-6 bg-red-400 md:py-2 text-white font-bold  px-4 rounded">
                                    Enroll Now
                                </button>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <div className='flex justify-between mt-8'>
                                    <div className='flex gap-3'>
                                        <img src={file} alt="" />
                                        <Link to='/'>2 lessons</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={clock} alt="" />
                                        <Link to="/">4h30min</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={star} alt="" />
                                        <Link to="/">4.5</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-2 rounded-md mb-6'>
                            <img src={c2} alt="" />
                            <div className='flex justify-between mx-4'>
                                <h1 className='text-teal-400 font-bold text-2xl mt-8'>Free</h1>
                                <button onClick={notify} className="mt-6 bg-red-400 md:py-2 text-white font-bold  px-4 rounded">
                                    Enroll Now
                                </button>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <div className='flex justify-between mt-8'>
                                    <div className='flex gap-3'>
                                        <img src={file} alt="" />
                                        <Link to='/'>2 lessons</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={clock} alt="" />
                                        <Link to="/">4h30min</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={star} alt="" />
                                        <Link to="/">4.5</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-2 rounded-md mb-6'>
                            <img src={c3} alt="" />
                            <div className='flex justify-between mx-4'>
                                <h1 className='text-teal-400 font-bold text-2xl mt-8'>Free</h1>
                                <button onClick={notify} className="mt-6 bg-red-400 md:py-2 text-white font-bold  px-4 rounded">
                                    Enroll Now
                                </button>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <div className='flex justify-between mt-8'>
                                    <div className='flex gap-3'>
                                        <img src={file} alt="" />
                                        <Link to='/'>2 lessons</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={clock} alt="" />
                                        <Link to="/">4h30min</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={star} alt="" />
                                        <Link to="/">4.5</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex gap-10 justify-center mb-20'>
                        <div className='border-2 rounded-md mb-6'>
                            <img src={c4} alt="" />
                            <div className='flex justify-between mx-4'>
                                <h1 className='text-teal-400 font-bold text-2xl mt-8'>Free</h1>
                                <button onClick={notify} className="mt-6 bg-red-400 md:py-2 text-white font-bold  px-4 rounded">
                                    Enroll Now
                                </button>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <div className='flex justify-between mt-8'>
                                    <div className='flex gap-3'>
                                        <img src={file} alt="" />
                                        <Link to='/'>2 lessons</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={clock} alt="" />
                                        <Link to="/">4h30min</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={star} alt="" />
                                        <Link to="/">4.5</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-2 rounded-md mb-6'>
                            <img src={c5} alt="" />
                            <div className='flex justify-between mx-4'>
                                <h1 className='text-teal-400 font-bold text-2xl mt-8'>Free</h1>
                                <button onClick={notify} className="mt-6 bg-red-400 md:py-2 text-white font-bold  px-4 rounded">
                                    Enroll Now
                                </button>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <div className='flex justify-between mt-8'>
                                    <div className='flex gap-3'>
                                        <img src={file} alt="" />
                                        <Link to='/'>2 lessons</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={clock} alt="" />
                                        <Link to="/">4h30min</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={star} alt="" />
                                        <Link to="/">4.5</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-2 rounded-md mb-6'>
                            <img src={c6} alt="" />
                            <div className='flex justify-between mx-4'>
                                <h1 className='text-teal-400 font-bold text-2xl mt-8'>Free</h1>
                                <button onClick={notify} className="mt-6 bg-red-400 md:py-2 text-white font-bold  px-4 rounded">
                                    Enroll Now
                                </button>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <div className='flex justify-between mt-8'>
                                    <div className='flex gap-3'>
                                        <img src={file} alt="" />
                                        <Link to='/'>2 lessons</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={clock} alt="" />
                                        <Link to="/">4h30min</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src={star} alt="" />
                                        <Link to="/">4.5</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className="mt-6 bg-red-400 md:py-4 md:px-8 md:mb-12 mb-8 text-white font-bold py-2 px-5 rounded">
                        View All Courses
                    </button>
                </div>
            </div>
            {
                <Footer></Footer>
            }
        </div>
    );
};

export default Course;