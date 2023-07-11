import React from 'react';
import main1 from '../../assets/man1.png';
import about1 from '../../assets/about1.png';
import about2 from '../../assets/about2.png';
import react from '../../assets/react.svg';
import target from '../../assets/target.svg';
import one from '../../assets/one.svg'
import two from '../../assets/two.svg'
import three from '../../assets/three.svg'
import four from '../../assets/four.svg'
import five from '../../assets/five.svg'
import icon3 from '../../assets/icon3.png'
import icon2 from '../../assets/icon2.png'
import icon1 from '../../assets/icon1.png'
import ok from '../../assets/ok.svg'
import blog1 from '../../assets/blog-1.png'
import blog2 from '../../assets/blog-2.png'
import blog3 from '../../assets/blog-3.png'
import admin from '../../assets/admin.svg'
import calender from '../../assets/calender.svg'
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
import c5 from '../../assets/c5.png'
import c6 from '../../assets/c6.png'
import file from '../../assets/file.svg'
import clock from '../../assets/clock.svg'
import star from '../../assets/star.svg'
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'
import team3 from '../../assets/team3.png'
import team4 from '../../assets/team4.png'
import fb from '../../assets/fb.png'
import linkdin from '../../assets/linkdin.png'
import twitter from '../../assets/twitter.png'
import './Home.css';
import { Link, } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='md:flex md:items-center md:justify-between gap-36'>
            <section >

                {/* banner-1 */}
                <div className='xl-pt-[290px] pt-28 md:pt-48 md:pb-20 md:px-40 px-4'>
                    <h1 className='banner-title font-bold'>Classical <br /> <span className='text-teal-500'> Education For</span> <br /> The Future</h1>
                    <br />
                    <p className='text-p text-zinc-500'>It is long established fact that reader distracted by the readable content.</p>
                    <br />
                    <form action="">
                        <input className='border-2 md:py-4 md:px-16 py-2 mb-8' placeholder='@ Enter Your Email' type="text" name="" id="" />
                        <button className="bg-red-400 md:py-4 md:px-8 md:mb-12 mb-8 text-white font-bold py-2 px-5 rounded">
                            Get Started Now
                        </button>
                    </form>
                </div>
                <div className="img-box absolute xl:right-[-0px] hidden xl:block top-28">
                    <img src={main1} alt="" />
                </div>
                <br />

                {/* banner-2 */}
                <div className='md:flex md:items-center gap-12 md:px-32 px-4'>
                    <div className='mt-20'>
                        <img src={about1} alt="" />
                    </div>
                    <div className='md:mt-36 mt-28'>
                        <h1 className='text-teal-500 font-bold text-p mb-4'>About Edumim</h1>
                        <h1 className='banner-2-title mb-4'>
                            The Place Where You Can <br /> Achieve
                        </h1>
                        <p className='text-p text-zinc-500 w-4/5 mb-8'>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered.
                        </p>
                        <div className='banner-2-description mb-4 '>
                            <div className='flex mb-14 gap-5 items-center'>
                                <img src={target} alt="" />
                                <div>
                                    <h1 className='font-bold mb-3 text-2xl'>Our Mission</h1>
                                    <p className='text-p text-zinc-500 '>
                                        There are many variations of passages of the Lorem Ipsum available.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <img src={react} alt="" />
                                <div>
                                    <h1 className='font-bold mb-3 text-2xl'>Our Vision</h1>
                                    <p className='text-p text-zinc-500'>
                                        There are many variations of passages of the Lorem Ipsum available.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-10 bg-red-400 md:py-4 md:px-8 md:mb-12 mb-8 text-white font-bold py-2 px-5 rounded">
                            Read More
                        </button>
                    </div>
                </div>

                {/* banner-3 */}
                <div className='mt-28 md:px-32 px-4'>
                    <h1 className='text-center text-2xl'>Trusted By 1k+ Company Arround The World!</h1>
                    <div className='md:flex justify-center items-center gap-24 my-16'>
                        <div><img className='mx-auto mb-5' src={one} alt="" /></div>
                        <div><img className='mx-auto mb-5' src={two} alt="" /></div>
                        <div><img className='mx-auto mb-5' src={three} alt="" /></div>
                        <div><img className='mx-auto mb-5' src={four} alt="" /></div>
                        <div><img className='mx-auto mb-5' src={five} alt="" /></div>
                    </div>
                </div>
                {/* banner-4 */}
                <div className='mt-52 md:px-32 px-4'>
                    <h1 className='text-teal-500 font-bold text-p mb-4 text-center'>Core Features</h1>
                    <h1 className='text-center banner-2-title mb-4'>Why <span className='text-red-400'>Choose</span> Edumim</h1>
                    <div className='md:flex justify-center mb-16 gap-10 mt-16'>
                        <div className='border-2 p-10 hover:bg-red-400 bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-100 rounded-sm mb-4 w-9/12 mx-auto'>
                            <img className='icon my-3' src={icon3} alt="" />
                            <h1 className='text-2xl font-bold'>Learn More Anywhere</h1>
                            <p className='text-p my-3'>
                                Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.
                            </p>
                        </div>
                        <div className='border-2 p-10 hover:bg-red-400 bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-100 rounded-sm mb-4 w-9/12 mx-auto'>
                            <img className='icon my-3' src={icon2} alt="" />
                            <h1 className='text-2xl font-bold'>Expert Instructor</h1>
                            <p className='text-p my-3'>
                                Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.
                            </p>
                        </div>
                        <div className='border-2 p-10 hover:bg-red-400 bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-100 rounded-sm mb-4 w-9/12 mx-auto'>
                            <img className='icon my-3' src={icon1} alt="" />
                            <h1 className='text-2xl font-bold'>24/7 Strong Support</h1>
                            <p className='text-p my-3'>
                                Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.
                            </p>
                        </div>
                    </div>
                </div>
                {/* banner- */}
                <div className='md:px-32 px-4 mt-32'>
                    <div>
                        <h1 className='text-teal-500 font-bold text-p mb-4 text-center'>Popular Courses</h1>
                        <h1 className='text-center banner-2-title mb-4'>Choose Our Top <span className='text-red-400'>Courses</span></h1>
                    </div>
                    <div className='mt-10'>
                        <div className='md:flex gap-10 justify-center mb-10'>
                            <div className='border-2 rounded-md mb-6'>
                                <img src={c1} alt="" />
                                <div>
                                    <h1 className='text-teal-400 font-bold text-2xl mx-4 mt-8'>Free</h1>
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
                                <div>
                                    <h1 className='text-teal-400 font-bold text-2xl mx-4 mt-8'>Free</h1>
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
                                <div>
                                    <h1 className='text-teal-400 font-bold text-2xl mx-4 mt-8'>Free</h1>
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
                                <div>
                                    <h1 className='text-teal-400 font-bold text-2xl mx-4 mt-8'>Free</h1>
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
                                <div>
                                    <h1 className='text-teal-400 font-bold text-2xl mx-4 mt-8'>Free</h1>
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
                                <div>
                                    <h1 className='text-teal-400 font-bold text-2xl mx-4 mt-8'>Free</h1>
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
                {/* banner-5 */}
                <div className='md:flex md:items-center gap-12 md:px-32 px-4'>
                    <div className='md:mt-36 mt-28'>
                        <h1 className='text-teal-500 font-bold text-p mb-4'>Best Online Learning Platform</h1>
                        <h1 className='banner-2-title mb-4'>
                            One Platfrom & Many <span className='text-red-400'>Courses </span> For You
                        </h1>
                        <p className='text-p text-zinc-500 w-4/5 mb-8'>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered.
                        </p>
                        <div className='banner-2-description mb-4 '>
                            <div className='flex gap-2 items-center'>
                                <img src={ok} alt="" />
                                <h1 className='font-bold mb-3 pt-2 text-2xl'>9/10 Average Satisfaction Rate</h1>
                            </div>
                            <div className='flex gap-2  items-center'>
                                <img src={ok} alt="" />
                                <h1 className='font-bold mb-3 pt-2 text-2xl'>96% Completitation Rate</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={ok} alt="" />
                                <h1 className='font-bold mb-3 pt-2 text-2xl'>Friendly Environment & Expert Teacher</h1>
                            </div>
                        </div>
                        <button className="mt-10 bg-red-400 md:py-4 md:px-8 md:mb-12 mb-8 text-white font-bold py-2 px-5 rounded">
                            <Link to="/course">Explore Our Courses</Link>
                        </button>
                    </div>
                    <div className='mt-20'>
                        <img src={about2} alt="" />
                    </div>
                </div>
                {/* banner- */}
                <div className='md:mt-16  mt-28'>
                    <div className='pt-5'>
                        <h1 className='text-teal-500 font-bold text-p mb-4 text-center'>Team Member</h1>
                        <h1 className='text-center banner-2-title mb-4'>Our Expert <span className='text-red-400'>Instructors</span></h1>
                    </div>
                    <div className='flex justify-center'>
                        <div className='grid md:grid-cols-4 gap-12 my-16'>
                            <div className="rounded-md shadow-xl p-10 transition duration-200 ease-in-out hover:border-t-2 hover:border-teal-400">
                                <img className="mb-6" src={team1} alt="" />
                                <div className="text-center">
                                    <h1 className="text-2xl font-bold">Erics Widget</h1>
                                    <p className="text-p">UI/UX Designer</p>
                                </div>
                                <div className="flex gap-4 mt-5 justify-center">
                                    <Link><img className="team-icon" src={fb} alt="" /></Link>
                                    <Link><img className="team-icon" src={linkdin} alt="" /></Link>
                                    <Link><img className="team-icon" src={twitter} alt="" /></Link>
                                </div>
                            </div>



                            <div className='rounded-md shadow-xl p-10 transition duration-200 ease-in-out hover:border-t-2 hover:border-teal-400'>
                                <img className='mb-6' src={team2} alt="" />
                                <div className='text-center'>
                                    <h1 className='text-2xl font-bold'>Daniel Steven</h1>
                                    <p className='text-p'>UI/UX Designer</p>
                                </div>
                                <div className='flex gap-4 mt-5 justify-center'>
                                    <Link><img className='team-icon' src={fb} alt="" /></Link>
                                    <Link><img className='team-icon' src={linkdin} alt="" /></Link>
                                    <Link><img className='team-icon' src={twitter} alt="" /></Link>
                                </div>
                            </div>
                            <div className='rounded-md shadow-xl p-10 transition duration-200 ease-in-out hover:border-t-2 hover:border-teal-400'>
                                <img className='mb-6' src={team3} alt="" />
                                <div className='text-center'>
                                    <h1 className='text-2xl font-bold'>Nelson Decosta</h1>
                                    <p className='text-p'>UI/UX Designer</p>
                                </div>
                                <div className='flex gap-4 mt-5 justify-center'>
                                    <Link><img className='team-icon' src={fb} alt="" /></Link>
                                    <Link><img className='team-icon' src={linkdin} alt="" /></Link>
                                    <Link><img className='team-icon' src={twitter} alt="" /></Link>
                                </div>
                            </div>
                            <div className='rounded-md shadow-xl p-10 transition duration-200 ease-in-out hover:border-t-2 hover:border-teal-400'>
                                <img className='mb-6' src={team4} alt="" />
                                <div className='text-center'>
                                    <h1 className='text-2xl font-bold'>Selina Gomez</h1>
                                    <p className='text-p'>UI/UX Designer</p>
                                </div>
                                <div className='flex gap-4 mt-5 justify-center'>
                                    <Link><img className='team-icon' src={fb} alt="" /></Link>
                                    <Link><img className='team-icon' src={linkdin} alt="" /></Link>
                                    <Link><img className='team-icon' src={twitter} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* banner-6 */}
                <div className='mt-32 md:px-32 px-4'>
                    <div className='md:flex justify-between items-center mx-10 my-4'>
                        <div>
                            <h1 className='text-teal-500 font-bold text-p'>Team Member</h1>
                            <h1 className='banner-2-title mb-4'>Our Latest <span className='text-red-400'>Blogs</span></h1>
                        </div>
                        <button className="mt-10 bg-red-400 md:py-4 md:px-8 md:mb-12 mb-8 text-white font-bold py-2 px-5 rounded">
                            <Link to="/blog">Explore Our Blogs</Link>
                        </button>
                    </div>
                    <div className='md:flex gap-10 justify-center mb-20'>
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
                    </div>
                </div>
                {
                    <Footer></Footer>
                }
            </section>
        </div>

    );
};

export default Home; 