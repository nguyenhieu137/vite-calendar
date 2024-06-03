import { ReactElement } from "react";
import Home from "../Pages/Home";
import Create from "../Pages/Create";

export const routePaths = {
    home: '/',
    create: '/create',
}

export interface Route {
    path: string;
    element: ReactElement;
}

export const routes: Route[] = [
    {
        path: routePaths.home,
        element: <Home/>
    },
    {
        path: routePaths.create,
        element: <Create />
    },
];
