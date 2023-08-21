import { Header, Footer, PageTitleSection } from '../../components';

const Scholarship = () => {
    return (
        <div>
            <Header />

            <PageTitleSection />

            <section className="section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img className="img-fluid" src="images/scholarship/scholarship.jpg" alt="scholarship news" />
                        </div>
                        <div className="col-md-6">
                            <h2>SCHOLARSHIPS NEWS</h2>
                            <strong className="mb-4 d-block"><i>Our campuses are living laboratories for sustainability.</i></strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore
                                et.dolore magna aliquauis aute irure dolor.
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor, sit
                                amet consectetur adipisicing elit. Quas cum ut ab nesciunt distinctio maxime expedita fugit laborum? Aliquid,
                                quia.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            <div className="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
                                <img className="card-img-top rounded-0" src="images/scholarship/scholarship-item-1.jpg" alt="scholarship-thumb" />
                                <div className="card-body">
                                    <p className="mb-1">Engineering</p>
                                    <h4 className="card-title mb-3">CHEMICAL ENGINEERING</h4>
                                    <ul className="list-styled">
                                        <li>institutes</li>
                                        <li>Smart-affiliated research</li>
                                        <li>Digital Access to Scholarship</li>
                                        <li>Smart Catalyst</li>
                                        <li>Smart Library Portal</li>
                                        <li>Smart research programs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            <div className="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
                                <img className="card-img-top rounded-0" src="images/scholarship/scholarship-item-2.jpg" alt="scholarship-thumb" />
                                <div className="card-body">
                                    <p className="mb-1">Design & Arts</p>
                                    <h4 className="card-title mb-3">MUSIC & ARTS</h4>
                                    <ul className="list-styled">
                                        <li>institutes</li>
                                        <li>Smart-affiliated research</li>
                                        <li>Digital Access to Scholarship</li>
                                        <li>Smart Catalyst</li>
                                        <li>Smart Library Portal</li>
                                        <li>Smart research programs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            <div className="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
                                <img className="card-img-top rounded-0" src="images/scholarship/scholarship-item-3.jpg" alt="scholarship-thumb" />
                                <div className="card-body">
                                    <p className="mb-1">Design & Arts</p>
                                    <h4 className="card-title mb-3">GRAPHICS DESIGN</h4>
                                    <ul className="list-styled">
                                        <li>institutes</li>
                                        <li>Smart-affiliated research</li>
                                        <li>Digital Access to Scholarship</li>
                                        <li>Smart Catalyst</li>
                                        <li>Smart Library Portal</li>
                                        <li>Smart research programs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Scholarship