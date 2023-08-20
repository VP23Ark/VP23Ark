import whiteLogo from '../../assets/white_logo.svg'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="container text-center">
            <div className="row justify-content-md-center">
                <div className="col col-lg-3" onClick={() => navigate('/')}>
                    <img src={whiteLogo} className="img-thumbnail logo" alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default Header