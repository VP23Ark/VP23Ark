
import { Link } from 'react-router-dom';
import { Header, Footer, PageTitleSection } from '../../components';
import technologyData from '../../data/technologies';


const Technologies = () => {

  const technologies = technologyData();

  return (
    <div>
      <Header />
      <PageTitleSection
        PageTitle={"Empowering through Technology"}
        PageDesc={"Explore the cutting-edge technologies that power VP Ark's solutions. We leverage these tools to turn vision into reality, ensuring your business make sense in the digital world"}
      />
      <section className="section">
        <div className="container">
          <div className="row">
            {
              technologies.map((tech, index) => {
                return (
                  <div key={index} className="col-lg-4 col-sm-6 mb-5">
                    <div className="card border-0 rounded-0 hover-shadow">
                      <div className="card-img position-relative">
                        <img className="card-img-top rounded-0" src={tech.imageUrl} alt="event thumb" />
                        <div className="card-date"><span>{tech.spanText}</span><br /></div>
                      </div>
                      <div className="card-body">

                        <p><i className="ti-location-pin text-primary mr-2"></i>{tech.title}</p>
                        <Link to={tech.link}><h4 className="card-title">{tech.description}</h4></Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Technologies