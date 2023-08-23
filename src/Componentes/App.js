import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navegacion from "./Main";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navegacion />}>
                        <Route index element={<Navegacion />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
