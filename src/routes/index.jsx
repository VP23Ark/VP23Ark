import { createBrowserRouter } from "react-router-dom";
import {
    Vision,
    Services,
    Notice,
    Homepage,
    Blog,
    BlogDetail,
    Contact,
    Technologies,
    ServiceDetail,
    TechnologyDetail,
    Scholarship,
    Career
} from '../pages';

const childBlogPages = [
    {
        path: "messages",
        element: <BlogDetail />,
    }
]

const childServicePages = [
    {
        path: "service-detail",
        element: <ServiceDetail />,
    }
]

const childTechnologyPages = [
    {
        path: "messages",
        element: <TechnologyDetail />,
    }
]

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/vision",
        element: <Vision />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/technologies",
        element: <Technologies />,
        children: childTechnologyPages
    },
    {
        path: "/services",
        element: <Services />,
        children: childServicePages
    },
    {
        path: "/blogs",
        element: <Blog />,
        children: childBlogPages
    },
    {
        path: "/notice",
        element: <Notice />,
    },
    {
        path: "/career",
        element: <Career />,
    },
    {
        path: "/scholarship",
        element: <Scholarship />,
    },
]);

export default Router
