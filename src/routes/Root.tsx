import { lazy, Suspense } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

const Home = lazy(() => import("../screens/home/Home").then(m => ({ default: m.Home })))
const Experience = lazy(() => import("../screens/experience/Experience").then(m => ({ default: m.Experience })))
const Expertise = lazy(() => import("../screens/expertise/Expertise").then(m => ({ default: m.Expertise })))
const Contact = lazy(() => import("../screens/contact/Contact").then(m => ({ default: m.Contact })))

const LoadingFallback = () => null

export const Root = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/home"} element={<Home />} />
                <Route path={"/experience"} element={<Experience />} />
                <Route path={"/expertise"} element={<Expertise />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
        </Suspense>
    )
}
