import { createBrowserRouter, RouterProvider } from 'react-router';
import { MainLayout } from './layout/MainLayout.jsx';
import {
    HomePage,
    AboutPage,
    ContactPage,
    LivePage,
    MusicPage,
} from './pages/indexPages.js';

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            { path: '/about', element: <AboutPage /> },
            { path: '/music', element: <MusicPage /> },
            { path: '/live', element: <LivePage /> },
            { path: '/contact', element: <ContactPage /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
