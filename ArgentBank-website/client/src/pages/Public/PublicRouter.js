import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Layout, Home } from "@/pages/Public"
import Sign from '@/pages/Auth/Sign.js';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path='home' element={<Home />} />
                <Route path='sign' element={<Sign />}/>
            </Route>
        </Routes>
    );
};

export default PublicRouter;