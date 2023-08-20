
import bgImage from '../../assets/service_landing.svg';
import { Header, Footer } from '../../components';

const JumboSectionStyle = {
    backgroundImage: `url(${bgImage})`,
}

const ServicePage = () => {
    return (
        <div className="services-bg-color w-100">

            <div className='w-100'>
                <div style={JumboSectionStyle}>
                    <Header />
                    <div className='row'>
                        <div className='col col-lg-7 p-4'>
                            <div className='container-fluid mx-5'>
                                <h1 className='text-heading-XXX'>Innovative Technology & services for better future</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ServicePage