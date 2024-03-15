import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header'

const ALayout = () => {
    return (
        <div className="ALayout">
            <Header />
            <Outlet />
        </div>
    );
};

export default ALayout;