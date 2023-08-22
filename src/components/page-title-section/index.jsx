import { Link } from "react-router-dom";
import PageTitleDefaultImage from '../../assets/backgrounds/page-title.jpg'

const PageTitleSection = ({ PageTitle, PageDesc, PageImage = "" }) => {
    const sectionImage = PageImage === "" ? PageTitleDefaultImage : PageImage

    return (
        <section className="page-title-section overlay" style={{
            backgroundImage:
                `url(${sectionImage})`,
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <ul className="list-inline custom-breadcrumb mb-2">
                            <li className="list-inline-item"><Link className="h2 text-primary font-secondary" to="/">Home</Link></li>
                            <li className="list-inline-item text-white h3 font-secondary nasted">{PageTitle}</li>
                        </ul>
                        <p className="text-lighten mb-0">{PageDesc}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitleSection