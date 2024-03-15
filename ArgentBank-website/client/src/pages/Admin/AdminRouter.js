import React from 'react';
import { Routes, Route } from "react-router-dom"
import { ALayout, Dashboard } from '@/pages/Admin'
import { User, UEdit } from '@/pages/Admin/User'


const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route index element={<Dashboard/>} />
                <Route path='dashboard' element={<Dashboard/>} />
                <Route path='user'>
                    <Route path='index' element={<User/>} />
                    <Route path='edit' element={<UEdit/>} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AdminRouter;