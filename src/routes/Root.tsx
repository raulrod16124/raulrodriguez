import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage } from "../screens/home/HomePage"
import { useHashScroll } from "../hooks/useHashScroll"

export const Root = () => {
    useHashScroll()

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/#home" replace />} />
            <Route path="/experience" element={<Navigate to="/#experience" replace />} />
            <Route path="/expertise" element={<Navigate to="/#what-i-do" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
