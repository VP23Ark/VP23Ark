import { Header, Footer,PageTitleSection } from '../../components';

const Blog = () => {
    return (
        <div>
            <Header />


            <PageTitleSection />



            <section className="section">
                <div className="container">
                    <div className="row">

                        <article className="col-lg-4 col-sm-6 mb-5">
                            <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="images/blog/post-1.jpg" alt="Post thumb" />
                                <div className="card-body">

                                    <ul className="list-inline mb-3">

                                        <li className="list-inline-item mr-3 ml-0">August 28, 2018</li>

                                        <li className="list-inline-item mr-3 ml-0">By Somrat Sorkar</li>
                                    </ul>
                                    <a href="blog-single.html">
                                        <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                    </a>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                    <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
                                </div>
                            </div>
                        </article>

                        <article className="col-lg-4 col-sm-6 mb-5">
                            <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="images/blog/post-2.jpg" alt="Post thumb" />
                                <div className="card-body">

                                    <ul className="list-inline mb-3">

                                        <li className="list-inline-item mr-3 ml-0">August 13, 2018</li>

                                        <li className="list-inline-item mr-3 ml-0">By Jonathon Drew</li>
                                    </ul>
                                    <a href="blog-single.html">
                                        <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                    </a>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                    <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
                                </div>
                            </div>
                        </article>

                        <article className="col-lg-4 col-sm-6 mb-5">
                            <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="images/blog/post-3.jpg" alt="Post thumb" />
                                <div className="card-body">

                                    <ul className="list-inline mb-3">

                                        <li className="list-inline-item mr-3 ml-0">August 24, 2018</li>

                                        <li className="list-inline-item mr-3 ml-0">By Alex Pitt</li>
                                    </ul>
                                    <a href="blog-single.html">
                                        <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                    </a>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                    <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
                                </div>
                            </div>
                        </article>

                        <article className="col-lg-4 col-sm-6 mb-5">
                            <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="images/blog/post-1.jpg" alt="Post thumb" />
                                <div className="card-body">

                                    <ul className="list-inline mb-3">

                                        <li className="list-inline-item mr-3 ml-0">August 28, 2018</li>

                                        <li className="list-inline-item mr-3 ml-0">By Somrat Sorkar</li>
                                    </ul>
                                    <a href="blog-single.html">
                                        <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                    </a>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                    <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
                                </div>
                            </div>
                        </article>

                        <article className="col-lg-4 col-sm-6 mb-5">
                            <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="images/blog/post-2.jpg" alt="Post thumb" />
                                <div className="card-body">

                                    <ul className="list-inline mb-3">

                                        <li className="list-inline-item mr-3 ml-0">August 13, 2018</li>

                                        <li className="list-inline-item mr-3 ml-0">By Jonathon Drew</li>
                                    </ul>
                                    <a href="blog-single.html">
                                        <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                    </a>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                    <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
                                </div>
                            </div>
                        </article>

                        <article className="col-lg-4 col-sm-6 mb-5">
                            <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                <img className="card-img-top rounded-0" src="images/blog/post-3.jpg" alt="Post thumb" />
                                <div className="card-body">

                                    <ul className="list-inline mb-3">

                                        <li className="list-inline-item mr-3 ml-0">August 24, 2018</li>

                                        <li className="list-inline-item mr-3 ml-0">By Alex Pitt</li>
                                    </ul>
                                    <a href="blog-single.html">
                                        <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                    </a>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                    <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default Blog