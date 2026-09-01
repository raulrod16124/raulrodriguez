import { lazy, Suspense } from "react"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import { PageSkeleton } from "../components/shared/skeleton"

const Home = lazy(() => import("../screens/home/Home").then(m => ({ default: m.Home })))
const Experience = lazy(() => import("../screens/experience/Experience").then(m => ({ default: m.Experience })))
const Expertise = lazy(() => import("../screens/expertise/Expertise").then(m => ({ default: m.Expertise })))
const Contact = lazy(() => import("../screens/contact/Contact").then(m => ({ default: m.Contact })))

export const Root = () => {
    const location = useLocation()

    return (
        <Suspense fallback={<PageSkeleton pathname={location.pathname} />}>
            <div className="page-container" key={location.pathname}>
                <Routes location={location}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/home"} element={<Home />} />
                    <Route path={"/experience"} element={<Experience />} />
                    <Route path={"/expertise"} element={<Expertise />} />
                    <Route path={"/contact"} element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" replace={true} />} />
                </Routes>
            </div>
        </Suspense>
    )
}
