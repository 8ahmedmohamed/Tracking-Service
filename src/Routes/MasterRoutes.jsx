import React, { lazy, useState, useEffect } from 'react';

// React Router
import { useRoutes } from 'react-router-dom';

// Routes
import RoutesList from './Routes.json';

// Layouts
const Container = lazy(() => import("../Container/Container"));
const Home = lazy(() => import("../Layouts/Pages/Home/Home"));

const MasterRoutes = () => {
    const Path = '/';
    const [pages, setPages] = useState({});
    const [routesData, setRoutesData] = useState([]);

    // Get Lazy Components
    useEffect(() => {
        if (RoutesList.PAGE?.length) {
            const pages = {};
            for (let Index = 0; Index < RoutesList.PAGE.length; Index++) {
                const Page = RoutesList.PAGE[Index];
                pages[Page.NAME] = lazy(() => import(`../Layouts/Pages/${Page.REACT_PATH}`));
            }
            setPages(pages);
        }
    }, []);

    // Get Routes
    useEffect(() => {
        if (RoutesList.PAGE?.length && Object.keys(pages).length) {
            const routesData = [];
            for (let Index = 0; Index < RoutesList.PAGE.length; Index++) {
                const Page = RoutesList.PAGE[Index];
                const Element = pages[Page.NAME];
                routesData.push({ path: ((Page.PATH).toLowerCase()).replace(" ", "-"), element: <Element /> });
            }
            setRoutesData(routesData);
        }
    }, [pages]);

    return useRoutes([
        {
            path: Path,
            element: <Container />,
            children: [
                { path: "", element: <Home />},
                { path: "Tracking", children: routesData },
            ]
        }, {
            path: "/*", element: routesData.length ? '404' : '...Loading'
        }
    ]);
}

export default MasterRoutes;
