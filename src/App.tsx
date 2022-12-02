import React from 'react';
import { Provider as ReduxProvider} from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { store } from 'core/store';
import { Layout } from 'core/components/Layout';
import { Map } from 'modules/maps/pages/Map';
import { locomotiveRoutes } from 'modules/locomotives/routes';

import "./App.scss";

function App() {
    return (
        <ReduxProvider store={store}>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Navigate to="/locomotives" />}/>
                        {locomotiveRoutes()}
                        <Route path="maps">
                            <Route path="" element={<Map />} />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </ReduxProvider>
    );
}

export default App;
