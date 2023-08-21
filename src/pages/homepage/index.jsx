import { Header, Footer } from '../../components';
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Header />


            <section className="hero-section overlay bg-cover" data-background="../../assets/banner/banner-1.jpg">
                <div className="container">
                    <div className="hero-slider">

                        <div className="hero-slider-item">
                            <div className="row">
                                <div className="col-md-8">
                                    <h1 className="text-white" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Your bright future is our mission</h1>
                                    <p className="text-muted mb-4" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor
                                        incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                                    <a href="contact.html" className="btn btn-primary" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slider-item">
                            <div className="row">
                                <div className="col-md-8">
                                    <h1 className="text-white" data-animation-out="fadeOutUp" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".1">Your bright future is our mission</h1>
                                    <p className="text-muted mb-4" data-animation-out="fadeOutUp" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor
                                        incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                                    <a href="contact.html" className="btn btn-primary" data-animation-out="fadeOutUp" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".7">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slider-item">
                            <div className="row">
                                <div className="col-md-8">
                                    <h1 className="text-white" data-animation-out="fadeOutDown" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">Your bright future is our mission</h1>
                                    <p className="text-muted mb-4" data-animation-out="fadeOutDown" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor
                                        incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                                    <a href="contact.html" className="btn btn-primary" data-animation-out="fadeOutDown" data-delay-out="5" data-duration-in=".3" data-animation-in="zoomIn" data-delay-in=".7">Apply now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="bg-gray overflow-md-hidden">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-xl-4 col-lg-5 align-self-end">
                            <img className="img-fluid w-100" src="../../assets/banner/banner-feature.png" alt="banner-feature" />
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="row feature-blocks bg-gray justify-content-between">
                                <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                                    <i className="ti-book mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                                    <h3 className="mb-xl-4 mb-lg-3 mb-4">Scholorship News</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad</p>
                                </div>
                                <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                                    <i className="ti-blackboard mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                                    <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Notice Board</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad</p>
                                </div>
                                <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                                    <i className="ti-agenda mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                                    <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Achievements</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad</p>
                                </div>
                                <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                                    <i className="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                                    <h3 className="mb-xl-4 mb-lg-3 mb-4">Admission Now</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-2 order-md-1">
                            <h2 className="section-title">About Educenter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>
                            <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            <a href="about.html" className="btn btn-outline-primary">Learn more</a>
                        </div>
                        <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                            <img className="img-fluid w-100" src="../../assets/about/about-us.jpg" alt="about image" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="section-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center section-title justify-content-between">
                                <h2 className="mb-0 text-nowrap mr-3">Our Course</h2>
                                <div className="border-top w-100 border-primary d-none d-sm-block"></div>
                                <div>
                                    <a href="courses.html" className="btn btn-sm btn-outline-primary ml-sm-3 d-none d-sm-block">see all</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/courses/course-1.jpg" alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Photography</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/courses/course-2.jpg" alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Programming</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/courses/course-3.jpg" alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Lifestyle Archives</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/courses/course-4.jpg" alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Complete Freelancing</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/courses/course-5.jpg" alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Branding Design</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/courses/course-6.jpg" alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Art Design</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12 text-center">
                            <a href="courses.html" className="btn btn-sm btn-outline-primary d-sm-none d-inline-block">sell all</a>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h6 className="text-white font-secondary mb-0">Click to Join the Advance Workshop</h6>
                            <h2 className="section-title text-white">Training In Advannce Networking</h2>
                            <a href="contact.html" className="btn btn-light">join now</a>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section bg-cover" data-background="../../assets/backgrounds/success-story.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-4 position-relative success-video">
                            <a className="play-btn venobox" href="https://youtu.be/nA1Aqp0sPQo" data-vbtype="video">
                                <i className="ti-control-play"></i>
                            </a>
                        </div>
                        <div className="col-lg-6 col-sm-8">
                            <div className="bg-white p-5">
                                <h2 className="section-title">Success Stories</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center section-title justify-content-between">
                                <h2 className="mb-0 text-nowrap mr-3">Upcoming Events</h2>
                                <div className="border-top w-100 border-primary d-none d-sm-block"></div>
                                <div>
                                    <a href="events.html" className="btn btn-sm btn-outline-primary ml-sm-3 d-none d-sm-block">see all</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="card border-0 rounded-0 hover-shadow">
                                <div className="card-img position-relative">
                                    <img className="card-img-top rounded-0" src="../../assets/events/event-1.jpg" alt="event thumb" />
                                    <div className="card-date"><span>18</span><br />December</div>
                                </div>
                                <div className="card-body">

                                    <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
                                    <a href="event-single.html"><h4 className="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="card border-0 rounded-0 hover-shadow">
                                <div className="card-img position-relative">
                                    <img className="card-img-top rounded-0" src="../../assets/events/event-2.jpg" alt="event thumb" />
                                    <div className="card-date"><span>21</span><br />December</div>
                                </div>
                                <div className="card-body">

                                    <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
                                    <a href="event-single.html"><h4 className="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="card border-0 rounded-0 hover-shadow">
                                <div className="card-img position-relative">
                                    <img className="card-img-top rounded-0" src="../../assets/events/event-3.jpg" alt="event thumb" />
                                    <div className="card-date"><span>23</span><br />December</div>
                                </div>
                                <div className="card-body">

                                    <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
                                    <a href="event-single.html"><h4 className="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <a href="course.html" className="btn btn-sm btn-outline-primary d-sm-none d-inline-block">sell all</a>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h2 className="section-title">Our Teachers</h2>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="card border-0 rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/teachers/teacher-1.jpg" alt="teacher" />
                                <div className="card-body">
                                    <a href="teacher-single.html">
                                        <h4 className="card-title">Jacke Masito</h4>
                                    </a>
                                    <p>Teacher</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a className="text-color" href="https://facebook.com/themefisher"><i className="ti-facebook"></i></a></li>
                                        <li className="list-inline-item"><a className="text-color" href="https://twitter.com/themefisher"><i className="ti-twitter-alt"></i></a></li>
                                        <li className="list-inline-item"><a className="text-color" href="https://github.com/themefisher"><i className="ti-google"></i></a></li>
                                        <li className="list-inline-item"><a className="text-color" href="https://instagram.com/themefisher/"><i className="ti-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="card border-0 rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/teachers/teacher-2.jpg" alt="teacher" />
                                <div className="card-body">
                                    <a href="teacher-single.html">
                                        <h4 className="card-title">Clark Malik</h4>
                                    </a>
                                    <p>Teacher</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a className="text-color" href="https://facebook.com/themefisher"><i className="ti-facebook"></i></a></li>
                                        <li className="list-inline-item"><a className="text-color" href="https://twitter.com/themefisher"><i className="ti-twitter-alt"></i></a></li>
                                        <li className="list-inline-item"><a className="text-color" href="https://github.com/themefisher"><i className="ti-google"></i></a></li>
                                        <li className="list-inline-item"><a className="text-color" href="https://instagram.com/themefisher/"><i className="ti-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="card border-0 rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/teachers/teacher-3.jpg" alt="teacher" />
                                <div className="card-body">
                                    <a href="teacher-single.html">
                                        <h4 className="card-title">John Doe</h4>
                                    </a>
                                    <p>Teacher</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a className="text-color" href="https://facebook.com/themefisher"><i className="ti-facebook"></i></a></li>
                                        <li className="list-inline-item"><a className="text-color" href="https://twitter.com/themefisher"><i className="ti-twitter-alt"></i></a></li>
                                        <li className="list-inline-item"><a className="text-color" href="https://github.com/themefisher"><i className="ti-google"></i></a></li>
                                        <li className="list-inline-item"><a className="text-color" href="https://instagram.com/themefisher/"><i className="ti-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title">Latest News</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/blog/post-1.jpg" alt="Post thumb" />
                                <div className="card-body">

                                    <ul className="list-inline mb-3">

                                        <li className="list-inline-item mr-3 ml-0">August 28, 2018</li>

                                        <li className="list-inline-item mr-3 ml-0">By Somrat Sorkar</li>
                                    </ul>
                                    <a href="blog-single.html">
                                        <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                    </a>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                    <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
                                </div>
                            </div>
                        </article>

                        <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/blog/post-2.jpg" alt="Post thumb" />
                                <div className="card-body">

                                    <ul className="list-inline mb-3">

                                        <li className="list-inline-item mr-3 ml-0">August 13, 2018</li>

                                        <li className="list-inline-item mr-3 ml-0">By Jonathon Drew</li>
                                    </ul>
                                    <a href="blog-single.html">
                                        <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                    </a>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                    <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
                                </div>
                            </div>
                        </article>

                        <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="../../assets/blog/post-3.jpg" alt="Post thumb" />
                                <div className="card-body">

                                    <ul className="list-inline mb-3">

                                        <li className="list-inline-item mr-3 ml-0">August 24, 2018</li>

                                        <li className="list-inline-item mr-3 ml-0">By Alex Pitt</li>
                                    </ul>
                                    <a href="blog-single.html">
                                        <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                    </a>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                    <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    )
}

export default Homepage