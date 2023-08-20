import bgImage from '../../assets/homepage_landing.svg';
import bgBaseImage from '../../assets/base.svg';
import { Header, Footer } from '../../components';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from "react-router-dom";

const JumboSectionStyle = {
    backgroundImage: `url(${bgImage})`,
    //overflow: 'visible',
    backgroundSize: 'cover',
    backgroundRepeat: 'round',
    height: '100%',
}

const middleSectionStyle = {
    backgroundImage: `url(${bgBaseImage})`,
    //overflow: 'visible',
}


const Homepage = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 425px)` });
    const isTablet = useMediaQuery({ query: `(max-width: 768px)` });
    const isDesktop = useMediaQuery({ query: `(max-width: 2560px)` });
    const navigate = useNavigate();

    console.log("is Mobile", isMobile);
    console.log("is Tablet", isTablet);
    console.log("is Desktop", isDesktop);

    return (
        <div className="w-100 homepage-bg-color">
            <Header />
            <div className='w-100'>
                <div style={JumboSectionStyle}>
                    <div className='row flex-column'>
                        <div className='col col-lg-7 col-md-12 col-sm-12 p-4'>
                            <div className={`container-fluid ${isMobile ? '' : 'mx-5'}`}>
                                <h1 className={`${isMobile ? 'text-heading-x' : 'text-heading-xxx'}`}>Innovative Technology & services for better future</h1>
                            </div>
                        </div>
                        <div className='col col-lg-7 col-md-12 col-sm-12'>
                            <div className={`container-fluid ${isMobile ? '' : 'mx-5'}`}>
                                <p className={`${isMobile ? 'text-para-x' : 'text-para-xx'}`}>
                                    Our mission is to help businesses and individuals thrive in a rapidly changing world by providing innovative technology and services that improve efficiency, increase productivity, and reduce costs. Contact us today to learn more about how we can help your organization achieve its goals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className="d-grid gap-1 col-lg-2 col-md-4 col-sm-6 offset-1">
                            <button className="btn btn-primary btn-lg btn-text" type="button">Let's Begin</button>
                        </div>
                    </div>

                </div>
            </div>


            <div style={middleSectionStyle}>
                <div className='row mt-5' id='vision'>
                    <div className={`container-fluid d-flex ${isMobile ? '' : 'mx-5'}`}>
                        <div className='col col-lg-5 mx-5'>
                            <p className={`text-heading-x`}>
                                Our Vision
                            </p>
                            <p className={`text-para-x`}>
                                We as VPArk believe in making dreams come true, with work ethics never seen or experienced before. Our methods are majorly focused on what the customer desires and we align their vision to our objective. We ensure in making sense with what we understand, audit, document, discuss, deliver & deliver. VPArk promises to keep the business relation healthy and steady with continuous effort of matching the expectations of the clients.Our prime vision is to be a place where dreams become reality.  <strong><span onClick={() => navigate('/vision')}>Read More</span></strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row mt-5' id='who-we-are'>
                    <div className={`container-fluid d-flex justify-content-end ${isMobile ? '' : 'me-5'}`}>
                        <div className='col col-lg-5 me-5'>
                            <p className={`text-heading-x`}>
                                Who we are ?
                            </p>
                            <p className={`text-para-x`}>
                                A technology and services company called VPArk drives with passion of delivering our clients with transforming and executing their digital initiatives globally.  Our creative work culture & team members full of innovative ideas makes collaborations with clients easy yet extraordinary. We believe in laying emphasis on organised architecture, cloud computing, superior designs, better user experience & interface in order to meet the business objectives of our customers. It’s basically a room full of creative minds where ideas are born and bred till they become achievements.  <strong><span onClick={() => navigate('/about')}>Read More</span></strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row' id='what-we-do'>
                    <div className={`container-fluid d-flex ${isMobile ? '' : 'mx-5'}`}>
                        <div className='col col-lg-5 mx-5'>
                            <p className={`text-heading-x`}>
                                What we do ?
                            </p>
                            <p className={`text-para-x`}>
                                Expand the opportunities that mobile devices offer. We can meet or beat your deadline whether you require an app or an enterprise mobility solution. Every project we embark on starts with design, and producing outstanding UI has always been our main priority. We're always looking for creative methods to beat our own design standards. Send us the design problem you have. Whether transforming existing systems or beginning from scratch, the cloud demands a knowledgeable partner with experience. We will collaborate with your company to integrate the cloud into your IT strategy. <strong><span onClick={() => navigate('/service')}>Read More</span></strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row' id='contact'>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Homepage