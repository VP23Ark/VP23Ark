
import { Link } from 'react-router-dom';
import { Header, Footer, PageTitleSection } from '../../components';
import serviceData from '../../data/services';


const Services = () => {

  const services = serviceData();

  return (
    <div>
      <Header />
      <PageTitleSection
        PageTitle={"Crafting Digital Excellence: Our Services"}
        PageDesc={"Discover how VP Ark's diverse range of services, from bespoke software solutions to captivating marketing strategies under Galactomedia, can elevate your brand's online presence."}
      />
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">

            {
              services.map((service, index) => {
                return (
                  <div key={index} className="col-lg-4 col-sm-6 mb-5">
                    <div className="card p-0 border-primary rounded-0 hover-shadow">
                      <img className="card-img-top rounded-0" src={service.imageUrl} alt="course thumb" />
                      <div className="card-body">
                        <ul className="list-inline mb-2">
                          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>{service.type}</li>
                          <li className="list-inline-item"><Link className="text-color" to={service.link}>{service.name}</Link></li>
                        </ul>
                        <Link to={service.link}>
                          <h4 className="card-title">{service.name}</h4>
                        </Link>
                        <p className="card-text mb-4">{service.title}</p>
                        <Link to={service.link} className="btn btn-primary btn-sm">{service.ctaText}</Link>
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

export default Services