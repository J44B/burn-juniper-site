import { createBrowserRouter, RouterProvider } from 'react-router';
import { MainLayout } from './layout/MainLayout.jsx';
import { HomePage } from './pages/indexPages.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
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
