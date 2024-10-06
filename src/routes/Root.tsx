import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../screens/home/Home"
import { AboutMe } from "../screens/about/AboutMe"
import { Projects } from "../screens/projects/Projects"
import { Contact } from "../screens/contact/Contact"

export const pages = [
  "",
  "home",
  "about-me",
  "projects",
  "contact",
];

export const Root = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/about-me"} element={<AboutMe />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
