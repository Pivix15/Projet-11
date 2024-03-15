import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sign from '@/pages/Auth/Sign';


const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Sign />} />

            <Route path='sign' element={<Sign />} />
        </Routes>
    );
};

export default AuthRouter;