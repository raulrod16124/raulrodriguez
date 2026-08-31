import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../screens/home/Home"
import { Experience } from "../screens/experience/Experience"
import { Expertise } from "../screens/expertise/Expertise"
import { Contact } from "../screens/contact/Contact"

export const Root = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/experience"} element={<Experience />} />
            <Route path={"/expertise"} element={<Expertise />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    )
}
