import { Header, Footer } from '../../components';
import { Link } from "react-router-dom";
import banner1 from '../../assets/banner/banner-1.jpg';
import bannerFeature from '../../assets/banner/banner-feature.png'
import successBack from '../../assets/backgrounds/success-story.jpg'
import AboutImg from '../../assets/about/about-us.jpg'
import serviceData from '../../data/services';
import technologyData from '../../data/technologies';
import blogData from '../../data/blogs';

const Homepage = () => {

    const services = serviceData();
    const technologies = technologyData();
    const blogs = blogData();

    return (
        <div>
            <Header />


            <section className="hero-section overlay bg-cover"
                style={{
                    backgroundImage: `url(${banner1})`,
                }}
            >
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
                                    <Link to="contact" className="btn btn-primary" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">Apply now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <div className="hero-slider-item">
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
                        </div> */}
                    </div>
                </div>
            </section>



            <section className="bg-gray overflow-md-hidden">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-xl-4 col-lg-5 align-self-end">
                            <img className="img-fluid w-100" src={bannerFeature} alt="banner-feature" />
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
                            <Link to="vision" className="btn btn-outline-primary">Learn more</Link>
                        </div>
                        <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                            <img className="img-fluid w-100" src={AboutImg} alt="about image" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="section-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center section-title justify-content-between">
                                <h2 className="mb-0 text-nowrap mr-3">Our Services</h2>
                                <div className="border-top w-100 border-primary d-none d-sm-block"></div>
                                <div>
                                    <Link to="/services" className="btn btn-sm btn-outline-primary ml-sm-3 d-none d-sm-block">see all</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">

                        {
                            services.map((service,index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-sm-6 mb-5">
                                        <div className="card p-0 border-primary rounded-0 hover-shadow">
                                            <img className="card-img-top rounded-0" src={service.imageUrl} alt="course thumb" />
                                            <div className="card-body">
                                                <ul className="list-inline mb-2">
                                                    <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>{service.type}</li>
                                                    <li className="list-inline-item"><Link className="text-color" to={service.link}>{service.name}</Link></li>
                                                </ul>
                                                <Link to={service.link}>
                                                    <h4 className="card-title">{service.name}</h4>
                                                </Link>
                                                <p className="card-text mb-4">{service.title}</p>
                                                <Link to={service.link} className="btn btn-primary btn-sm">{service.ctaText}</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>



            <section className="section bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h6 className="text-white font-secondary mb-0">Click to Join the Advance Workshop</h6>
                            <h2 className="section-title text-white">Training In Advannce Networking</h2>
                            <Link to="contact" className="btn btn-light">join now</Link>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section bg-cover"
                style={{
                    backgroundImage: `url(${successBack})`,
                }}
            >
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
                                <h2 className="mb-0 text-nowrap mr-3">Technologies</h2>
                                <div className="border-top w-100 border-primary d-none d-sm-block"></div>
                                <div>
                                    <Link to="technologies" className="btn btn-sm btn-outline-primary ml-sm-3 d-none d-sm-block">see all</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">


                        {
                            technologies.map((tech,index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                        <div className="card border-0 rounded-0 hover-shadow">
                                            <div className="card-img position-relative">
                                                <img className="card-img-top rounded-0" src={tech.imageUrl} alt="event thumb" />
                                                <div className="card-date"><span>{tech.spanText}</span><br /></div>
                                            </div>
                                            <div className="card-body">

                                                <p><i className="ti-location-pin text-primary mr-2"></i>{tech.title}</p>
                                                <Link to={tech.link}><h4 className="card-title">{tech.description}</h4></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>



            {/* <section className="section">
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
            </section> */}



            <section className="section mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center section-title justify-content-between">
                                <h2 className="mb-0 text-nowrap mr-3">Latest News</h2>
                                <div className="border-top w-100 border-primary d-none d-sm-block"></div>
                                <div>
                                    <Link to="blogs" className="btn btn-sm btn-outline-primary ml-sm-3 d-none d-sm-block">see all</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        {blogs.map((blog,index) => {
                            return (<article key={index} className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                    <img className="card-img-top rounded-0" src={blog.imageUrl} alt="Post thumb" />
                                    <div className="card-body">

                                        <ul className="list-inline mb-3">

                                            <li className="list-inline-item mr-3 ml-0">{blog.date}</li>

                                            <li className="list-inline-item mr-3 ml-0">By {blog.author}</li>
                                        </ul>
                                        <Link to={blog.link}>
                                            <h4 className="card-title">{blog.title}</h4>
                                        </Link>
                                        <p className="card-text">{blog.description}</p>
                                        <Link to={blog.link} className="btn btn-primary btn-sm">read more</Link>
                                    </div>
                                </div>
                            </article>)
                        })}

                    </div>
                </div>
            </section>



            <Footer />
        </div>
    )
}

export default Homepage