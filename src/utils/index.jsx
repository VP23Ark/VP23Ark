import { useNavigate } from "react-router-dom";

const navigateTo = (pathName) => {
    const navigate = useNavigate();
    navigate(`/${pathName}`);
}

export {
     navigateTo
    }