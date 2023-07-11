import React from 'react';
import blog1 from '../../assets/blog-1.png'
import blog2 from '../../assets/blog-2.png'
import blog3 from '../../assets/blog-3.png'
import blog4 from '../../assets/blog-4.png'
import blog5 from '../../assets/blog-5.png'
import blog6 from '../../assets/blog-6.png'
import blog7 from '../../assets/blog-7.png'
import blog8 from '../../assets/blog-8.png'
import blog9 from '../../assets/blog-9.png'
import blog10 from '../../assets/blog-10.png'
import admin from '../../assets/admin.svg'
import calender from '../../assets/calender.svg'
import rc1 from '../../assets/rc-1.png'
import rc2 from '../../assets/rc-2.png'
import rc3 from '../../assets/rc-3.png'
import { Link } from 'react-router-dom';
import './Blog.css'
import Footer from '../Footer/Footer';
const Blog = () => {
    return (
        <div>
            <div>
                <div className='text-center  bg-red-100 md:py-28 py-16'>
                    <h1 className='banner-2-title'>Blog Grid with Right Sidebar</h1>
                    <p className='text-p py-6'>
                        Pages
                        <span className='text-red-400'>  - Blog Grid with Right Sidebar</span>
                    </p>
                </div>
            </div>
            <div className='md:flex md:mx-28 gap-16'>
                <div>
                    <div className='md:flex gap-10  mb-20 mt-10'>
                        <div className='border-2 rounded-md'>
                            <img src={blog1} alt="" />
                            <div className='flex justify-between mx-4 mt-8'>
                                <div className='flex gap-3'>
                                    <img src={admin} alt="" />
                                    <Link to="/blog">admin</Link>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={calender} alt="" />
                                    <p>Jan 29, 2022</p>
                                </div>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <Link className='hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>
                        <div className='border-2 rounded-md'>
                            <img src={blog2} alt="" />
                            <div className='flex justify-between mx-4 mt-8'>
                                <div className='flex gap-3'>
                                    <img src={admin} alt="" />
                                    <Link to="/blog">admin</Link>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={calender} alt="" />
                                    <p>Jan 29, 2022</p>
                                </div>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <Link className='hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>

                    </div>
                    <div className='md:flex gap-10  mb-10'>
                        <div className='border-2 rounded-md'>
                            <img src={blog3} alt="" />
                            <div className='flex justify-between mx-4 mt-8'>
                                <div className='flex gap-3'>
                                    <img src={admin} alt="" />
                                    <Link to="/blog">admin</Link>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={calender} alt="" />
                                    <p>Jan 29, 2022</p>
                                </div>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <Link className='hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>
                        <div className='border-2 rounded-md'>
                            <img src={blog4} alt="" />
                            <div className='flex justify-between mx-4 mt-8'>
                                <div className='flex gap-3'>
                                    <img src={admin} alt="" />
                                    <Link to="/blog">admin</Link>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={calender} alt="" />
                                    <p>Jan 29, 2022</p>
                                </div>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <Link className='hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>

                    </div>
                    <div className='md:flex gap-10 mb-10'>
                        <div className='border-2 rounded-md'>
                            <img src={blog5} alt="" />
                            <div className='flex justify-between mx-4 mt-8'>
                                <div className='flex gap-3'>
                                    <img src={admin} alt="" />
                                    <Link to="/blog">admin</Link>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={calender} alt="" />
                                    <p>Jan 29, 2022</p>
                                </div>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <Link className='hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>
                        <div className='border-2 rounded-md'>
                            <img src={blog6} alt="" />
                            <div className='flex justify-between mx-4 mt-8'>
                                <div className='flex gap-3'>
                                    <img src={admin} alt="" />
                                    <Link to="/blog">admin</Link>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={calender} alt="" />
                                    <p>Jan 29, 2022</p>
                                </div>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <Link className='hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>

                    </div>
                    <div className='md:flex gap-10 mb-10'>
                        <div className='border-2 rounded-md'>
                            <img src={blog7} alt="" />
                            <div className='flex justify-between mx-4 mt-8'>
                                <div className='flex gap-3'>
                                    <img src={admin} alt="" />
                                    <Link to="/blog">admin</Link>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={calender} alt="" />
                                    <p>Jan 29, 2022</p>
                                </div>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <Link className='hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>
                        <div className='border-2 rounded-md'>
                            <img src={blog8} alt="" />
                            <div className='flex justify-between mx-4 mt-8'>
                                <div className='flex gap-3'>
                                    <img src={admin} alt="" />
                                    <Link to="/blog">admin</Link>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={calender} alt="" />
                                    <p>Jan 29, 2022</p>
                                </div>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <Link className='hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>

                    </div>
                    <div className='md:flex gap-10 mb-10'>
                        <div className='border-2 rounded-md'>
                            <img src={blog9} alt="" />
                            <div className='flex justify-between mx-4 mt-8'>
                                <div className='flex gap-3'>
                                    <img src={admin} alt="" />
                                    <Link to="/blog">admin</Link>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={calender} alt="" />
                                    <p>Jan 29, 2022</p>
                                </div>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <Link className='hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>
                        <div className='border-2 rounded-md'>
                            <img src={blog10} alt="" />
                            <div className='flex justify-between mx-4 mt-8'>
                                <div className='flex gap-3'>
                                    <img src={admin} alt="" />
                                    <Link to="/blog">admin</Link>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={calender} alt="" />
                                    <p>Jan 29, 2022</p>
                                </div>
                            </div>
                            <div className='mt-5 mx-4 mb-4'>
                                <h1 className='font-bold pt-2 blog-t mb-6 hover:text-red-400 duration-100'>Professional Mobile Painting <br /> and Sculpting</h1>
                                <Link className='hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='my-5 bg-slate-100 p-6 new-blog mt-10'>
                        <h1 className='text-2xl font-bold mb-6'>Related Courses</h1>
                        <div className='flex gap-5 mb-10'>
                            <img src={rc1} alt="" />
                            <div>
                                <p className='text-p font-semibold text-zinc-500'>
                                    How to Manage Ads For Clients The Right Way
                                </p>
                                <Link className='text-teal-500 hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-10'>
                            <img src={rc2} alt="" />
                            <div>
                                <p className='text-p font-semibold text-zinc-500'>
                                    How to Manage Ads For Clients The Right Way
                                </p>
                                <Link className='text-teal-500 hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-10'>
                            <img src={rc3} alt="" />
                            <div>
                                <p className='text-p font-semibold text-zinc-500'>
                                    How to Manage Ads For Clients The Right Way
                                </p>
                                <Link className='text-teal-500 hover:text-red-400 duration-100 font-bold' to="/blog">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='my-5 px-12 bg-slate-100 p-8 new-blog-2 mt-10'>
                        <h1 className='text-2xl font-bold mb-6'>Instagram Feed</h1>
                        <div className='flex gap-5 mt-4'>
                            <div>
                                <img src={rc1} alt="" />
                            </div>
                            <div>
                                <img src={rc2} alt="" />
                            </div>
                            <div>
                                <img src={rc3} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-5 mt-5'>
                            <div>
                                <img src={rc1} alt="" />
                            </div>
                            <div>
                                <img src={rc2} alt="" />
                            </div>
                            <div>
                                <img src={rc3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='my-5 px-12 bg-slate-100 p-8 new-blog-2 mt-10'>
                        <h1 className='text-2xl font-bold mb-6'>Popular Tags</h1>
                        <div className='flex gap-5 mt-4'>
                            <div>
                                <Link className=' hover:text-red-400 duration-100 font-bold'>Business</Link>
                            </div>
                            <div>
                                <Link className=' hover:text-red-400 duration-100 font-bold'>Education</Link>
                            </div>
                            <div>
                                <Link className=' hover:text-red-400 duration-100 font-bold'>Design</Link>
                            </div>
                        </div>
                        <div className='flex gap-5 mt-5'>
                            <div>
                                <Link className=' hover:text-red-400 duration-100 font-bold'>Student</Link>
                            </div>
                            <div>
                                <Link className=' hover:text-red-400 duration-100 font-bold'>Teacher</Link>
                            </div>
                            <div>
                                <Link className=' hover:text-red-400 duration-100 font-bold'>Classroom</Link>
                            </div>

                        </div>
                        <div className='flex gap-5 mt-5'>
                            <div>
                                <Link className=' hover:text-red-400 duration-100 font-bold'>Online</Link>
                            </div>
                            <div>
                                <Link className=' hover:text-red-400 duration-100 font-bold'>E-learning</Link>
                            </div>
                            <div>
                                <Link className=' hover:text-red-400 duration-100 font-bold'>Book</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Blog;