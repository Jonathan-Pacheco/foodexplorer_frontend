import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { ManageDishes } from "../pages/ManageDishes";

export function AppRoutes() {

    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/managedishes" element={<ManageDishes />} />
        <Route path="/managedishes/:id" element={<ManageDishes />} />
        </Routes>
    )
}
