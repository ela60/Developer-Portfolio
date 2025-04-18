import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "@/pages/Home/Home";
import ErrorPage from "@/pages/ErrorPage";
import About from "@/components/About";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skill";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home  />,
            },
            {
                path: "/about",
                element: <About/> ,
            },  {
                path: "/projects",
                element: <ProjectShowcase />,
            },
            {
                path: "/skills",
                element: <Skills/>,
            },
            {
                path: "/contact",
                element: <h1>Contact</h1>,
            },
        ]
        
    },
    {
        path: '*',
        element: <ErrorPage />
    }
   
]);

export default Router;
