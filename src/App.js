import './App.css';
// import './image';
import { MdMarkEmailUnread, MdOutlineFacebook } from "react-icons/md";
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogleplus, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp, IoIosArrowRoundForward, IoMdPlayCircle, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiSun } from "react-icons/hi";

import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { PiQuotesFill } from "react-icons/pi";

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import logo from './image/logo.svg';
import slider from './image/slider.webp';
import offered1 from './image/offered1.webp';
import offered2 from './image/offered2.webp';
import offered3 from './image/offered3.webp';
import offered4 from './image/offered4.webp';
import offered5 from './image/offered5.jpeg';
import offered6 from './image/offered6.jpeg';

import sli1 from './image/sli1.webp';
import sli2 from './image/sli2.webp';
import sli3 from './image/sli3.webp';

import about from './image/about.jpeg';

import k11 from './image/11.png';
import k22 from './image/22.png';
import k33 from './image/33.png';
import k44 from './image/44.png';

import happy1 from './image/happy1.jpeg';
import happy2 from './image/happy2.png';
import happyper from './image/happyper.jpeg';
import i11 from './image/111.png';
import i22 from './image/222.png';
import i33 from './image/333.png';
import i55 from './image/555.png';
import i44 from './image/444.png';
import i66 from './image/666.png';

import r1 from './image/r1.png';
import r2 from './image/r2.png';
import r3 from './image/r3.png';
import r4 from './image/r4.png';
import r5 from './image/r5.png';
import r6 from './image/r6.png';
import lastlogo from './image/lastlogo.svg';

import { FaHandPointRight } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";

var menu = ['HOME', 'COURSE', 'ACTIVITES', 'BLOG', 'KNOW US', 'GET IN TOUCH', 'STUDENT ZON'];
var offered = [
    { img: require('./image/offered1.webp'), name: 'full Stack' },
    { img: require('./image/offered2.webp'), name: 'Data science' },
    { img: require('./image/offered3.webp'), name: 'React native' },
    { img: require('./image/offered4.webp'), name: 'Game development' },
    { img: require('./image/offered5.jpeg'), name: 'C++' },
    { img: require('./image/offered6.jpeg'), name: 'Node js' }
]

var slider1 = [require('./image/sli1.webp'), require('./image/sli2.webp'), require('./image/sli3.webp')]

