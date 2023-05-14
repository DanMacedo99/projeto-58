import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {

    return(

        <Routes>
        <Route path="/pagina-inicial" element={<p>Páginal inicial</p>}></Route>
        <Route path="*" element={<Navigate to="/pagina-inicial"/>}></Route>
        </Routes>
    )
}