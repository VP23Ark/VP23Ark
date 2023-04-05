import whiteLogo from '../../assets/white_logo.svg'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div class="container text-center">
            <div class="row justify-content-md-center">
                <div class="col col-lg-3" onClick={() => navigate('/')}>
                    <img src={whiteLogo} class="img-thumbnail logo" alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default Header