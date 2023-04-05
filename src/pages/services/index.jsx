
import bgImage from '../../assets/service_landing.svg';
import { Header, Footer } from '../../components';

const JumboSectionStyle = {
    backgroundImage: `url(${bgImage})`,
}

const ServicePage = () => {
    return (
        <div className="container-fluid services-bg-color">
            <div style={JumboSectionStyle}>
            <Header />
                <div className='row'>
                    <div className='col col-lg-7 p-4'>
                        <div className='container-fluid mx-5'>
                            <h1 className='text-heading-big'>Innovative Technology & services for better future</h1>
                        </div>
                    </div>
                    <div className='col col-lg-6'>
                        <div className='container-fluid mx-5'>
                            <p className='text-para-big'>
                                Our mission is to help businesses and individuals thrive in a rapidly changing world by providing innovative technology and services that improve efficiency, increase productivity, and reduce costs. Contact us today to learn more about how we can help your organization achieve its goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ServicePage