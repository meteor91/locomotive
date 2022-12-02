import React from 'react';
import { Route } from 'react-router-dom';
import { LocomotivesList } from './pages/LocomotivesList';
import { LocomotiveCreate } from './pages/LocomotiveCreate';
import { LocomotiveDetails } from './pages/LocomotiveDetails';
import { LocomotiveEdit } from './pages/LocomotiveEdit';
import { routeMap } from './routeMap';

export const locomotiveRoutes = () => {
    return [
        <Route path={routeMap.list} element={<LocomotivesList />} />,
        <Route path={routeMap.create} element={<LocomotiveCreate />} />,
        <Route path={routeMap.edit} element={<LocomotiveEdit />} />,
        <Route path={routeMap.detail} element={<LocomotiveDetails />} />,
    ]
}