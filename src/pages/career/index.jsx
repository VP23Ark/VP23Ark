import { Header, Footer, PageTitleSection } from '../../components';
import careerData from '../../data/career';

const Career = () => {

    const jobs = careerData();

    return (
        <div>
            <Header />

            <PageTitleSection
                PageTitle={"Join Our Team at VP Ark"}
                PageDesc={"Embark on a journey of innovation and growth with VP Ark. Explore exciting opportunities to be a part of a team that creates meaningful solutions in the world of technology."}
            />

            <section className="section">
                <div className="container">
                    <div className="row">

                        {
                            jobs.map((job, index) => {
                                return (<div key={index} className="col-lg-4 col-sm-6 mb-4">
                                    <div className="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
                                        <img className="card-img-top rounded-0" src={job.imageUrl} alt="research thumb" />
                                        <div className="card-body">
                                            <h4 className="card-title">{job.title}</h4>
                                            <p className="card-text">
                                                {job.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>)
                            })
                        }

                    </div>
                </div>
            </section>




            <Footer />
        </div>
    )
}

export default Career