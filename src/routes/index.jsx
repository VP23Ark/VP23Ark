import { createBrowserRouter } from "react-router-dom";
import {
    Vision,
    ServicePage,
    Landing,
    Homepage,
    Blog,
    BlogDetail
} from '../pages';

const ChildBlogPages = [
    {
        path: "messages",
        element: <BlogDetail />,
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
        path: "/service",
        element: <ServicePage />,
    },
    {
        path: "/landing",
        element: <Landing />,
    },
    {
        path: "/blogs",
        element: <Blog />,
        children: ChildBlogPages
    },
]);

export default Router
