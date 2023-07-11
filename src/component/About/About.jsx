import React from 'react';
import Footer from '../Footer/Footer';
import single from '../../assets/single-course-thumb.png'
import rc1 from '../../assets/rc-1.png'
import rc2 from '../../assets/rc-2.png'
import rc3 from '../../assets/rc-3.png'
import video from '../../assets/video.svg';
import web from '../../assets/web-white.svg';
import about5 from '../../assets/about5.png'
import about2 from '../../assets/about2.png'
import ok from '../../assets/ok.svg'
import one from '../../assets/one.svg'
import two from '../../assets/two.svg'
import three from '../../assets/three.svg'
import four from '../../assets/four.svg'
import five from '../../assets/five.svg'
import { Link } from 'react-router-dom';
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'
import team3 from '../../assets/team3.png'
import team4 from '../../assets/team4.png'
import fb from '../../assets/fb.png'
import linkdin from '../../assets/linkdin.png'
import twitter from '../../assets/twitter.png'
const About = () => {
    return (
        <div>
            <div>
                <div className='text-center  bg-red-100 md:py-28 py-16'>
                    <h1 className='banner-2-title'>About</h1>
                    <p className='text-p py-6'>
                        Pages
                        <span className='text-red-400'>  - About</span>
                    </p>
                </div>
            </div>
            <div className='md:flex md:mx-32 mt-20 mb-20'>
                <div className='mx-2'>
                    <div className='mt-10 mb-10 '>
                        <img src={single} alt="" />
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold  mb-5'>UI/UX Design and Graphics Learning <br /> Bootcamp 2022</h1>
                        <h1 className='text-2xl font-bold mb-4'>Course Description</h1>
                        <p className='text-p text-zinc-500'>
                            This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                            <br />
                            <br />
                            You’ll be exposed to principles and strategies, but, more importantly, you’ll learn how actually apply these abstract concepts by coding three different websites for three very different the audiences. Lorem ipsum is dummy text used in laying out print, graphic or web designs Lorem ipsum blinding shot chinwag knees.
                        </p>
                    </div>
                </div>
                <div className='mt-16'>
                    <div className='my-5 bg-slate-100 p-8 new-blog mt-10'>
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
                </div>
            </div>
            <div>
                <div>
                    <div className='md:flex md:items-center gap-20 md:px-28 px-4'>
                        <div className='mt-20'>
                            <img src={about5} alt="" />
                        </div>
                        <div className='md:mt-36 mt-28'>
                            <h1 className='text-teal-500 font-bold text-p mb-4'>About Edumim</h1>
                            <h1 className='banner-2-title mb-4'>
                                You Can Learn <br /> Anything, Anytime <br /> From <span className='text-red-400'>Anywhere</span>
                            </h1>
                            <p className='text-p text-zinc-500 w-4/5 mb-8'>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered.
                            </p>
                            <div className='banner-2-description mb-4 '>
                                <div className='flex mb-14 gap-5 items-center'>
                                    <img src={video} alt="" />
                                    <div>
                                        <h1 className='font-bold mb-3 text-2xl'>All Classes Video Provided</h1>
                                        <p className='text-p text-zinc-500 '>
                                            There are many variations of passages <br /> of the Lorem Ipsum available.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <img src={web} alt="" />
                                    <div>
                                        <h1 className='font-bold mb-3 text-2xl'>Online Class From Expert Teachers</h1>
                                        <p className='text-p text-zinc-500'>
                                            There are many variations of passages <br /> of the Lorem Ipsum available.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-10 bg-red-400 md:py-4 md:px-8 md:mb-12 mb-8 text-white font-bold py-2 px-5 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <br />
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
                <br />
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
                <br />
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
            </div>
            <div>
                <div>
                    {
                        <Footer></Footer>
                    }
                </div>
            </div>
        </div>
    );
};

export default About;