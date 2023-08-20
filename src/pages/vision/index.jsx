import bgImage from '../../assets/vision_landing.svg';
import { Header, Footer } from '../../components';

const JumboSectionStyle = {
    backgroundImage: `url(${bgImage})`,
}

const Vision = () => {
    return (
        <div className="w-100 vision-bg-color">
            <div className='w-100'>
                <div style={JumboSectionStyle}>
                    <Header />
                    <div className='row mt-5'>
                        <div className='col col-lg-7 p-4'>
                            <div className='container-fluid mx-5'>
                                <h1 className='text-heading-xxx'>Move Into Future With Us</h1>
                            </div>
                        </div>
                        <div className='col col-lg-6 mt-3'>
                            <div className='container-fluid mx-5'>
                                <p className='text-para-xx'>
                                    We help shape your ideas and turn them into real <strong>BUSINESSES</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className="d-grid gap-1 col-lg-2 col-md-4 col-sm-6 mx-5">
                            <button className="btn btn-primary btn-md btn-text" type="button">Let's Begin</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Vision