import whiteLogo from '../../assets/white_logo.svg'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div class="container text-center">
            <div class="row justify-content-md-center">
                <div class="col col-lg-4">
                    <row className="d-flex flex-column">
                        <div class="col-lg-8 align-items-start d-flex flex-column">
                            <img src={whiteLogo} class="img-thumbnail logo" alt="..." />
                        </div>
                        <div class="col m-3 align-items-center d-flex flex-column">
                            <p className='text-para'><strong>Contact Us</strong> :      +91-9818325623</p>
                            <p className='text-para'><strong>Email Us</strong> :      info@vparkinc.com</p>
                            {/* <p className='text-para'><strong>        </strong> :      All Rights Reserved</p> */}
                        </div>
                    </row>
                </div>
                <div class="col col-lg-8 d-flex flex-row">
                        <div className='col col-lg-4'>
                            <p className='text-para-big mt-4 mb-4'>Navigation</p>
                            <p className='text-para' onClick={() => navigate('/')}>Home</p>
                            <p className='text-para' onClick={() => navigate('/vision')}>Vision</p>
                            <p className='text-para' onClick={() => navigate('/service')}>Service</p>
                            <p className='text-para'>Contact Us</p>
                        </div>
                        <div className='col col-lg-4'>
                            <p className='text-para-big  mt-4 mb-4'>Products</p>
                            <p className='text-para'>RevvPark</p>
                            <p className='text-para'>Galacto Studio</p>
                        </div>
                        <div className='col col-lg-4'>
                            <p className='text-para-big  mt-4 mb-4'>Services</p>
                            <p className='text-para'>TDS</p>
                            <p className='text-para'>APL</p>
                            <p className='text-para'>Influncer PR</p>
                            <p className='text-para'>Brand PR</p>
                        </div>
                </div>
            </div>
            <div class="row justify-content-md-center mt-5 pb-4">
                <div class="col col-lg-4">
                    <p className='text-para'>© Copyright <strong>VP Ark</strong>. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer