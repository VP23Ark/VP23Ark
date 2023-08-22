import { Link } from 'react-router-dom';
import { Header, Footer, PageTitleSection } from '../../components';
import blogData from '../../data/blogs';

const Blog = () => {

    const blogs = blogData();


    return (
        <div>
            <Header />
            <PageTitleSection 
                PageTitle={"Sensible Bytes: VP Ark's Insight"} 
                PageDesc={"Dive into the the world of technology, innovation and business strategy with our blog. Explore thought provoking articles that make sense of the evolving digital landscape."} 
            />
            <section className="section">
                <div className="container">
                    <div className="row">

                    {blogs.map((blog,index) => {
                            return (<article key={index} className="col-lg-4 col-sm-6 mb-5">
                                <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                    <img className="card-img-top rounded-0" src={blog.imageUrl} alt="Post thumb" />
                                    <div className="card-body">

                                        <ul className="list-inline mb-3">

                                            <li className="list-inline-item mr-3 ml-0">{blog.date}</li>

                                            <li className="list-inline-item mr-3 ml-0">By {blog.author}</li>
                                        </ul>
                                        <Link to={blog.link}>
                                            <h4 className="card-title">{blog.title}</h4>
                                        </Link>
                                        <p className="card-text">{blog.description}</p>
                                        <Link to={blog.link} className="btn btn-primary btn-sm">read more</Link>
                                    </div>
                                </div>
                            </article>)
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Blog