import { useEffect,useState } from "react";
import { useLocation, Link } from "react-router-dom";
import whiteLogo from '../../assets/logo-white.png'

const TopHeader = () => {

    return (
        <div className="top-header py-2 bg-white">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-4 text-center text-lg-left">
                        <a className="text-color mr-3" href="tel:+919818325623"><strong>CALL</strong> +91 981 832 5623</a>
                        <ul className="list-inline d-inline">
                            <li className="list-inline-item mx-0"><a target="_blank" className="d-inline-block p-2 text-color" href="https://www.facebook.com/profile.php?id=100077465478257"><i className="ti-facebook"></i></a></li>
                            <li className="list-inline-item mx-0"><a target="_blank" className="d-inline-block p-2 text-color" href="https://in.linkedin.com/company/vp23ark"><i className="ti-linkedin"></i></a></li>
                            <li className="list-inline-item mx-0"><a target="_blank" className="d-inline-block p-2 text-color" href="https://instagram.com/vp23ark/"><i className="ti-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-8 text-center text-lg-right">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="notice">Notice</a></li>
                            <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="career">Career</a></li>
                            <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="scholarship">SCHOLARSHIP</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const BaseHeader = ({active}) => {

    const navItemActiveClass = (name) => {
        if (name === active) {
            return 'nav-item active'
        } else {
            return 'nav-item'
        }
    }

    return (
        <div className="navigation w-100">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark p-0">
                    <Link className="navbar-brand" to="/"><img src={whiteLogo} alt="logo" /></Link>
                    <button className="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation"
                        aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navigation">
                        <ul className="navbar-nav ml-auto text-center">
                            <li className={ navItemActiveClass('/') } >
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className={ navItemActiveClass('/vision') } >
                                <a className="nav-link" href="vision">Vision</a>
                            </li>
                            <li className={ navItemActiveClass('/technologies') } >
                                <a className="nav-link" href="technologies">Technologies</a>
                            </li>
                            <li className={ navItemActiveClass('/services') } >
                                <a className="nav-link" href="services">Services</a>
                            </li>
                            <li className={ navItemActiveClass('/blogs') } >
                                <a className="nav-link" href="blogs">BLOG</a>
                            </li>
                            <li className={ navItemActiveClass('/contact') } >
                                <a className="nav-link" href="contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}


const Header = () => {
    const location = useLocation();
    const [active, setActive] = useState('/')
    useEffect(() => {
        setActive(location.pathname)
    }, [location]);

    return (
        <header className="fixed-top header">
            <TopHeader />
            <BaseHeader active={active} />
        </header>

    )
}

export default Header