var student = [
    { img: require('./image/11.png'), num: '14000+', text: 'HAPPY STUDENTS' },
    { img: require('./image/22.png'), num: '10+', text: 'CERTIFICATION APPROVAL' },
    { img: require('./image/33.png'), num: '70+', text: 'CERTIFIED TEACHERS' },
    { img: require('./image/44.png'), num: '9000+', text: 'STUDENTS PLACED' },
]
var read_our = [
    { color:'#F6475F', img: require('./image/111.png'), heading: "Industry Experts As Trainers", des: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
    { color:'#FFBC06', img: require('./image/222.png'), heading: "Latest Curriculum", des: "We Provides latest curriculuuch a way that Students will get full knowledge within a short time." },
    { color:'#B3D369', img: require('./image/333.png'), heading: "Latest Technology", des: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today." },
    { color:'#554DA7', img: require('./image/444.png'), heading: "Interview Assistance", des: "At the end of each training,our tible technical questions technical questions you may be asked." },
    { color:'#4382FF', img: require('./image/555.png'), heading: "Free Upgradation", des: "We will be provided free upgradation for any newer version of the course you have." },
    { color:'#F94FA4', img: require('./image/666.png'), heading: "Lifetime Support", des: "We will provide you lifetime support on aaaavfsll the courses you learned from us." }
]

var slider2 = [require('./image/r1.png'), require('./image/r2.png'), require('./image/r3.png'), require('./image/r4.png'), require('./image/r5.png'), require('./image/r6.png'),]

var demand=['Best C++ Programming Langtitute','Advance Angular js training institute in surat','game design course in katargam','game design course in katargam','Web design training institute in katargam','Web design training institute in katargam','Android app development institute','Web design training institute in katargam','solidworks training institute in Mota Varachha','react js training institute in surat','Web design training institute in varachha','Creo parametrics training institute in varachha','Live game development training institute','Live game development training institute','Best nodejs training institute']






function App() {
    return (
        <div>
            {/* TOP-MENU START*/}
            <div className='top-menu'>
                <div className="container">
                    <div className="d_flex">
                        <div className="d_flex">
                            <div className="d_flex top-right">
                                <MdMarkEmailUnread></MdMarkEmailUnread>
                                <p className='top-text'>info@cdmi.in</p>
                            </div>
                            <div className="d_flex">
                                <HiSun></HiSun>
                                <p className='top-text'>Verify Certificate</p>
                            </div>
                        </div>
                        <div className='top-middile'>
                            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
                        </div>
                        <div className='d_flex'>
                            <IoLogoFacebook className='top-icon'></IoLogoFacebook>
                            <IoLogoTwitter className='top-icon'></IoLogoTwitter>
                            <IoLogoGoogleplus className='top-icon'></IoLogoGoogleplus>
                            <IoLogoLinkedin className='top-icon'></IoLogoLinkedin>
                            <IoLogoInstagram className='top-icon'></IoLogoInstagram>
                            <IoLogoYoutube className='top-icon'></IoLogoYoutube>
                            <IoLogoWhatsapp className='top-icon'></IoLogoWhatsapp>
                        </div>
                    </div>
                </div>
            </div>

            {/*TOP-MENU END */}

            {/* MAIN-MENU START */}
            <div className='container'>
                <div className='d_flex main-menu'>
                    <div className='main-left'>
                        <img src={logo}></img>
                    </div>
                    <div className='main-right'>
                        <ul className='d_flex'>
                            {
                                menu.map((ele, ind, arr) => {
                                    return (
                                        <li key={ind}>{ele}</li>
                                    )

                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* MAIN-MENU END */}

            {/* SLIDER START */}

            <OwlCarousel className='owl-theme' items={1} autoplay autoplayTimeout={2000} loop margin={10} dots={false}>
                {
                    slider1.map((ele) => {
                        return (
                            <div class='item'>
                                <img src={ele}></img>
                            </div>
                        )
                    })
                }
            </OwlCarousel>

            {/* SLIDER END */}

            {/* OFFERED COURCE SECTION START */}
            <div className='spacery container offered'>
                <p className='offered-p'>CREATIVE COURCES
                    <div className='offered-div'></div>
                </p>
                <h1>OFFERED COURSES</h1>
                <div className='d_flex offered-div2'>

                    {
                        offered.map((ele, ind) => {
                            return (
                                // <li key={ind}>{ele}</li>
                                <div key={ind}>
                                    <img src={ele.img}></img>
                                    <h2>{ele.name}</h2>
                                    <div className='d_flex offered-bottom'>
                                        <div>
                                            <i><IoMdStar></IoMdStar></i>
                                            <i><IoMdStar></IoMdStar></i>
                                            <i><IoMdStar></IoMdStar></i>
                                            <i><IoMdStar></IoMdStar></i>
                                            <i><IoMdStarHalf ></IoMdStarHalf ></i>
                                        </div>
                                        <button><a>Know more..!</a></button>
                                    </div>
                                </div>


                            )

                        })
                    }


                </div>

                <button className='offeref-last'><a>View ALL Courses<i><IoIosArrowRoundForward></IoIosArrowRoundForward></i></a></button>


            </div>
            {/* OFFERED COURCE SECTION END */}

            {/* ABOUT US SECTION START */}
            <div className='aboutus'>
                <div className='about-left'>
                    <p className='about-p'>ABOUT US
                        <div className='about-div'></div>
                    </p>
                    <h3>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h3>
                    <p className='about-pp'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                    <button className='about-last'><a>Enroll Now...!</a></button>
                </div>
                <div className='about-right'>
                    <img src={about}></img>
                    <div className='about-div2'></div>
                    <i><IoMdPlayCircle></IoMdPlayCircle></i>
                </div>
            </div>
            {/* ABOUT US SECTION END */}


            {/* KEYBOARD SECTION START */}

            <div className='keyboard speacery'>
                <div className='container2 d_flex'>

                    {
                        student.map((ele, ind) => {
                            return (
                                <div>
                                    <img src={ele.img}></img>
                                    <h1>{ele.num}+</h1>
                                    <h4>{ele.text}</h4>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            {/* KEYBOARD SECTION END */}

            {/* HAPPY STUDENT SECTION START */}
            <div className='container spacery d_flex happy'>
                <div className='happy-left'>
                    <p className='about-p'>HAPPY STUDENT
                        <div className='about-div'></div>
                    </p>
                    <h1>ALUMNI SPEAK</h1>
                    <div className='d_flex happy-flex'>
                        <i className='h-quotes'><PiQuotesFill></PiQuotesFill></i>
                        <div className='h-flex-right'>
                            <i><IoIosArrowBack ></IoIosArrowBack></i>
                            <i><IoIosArrowForward ></IoIosArrowForward></i>
                        </div>
                    </div>
                    <p>web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to.</p>
                    <div className='d_flex happy-bottom'>
                        <div className='happy-b1'>
                            <img src={happyper}></img>
                        </div>
                        <div className='happy-b2'>
                            <h4>TIRTH HIRPARA</h4>
                            <h3 style={{ fontStyle: 'italic', color: 'grey', fontSize: '18px' }}><font style={{ color: 'orange', fontStyle: 'italic' }}>full stack devloper</font>@Artbees solution</h3>
                        </div>
                    </div>
                </div>
                <div className='happy-right'>
                    <img src={happy1} className='happy1'></img>
                    <img src={happy2} className='happy2'></img>
                </div>
            </div>
            {/* HAPPY STUDENT SECTION END */}


            {/* READ OUR DIFFERENCE SECTION START */}

            <div className='read-bg spacery'>
                <div className='pd-y container read'>
                    <p className='read-head'>Read Our Difference
                        <div className='line'></div>
                    </p>
                    <h1>Why Choose Creative</h1>

                    <div className='d_flex flex_wrap read-img'>
                        {
                            read_our.map((ele, ind) => {
                                return (
                                    <div className='read-1 read1'>
                                        <img src={ele.img} style={{backgroundColor:ele.color}}></img>

                                        <h3>{ele.heading}</h3>
                                        <p>{ele.des}</p>
                                    </div>
                                )
                            })

                        }


                    </div>

                </div>
            </div>



            {/* READ OUR DIFFERENCE SECTION END */}

            {/*STUDENT PLACEMENT SECTION START */}
            <div className='student-place spacery container'>
                <p className='student-place-p'>STUDENT PLACEMENT
                    <div className='student-place-div'></div>
                </p>
                <h1>OUR RECRUITMENT PARTNERS</h1>

                <OwlCarousel className='owl-theme' items={6} ClassName='slider2' autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
                    {
                        slider2.map((ele) => {
                            return (
                                <div class='item'>
                                    <img src={ele}></img>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>

              

                <h2>Our Demanded Course -</h2>
                <div className='flex_wrap ancore'>
                    {
                        demand.map((ele,ind)=>{
                            return(
                                <a href=''>{ele}</a>
                            )
                        })
                    }
                 
                </div>
                <h3>Show More</h3>
            </div>
            {/*STUDENT PLACEMENT SECTION END */}

            {/*DEMANDED COURSE SECTION START */}

            <div className=' footer'>
                <div className=' container spacery footer2'>
                    <div className='footer-left'>
                        <img src={lastlogo}></img>
                        <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                        <h3>FOLLOW US ON</h3>
                        <div className='footer_flex'>
                            <IoLogoFacebook className='footer-icon'></IoLogoFacebook>
                            <IoLogoTwitter className='footer-icon'></IoLogoTwitter>
                            <IoLogoGoogleplus className='footer-icon'></IoLogoGoogleplus>
                            <IoLogoLinkedin className='footer-icon'></IoLogoLinkedin>
                            <IoLogoInstagram className='footer-icon'></IoLogoInstagram>
                            <IoLogoYoutube className='footer-icon'></IoLogoYoutube>
                            <IoLogoWhatsapp className='footer-icon'></IoLogoWhatsapp>
                        </div>
                    </div>
                    <div className='footer-center'>
                        <h3>FEATURE LINKS</h3>
                        <ul>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>About Us</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Blogs</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Join Us</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Company Logins</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Certificate verification</li>
                        </ul>
                    </div>
                    <div className='footer-right'>
                        <h3>CONTACT US</h3>
                        <h4>HEAD OFFICE - YOGICHOWK</h4>
                        <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                        <p>Mo :<font style={{ color: '#EAA800' }}> +91 90333 16003</font></p>
                        <h3 style={{ color: '#EAA800' }}>OTHER BRANCHES</h3>
                        <ul>
                            <li><i><BiSolidBank ></BiSolidBank></i>Katargam</li>
                            <li><i><BiSolidBank ></BiSolidBank></i>Motavarachha</li>
                            <li><i><BiSolidBank ></BiSolidBank></i>Adajan</li>
                            <li><i><BiSolidBank ></BiSolidBank></i>Navasari</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='lastsec'>
                <p className='container'>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
            </div>

            {/*DEMANDED COURSE SECTION END */}

        </div>


    );
}

export default App;
