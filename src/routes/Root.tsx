import { Route, Routes, useLocation } from "react-router-dom"
import { Home } from "../screens/home/Home"
import { AboutMe } from "../screens/about/AboutMe"
import { Projects } from "../screens/projects/Projects"
import { Contact } from "../screens/contact/Contact"

const pages = [
    "",
    "home",
    "about-me",
    "projects",
    "contact",
  ];

export const Root = () => {
    const { pathname } = useLocation();
    const wrongPathname = !pages.includes(pathname.split("/")[1]);

    if (wrongPathname) {
    //   return <ErrorPage />;
      return <div>Error page!</div>;
    }

    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/about-me"} element={<AboutMe />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/contact"} element={<Contact />} />
        </Routes>
    )
}
